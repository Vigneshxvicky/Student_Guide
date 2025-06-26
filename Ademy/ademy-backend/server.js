import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import fetch from 'node-fetch';  // If using Node 18+, native fetch is available, else install node-fetch
import dotenv from 'dotenv';
import { OAuth2Client } from 'google-auth-library'; // Import Google Auth Library

dotenv.config();  // Load environment variables from .env file

const app = express();
app.use(cors());
app.use(express.json());

// Add Cross-Origin-Opener-Policy header to allow Google login popups
app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
  next();
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});
// User Schema
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: false } // Password can be optional for Google users
  },
  { timestamps: true } // Added for better tracking, optional
);


// Initialize Google OAuth2Client
const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'; // Use environment variable for JWT secret


const User = mongoose.model('User', userSchema);

app.get('/api/test', async (req, res) => {
  try {
    res.json({ message: "Backend is working and connected to MongoDB!" });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong." });
  }
});
// Auth routes
app.post('/api/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
        if (!password) { // Ensure password is provided for local registration
      return res.status(400).json({ error: 'Password is required for local registration.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    
const token = jwt.sign({ userId: user._id }, JWT_SECRET);
res.json({ token, user: { username, email } });
  } catch (error) {
    console.error('Registration error:', error); // Always log the full error for debugging
    if (error.code === 11000 && error.keyPattern && error.keyPattern.email) {
      return res.status(400).json({ error: 'Email already registered. Please use a different email or log in.' });
    } else if (error.name === 'ValidationError') {
      // Handle Mongoose validation errors (e.g., missing required fields)
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ error: messages.join(', ') });
    }
    // Generic fallback for any other unexpected errors
    res.status(400).json({ error: error.message || 'An unknown error occurred during registration.' });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    // Check if user has a password set (i.e., not a Google-only user)
    if (!user.password) {
      return res.status(401).json({ error: 'This account was registered with Google. Please sign in with Google.' });
    }
    
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }
    
    const token = jwt.sign({ userId: user._id }, JWT_SECRET);
    res.json({ token, user: { username: user.username, email } });
  } catch (error) {
    console.error('Login error:', error); // Always log the full error for debugging
    // For login, a generic "Invalid credentials" is often preferred for security
    // to avoid revealing whether the email exists or the password is just wrong.
    // However, if you want to be more specific for debugging, you can use error.message.
    // For now, let's keep it simple and user-friendly.
    res.status(400).json({ error: 'Invalid email or password.' });
  }
});

// Google Auth endpoint
app.post('/api/auth/google', async (req, res) => {
  try {
    const { id_token } = req.body;

    if (!id_token) {
      return res.status(400).json({ error: 'Google ID token is missing.' });
    }

    const ticket = await googleClient.verifyIdToken({
      idToken: id_token,
      audience: process.env.GOOGLE_CLIENT_ID, // Specify the CLIENT_ID of the app that accesses the backend
    });
    const payload = ticket.getPayload();
    const { email, name: username, picture } = payload; // Extract user info

    if (!email) {
      return res.status(400).json({ error: 'Google ID token does not contain an email address.' });
    }

    let user = await User.findOne({ email });

    if (!user) {
      // If user doesn't exist, create a new one.
      user = new User({
        username: username || email.split('@')[0], // Use name from Google, or derive from email
        email: email,
        password: null // Explicitly set password to null for Google-only accounts
      });
      await user.save();
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET);
    res.json({ token, user: { username: user.username, email: user.email, picture } });

  } catch (error) {
    console.error('Google Auth error:', error);
    if (error.message.includes('Invalid ID Token')) {
      return res.status(401).json({ error: 'Invalid Google ID token.' });
    }
    res.status(500).json({ error: 'Failed to authenticate with Google.' });
  }
});

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY; // Use environment variable for YouTube API key


app.get('/api/youtube/tutorials', async (req, res) => {
  try {
    const level = req.query.level || 'beginner';
    const topic = req.query.topic || ''; // NEW: topic support

    // Compose YouTube search query: "<level> <topic> tutorial"
    const query = `${level} ${topic} tutorial`.trim();

    const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&key=${YOUTUBE_API_KEY}&type=video&maxResults=1`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!data.items) {
      console.error('YouTube API error:', data);
      return res.status(404).json({ videos: [], error: data.error || 'No items found' });
    }

    const tutorialVideos = data.items
      .filter(
        item =>
          item.snippet &&
          item.snippet.title &&
          item.id &&
          item.id.videoId &&
          item.snippet.thumbnails &&
          item.snippet.thumbnails.medium &&
          item.snippet.thumbnails.medium.url &&
          item.snippet.title.toLowerCase().includes('tutorial')
      )
      .map(item => ({
        videoId: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.medium.url,
      }));

    res.json({ videos: tutorialVideos });
  } catch (error) {
    console.error('Error fetching YouTube data:', error);
    res.status(500).json({ error: 'Failed to fetch tutorials' });
  }
});

// Make sure this is BEFORE app.listen!
app.put('/api/user/username', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET); // Use JWT_SECRET
    const user = await User.findByIdAndUpdate(
      decoded.userId,
      { username: req.body.username },
      { new: true }
    );
    res.json({ username: user.username });
  } catch (err) {
    res.status(401).json({ error: 'Unauthorized' });
  }
});

// This must be LAST!
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
