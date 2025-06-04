import express from 'express';
import fetch from 'node-fetch';  // If using Node 18+, native fetch is available, else install node-fetch
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();  // Load environment variables from .env file

const app = express();
app.use(cors());

const YOUTUBE_API_KEY = 'AIzaSyAdKb0vkmqJHQI011IGoeBNnDEROcWjaX8';  // Replace with your real API key

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

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

});
