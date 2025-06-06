import React, { useState, useEffect, useRef } from "react";
// import axios from "axios"; // Not used
import { Routes, Route, Navigate, Link } from "react-router-dom"; // Import Link
import "./App.css";
import confetti from "canvas-confetti";
import { updateUsername } from "./utils/updateUsername";
import { login, register } from "./utils/auth";
import { updateStreak } from "./utils/streak";
import useLocalStorage from "./hooks/useLocalStorage"; // Import the custom hook
import ProfileMenu from "./components/ProfileMenu";
import Footer from "./Footer";

// Page Imports
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CareersPage from "./pages/CareersPage";
import BlogPage from "./pages/BlogPage";
import HelpPage from "./pages/HelpPage";
import AffiliatesPage from "./pages/AffiliatesPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import CookiesPage from "./pages/CookiesPage";
import AdminPage from "./pages/AdminPage"; // Import AdminPage
import ProtectedRouteAdmin from "./components/ProtectedRouteAdmin"; // Import ProtectedRouteAdmin

import AdminLoginRequiredPage from "./pages/AdminLoginRequiredPage"; // Import AdminLoginRequiredPage
import ReactGA from 'react-ga4';
function GAListener() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
  }, [location]);

  return null;
}
// Hardcoded best beginner videos for each topic
const beginnerVideos = [
  {
    topic: "HTML",
    videos: [
      {
        title: "HTML Full Course for Beginners | Complete All-in-One Tutorial",
        url: "https://www.youtube.com/watch?v=mJgBOIoGihA",
        videoId: "mJgBOIoGihA",
      },
      {
        title: "HTML Tutorial for Beginners: HTML Crash Course",
        url: "https://www.youtube.com/watch?v=qz0aGYrrlhU",
        videoId: "qz0aGYrrlhU",
      },
    ],
  },
  {
    topic: "CSS",
    videos: [
      {
        title: "CSS Full Course for Beginners | Complete All-in-One Tutorial",
        url: "https://www.youtube.com/watch?v=n4R2E7O-Ngo",
        videoId: "n4R2E7O-Ngo",
      },
      {
        title: "CSS Tutorial – Full Course for Beginners",
        url: "https://www.youtube.com/watch?v=OXGznpKZ_sA",
        videoId: "OXGznpKZ_sA",
      },
    ],
  },
  {
    topic: "JavaScript",
    videos: [
      {
        title: "Learn JavaScript - Full Course for Beginners",
        url: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
        videoId: "PkZNo7MFNFg",
      },
      // {
      //   title: "JavaScript Tutorial Full Course - Beginner to Pro",
      //   url: "https://www.youtube.com/watch?v=EerdGm-ehJQ",
      //   videoId: "EerdGm-ehJQ",
      // },
    ],
  },
    {
    topic: "GitHub",
    videos: [
      {
        title: "Git and GitHub for Beginners - Crash Course",
        url: "https://www.youtube.com/watch?v=RGOj5yH7evk",
        videoId: "RGOj5yH7evk",
      },
      // Add another beginner GitHub video if desired
    ],
  },
  {
    topic: "Node.js",
    videos: [
      {
        title:
          "Node.js Full Course for Beginners | Complete All-in-One Tutorial",
        url: "https://www.youtube.com/watch?v=f2EqECiTBL8",
        videoId: "f2EqECiTBL8",
      },
      {
        title: "Node.js Tutorial for Beginners: Learn Node in 1 Hour",
        url: "https://www.youtube.com/watch?v=TlB_eWDSMt4",
        videoId: "TlB_eWDSMt4",
      },
    ],
  },
  {
    topic: "Express.js",
    videos: [
      {
        title: "Express JS Tutorial For Beginners",
        url: "https://www.youtube.com/playlist?list=PLp50dWW_m40Vruw9uKGNqySCNFLXK5YiO",
        videoId: null, // Playlist, not a single video
      },
      {
        title: "Express.js & Node.js Course for Beginners - Full Tutorial",
        url: "https://www.youtube.com/watch?v=G8uL0lFFoN0",
        videoId: "G8uL0lFFoN0",
      },
    ],
  },
  {
    topic: "React",
    videos: [
      {
        title:
          "React JS Full Course for Beginners | Complete All-in-One Tutorial",
        url: "https://www.youtube.com/watch?v=Ke90Tje7VS0",
        videoId: "Ke90Tje7VS0",
      },
      {
        title: "React JS Crash Course for Beginners",
        url: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
        videoId: "w7ejDZ8SWv8",
      },
    ],
  },
  {
    topic: "MongoDB",
    videos: [
      {
        title: "MongoDB Tutorial For Beginners | Full Course",
        url: "https://www.youtube.com/watch?v=Www6cTUymCY",
        videoId: "Www6cTUymCY",
      },
      {
        title: "MongoDB Tutorial for Beginners - Full Course",
        url: "https://www.youtube.com/watch?v=z4YKd8n1cKU",
        videoId: "z4YKd8n1cKU",
      },
    ],
  },
];

// Hardcoded best intermediate videos for each topic (all links are available)
const intermediateVideos = [
  {
    topic: "HTML",
    videos: [
      {
        title: "HTML5 Tutorial for Beginners: Complete HTML5 Course",
        url: "https://www.youtube.com/watch?v=UB1O30fR-EE",
        videoId: "UB1O30fR-EE",
        description: "A full HTML5 course with intermediate concepts.",
      },
    ],
  },
  {
    topic: "CSS",
    videos: [
      {
        title: "CSS Grid Tutorial",
        url: "https://www.youtube.com/watch?v=rg7Fvvl3taU",
        videoId: "rg7Fvvl3taU",
        description: "Learn CSS Grid in depth.",
      },
      {
        title: "Flexbox CSS In Depth",
        url: "https://www.youtube.com/watch?v=JJSoEo8JSnc",
        videoId: "JJSoEo8JSnc",
        description: "Master Flexbox for responsive layouts.",
      },
    ],
  },
  {
    topic: "JavaScript",
    videos: [
      {
        title: "JavaScript ES6 Tutorial",
        url: "https://www.youtube.com/watch?v=NCwa_xi0Uuc",
        videoId: "NCwa_xi0Uuc",
        description: "Learn modern JavaScript features (ES6+).",
      },
      {
        title: "JavaScript Higher Order Functions & Arrays",
        url: "https://www.youtube.com/watch?v=rRgD1yVwIvE",
        videoId: "rRgD1yVwIvE",
        description: "Intermediate JavaScript concepts.",
      },
    ],
  },
    {
    topic: "GitHub",
    videos: [
      {
        title: "Intermediate Git and GitHub",
        url: "https://www.youtube.com/watch?v=qsTthZi23VE", // Example video
        videoId: "qsTthZi23VE",
        description: "Branching, merging, and collaboration with GitHub.",
      },
    ],
  },
  {
    topic: "Node.js",
    videos: [
      {
        title: "Node.js Crash Course",
        url: "https://www.youtube.com/watch?v=fBNz5xF-Kx4",
        videoId: "fBNz5xF-Kx4",
        description: "Intermediate Node.js concepts and building REST APIs.",
      },
    ],
  },
  {
    topic: "Express.js",
    videos: [
      {
        title: "Express.js Crash Course",
        url: "https://www.youtube.com/watch?v=L72fhGm1tfE",
        videoId: "L72fhGm1tfE",
        description: "Intermediate Express.js concepts.",
      },
    ],
  },
  {
    topic: "MongoDB",
    videos: [
      {
        title: "MongoDB Tutorial for Beginners (Intermediate)",
        url: "https://www.youtube.com/watch?v=ofme2o29ngU",
        videoId: "ofme2o29ngU",
        description: "Intermediate MongoDB concepts and CRUD operations.",
      },
    ],
  },
  {
    topic: "React",
    videos: [
      {
        title: "React State Management – Intermediate JavaScript Course",
        url: "https://www.youtube.com/watch?v=35lXWvCuM8o",
        videoId: "35lXWvCuM8o",
        description: "Understand state management in React applications.",
      },
    ],
  },
];

// Hardcoded best advanced videos for each topic
const advancedVideos = [
  {
    topic: "HTML & CSS",
    videos: [
      {
        title: "Responsive Web Design Advanced CSS and HTML5",
        url: "https://www.youtube.com/watch?v=srvUrASNj0s",
        videoId: "srvUrASNj0s",
        description: "Advanced responsive design techniques.",
      },
    ],
  },
  {
    topic: "JavaScript",
    videos: [
      {
        title: "JavaScript Design Patterns",
        url: "https://www.youtube.com/watch?v=tv-_1er1mWI",
        videoId: "tv-_1er1mWI",
        description: "Advanced JavaScript design patterns.",
      },
      {
        title: "Asynchronous JavaScript Deep Dive",
        url: "https://www.youtube.com/watch?v=PoRJizFvM7s",
        videoId: "PoRJizFvM7s",
        description: "Promises, async/await, and advanced async patterns.",
      },
    ],
  },
    {
    topic: "GitHub",
    videos: [
      {
        title: "Advanced Git: Rebase, Cherry-pick, Reflog",
        url: "https://www.youtube.com/watch?v=tW_F72WT2XU", // Example video
        videoId: "tW_F72WT2XU",
        description: "Master advanced Git commands and GitHub workflows.",
      },
    ],
  },
  {
    topic: "Node.js",
    videos: [
      {
        title: "Node.js Streams and Buffer",
        url: "https://www.youtube.com/watch?v=U3aXWizDbQ4",
        videoId: "U3aXWizDbQ4",
        description: "Advanced Node.js concepts: streams and buffers.",
      },
    ],
  },
  {
    topic: "Express.js",
    videos: [
      {
        title: "Express.js Authentication & Authorization",
        url: "https://www.youtube.com/watch?v=2jqok-WgelI",
        videoId: "2jqok-WgelI",
        description: "JWT authentication and authorization in Express.js.",
      },
    ],
  },
  {
    topic: "React",
    videos: [
      {
        title: "React Performance Optimization",
        url: "https://www.youtube.com/watch?v=CUxH_rWSI1k",
        videoId: "CUxH_rWSI1k",
        description: "Advanced React performance techniques.",
      },
      {
        title: "React Testing with Jest and React Testing Library",
        url: "https://www.youtube.com/watch?v=ML5egqL3YFE",
        videoId: "ML5egqL3YFE",
        description: "Testing React apps with modern tools.",
      },
    ],
  },
  {
    topic: "MongoDB",
    videos: [
      {
        title: "MongoDB Aggregation Framework",
        url: "https://www.youtube.com/watch?v=Zp6Jp80Qz3g",
        videoId: "Zp6Jp80Qz3g",
        description: "Advanced data processing with MongoDB aggregation.",
      },
    ],
  },
];

const levels = [
  { value: "beginner", label: "Beginner", videos: beginnerVideos },
  { value: "intermediate", label: "Intermediate", videos: intermediateVideos },
  { value: "advanced", label: "Advanced", videos: advancedVideos },
];


function YouTubeEmbed({ videoId }) {
    const videoSrc = `https://www.youtube.com/embed/${videoId}`;

  // if (!videoId) return null; // Handle cases where videoId might be null
  return (
    <>
      <div className="aspect-w-16 aspect-h-9 mb-2"> {/* Reduced mb-4 to mb-2 */}
        <iframe
          src={videoSrc}
          className="w-full h-full rounded-lg"
          title="YouTube video player"
          allowFullScreen
          frameBorder="0"
        />
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-1">
        If the video doesn't play, try clicking the YouTube logo on the player to watch it directly on YouTube.
      </p>
    </>
  );
}

// Component for the main dashboard content (Sidebar, Main Video/Notes)
// Header is now part of the main App component
const DashboardContent = ({
  level, setLevel, completedVideos, /* setCompletedVideos, // Handled by App */
  selectedTopicIdx, /* setSelectedTopicIdx, // Handled by App */ selectedVideoIdx, /* setSelectedVideoIdx, // Handled by App */
  /* darkMode, setDarkMode, // Handled by App */
  sidebarOpen, /* setSidebarOpen, // Handled by App */
  /* user, setUser, // Handled by App */
  /* profileMenuOpen, setProfileMenuOpen, editingUsername, setEditingUsername, // Handled by App */
  /* newUsername, setNewUsername, lastActive, setLastActive, streak, setStreak, xp, setXp, // Handled by App */
  quote, /* setQuote, // Handled by App */
  /* profileMenuRef, // Handled by App */ bookmarkedVideos, /* setBookmarkedVideos, // Handled by App */ videoNotes, /* setVideoNotes, // Handled by App */
  currentNoteText, setCurrentNoteText, currentNoteTimestamp, setCurrentNoteTimestamp,
  /* handleLogout, handleUsernameSave, // Handled by App */ toggleCompleted, toggleBookmark, handleAddNote, handleDeleteNote,
  handleLevelSelect, handleTopicSelect, topics, selectedTopic, selectedVideo, progress, totalVideos
}) => {

  return (
    <>
      {/* Main Content Area (Video, Notes) */}
      <main className="flex-1 p-4 md:p-8"> {/* mt-16 is handled by the parent div of Routes */}
        <div className="max-w-4xl mx-auto">
          {selectedVideo && (
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 mb-4 animate-fadein">
              <h2 className="text-xl font-bold mb-4">
                {selectedVideo.title}
              </h2>
              <YouTubeEmbed videoId={selectedVideo.videoId} />
              <div className="flex space-x-3">
                <button
                  onClick={() => toggleCompleted(selectedVideo.videoId)}
                  className={`px-4 py-2 rounded-lg font-semibold shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                    completedVideos[selectedVideo.videoId]
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-indigo-500 hover:bg-indigo-600"
                  } text-white`}
                >
                  {completedVideos[selectedVideo.videoId]
                    ? "✓ Completed"
                    : "Mark as Complete"}
                </button>
                <button
                  onClick={() => toggleBookmark(selectedVideo.videoId)}
                  className={`p-2 rounded-lg font-semibold shadow transition-all duration-200 focus:outline-none focus:ring-2 ${
                    bookmarkedVideos[selectedVideo.videoId]
                      ? "bg-yellow-400 hover:bg-yellow-500 text-yellow-800 focus:ring-yellow-300"
                      : "bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-200 focus:ring-gray-400"
                  }`}
                  aria-label={bookmarkedVideos[selectedVideo.videoId] ? "Remove bookmark" : "Add bookmark"}
                >
                  {bookmarkedVideos[selectedVideo.videoId] ? "★ Saved" : "☆ Save"}
                </button>
              </div>
            </div>
          )}
          {/* Notes Section */}
          {selectedVideo && selectedVideo.videoId && (
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 my-4 animate-fadein">
              <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                My Notes for this Video
              </h3>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Timestamp (e.g., 02:15)"
                  value={currentNoteTimestamp}
                  onChange={(e) => setCurrentNoteTimestamp(e.target.value)}
                  className="w-full p-2 mb-2 border rounded-md dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                />
                <textarea
                  placeholder="Write your note here..."
                  value={currentNoteText}
                  onChange={(e) => setCurrentNoteText(e.target.value)}
                  rows="3"
                  className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                />
                <button
                  onClick={() => handleAddNote(selectedVideo.videoId)}
                  className="mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold shadow transition-colors"
                >
                  Add Note
                </button>
              </div>
              <div className="space-y-2">
                {(videoNotes[selectedVideo.videoId] || []).length === 0 && (
                  <p className="text-sm text-gray-500 dark:text-gray-400">No notes for this video yet.</p>
                )}
                {(videoNotes[selectedVideo.videoId] || []).map((note) => (
                  <div key={note.id} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm flex justify-between items-start">
                    <div>
                      <span className="font-semibold text-indigo-600 dark:text-indigo-400 mr-2">[{note.timestamp}]</span>
                      <span className="text-gray-700 dark:text-gray-300">{note.text}</span>
                    </div>
                    <button
                      onClick={() => handleDeleteNote(selectedVideo.videoId, note.id)}
                      className="text-red-500 hover:text-red-700 dark:hover:text-red-400 text-xs"
                    >🗑️</button>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="mb-2 text-center text-indigo-500 dark:text-indigo-200 font-semibold italic">
            {quote}
          </div>
          {/* TODO: Consider adding a section/tab to display bookmarked videos */}
        </div>
      </main>

      {/* Right Sidebar */}
      <aside
        className={`fixed md:static right-0 top-16 h-[calc(100vh-4rem)] w-80 bg-white/80 dark:bg-gray-800/80 border-l dark:border-gray-700 rounded-l-2xl backdrop-blur-md shadow-xl transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-4">
          {/* Level Selector */}
          <div className="relative w-full pb-1.5  ">
            <select
              value={level}
              onChange={handleLevelSelect}
              className="block appearance-none w-full p-3 pr-10 text-lg rounded-lg border border-gray-300 dark:border-gray-600 bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg backdrop-blur-md cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-500"
            >
              {levels.map((l) => (
                <option
                  key={l.value}
                  value={l.value}
                  className="bg-gray-800 text-white"
                >
                  {l.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <svg
                className="w-6 h-6 text-white transition-transform duration-300 ease-in-out transform select-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-2 bg-gradient-to-r from-indigo-400 to-pink-400 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 text-right">
              {progress}% Complete
            </p>
          </div>

          {/* Course List */}
          <div className="space-y-2">
            {topics.map((topic, tIdx) => (
              <div key={topic.topic} className="rounded-md overflow-hidden">
                <button
                  onClick={() => handleTopicSelect(tIdx)}
                  className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                    tIdx === selectedTopicIdx
                      ? "bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 shadow"
                      : "hover:bg-indigo-50 dark:hover:bg-gray-700"
                  }`}
                >
                  {topic.topic}
                </button>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};


function App() {
  // All state variables are managed here in the top-level App component
  const [level, setLevel] = useState("beginner");
  const [completedVideos, setCompletedVideos] = useState({});
  const [selectedTopicIdx, setSelectedTopicIdx] = useState(0);
  const [selectedVideoIdx, setSelectedVideoIdx] = useState(0);
  const [darkMode, setDarkMode] = useState(() => {
    return (
      localStorage.getItem("darkMode") === "true" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [authMode, setAuthMode] = useState("login"); // "login" or "register"
  const [authForm, setAuthForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [authError, setAuthError] = useState("");
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [editingUsername, setEditingUsername] = useState(false);
  const [newUsername, setNewUsername] = useState(user?.username || "");
  const [lastActive, setLastActive] = useState(
    () => localStorage.getItem("lastActive") || null
  );
  const [streak, setStreak] = useState(() =>
    Number(localStorage.getItem("streak") || 0)
  );
  const [xp, setXp] = useState(() => Number(localStorage.getItem("xp") || 0));
  const [quote, setQuote] = useState("");
  const profileMenuRef = useRef(null);
  const [bookmarkedVideos, setBookmarkedVideos] = useState(() => {
    return JSON.parse(localStorage.getItem("bookmarkedVideos")) || {};
  });
  const [videoNotes, setVideoNotes] = useLocalStorage("videoNotes", {});
  // State for the current note input
  const [currentNoteText, setCurrentNoteText] = useState("");
  const [currentNoteTimestamp, setCurrentNoteTimestamp] = useState("");

  // Simple localStorage-based authentication for demo
  useEffect(() => {
    const savedUser = localStorage.getItem("ademyUser");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  // Quote effect
  useEffect(() => {
    const quotes = [
      "Every day is a chance to get better! 💪",
      "Consistency is the key to success! 🔑",
      "Small progress is still progress. 🌱",
      "You’re building your future, one video at a time! 🎯",
      "Stay curious, stay awesome! 🤓",
    ];
    // Only set quote if user is logged in and on the dashboard route (implicitly handled by rendering DashboardContent)
    if (user) {
       setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }
  }, [user, selectedVideoIdx, selectedTopicIdx]);

  // Apply dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // Load completed videos from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("completedVideos");
    if (stored) setCompletedVideos(JSON.parse(stored));
  }, []);

  // Load bookmarked videos from localStorage on mount
  useEffect(() => {
    const storedBookmarks = localStorage.getItem("bookmarkedVideos");
    if (storedBookmarks) setBookmarkedVideos(JSON.parse(storedBookmarks));
  }, []);

  // Close profile menu on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setProfileMenuOpen(false);
        setEditingUsername(false); // Also reset editing state
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside); // Cleanup
  }, [profileMenuRef]); // Dependency is correct

  // Track streak
  useEffect(() => {
    if (user) { // Only track streak if user is logged in
      updateStreak(user, lastActive, setStreak, setLastActive);
    }
  }, [user, lastActive, setStreak, setLastActive]); // Added setters as dependencies

  // Save best streak/xp
  useEffect(() => {
    if (user) { // Only save if user is logged in
      if (streak > Number(localStorage.getItem("bestStreak") || 0)) {
        localStorage.setItem("bestStreak", streak);
      }
      if (xp > Number(localStorage.getItem("bestXp") || 0)) {
        localStorage.setItem("bestXp", xp);
      }
    }
  }, [user, streak, xp]);


  const handleAuthInput = (e) => {
    setAuthForm({ ...authForm, [e.target.name]: e.target.value });
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    setAuthError("");
    try {
      const data =
        authMode === "login" ? await login(authForm) : await register(authForm);
      setUser(data.user); // Assuming data.user contains the user object
      localStorage.setItem("ademyUser", JSON.stringify(data.user)); // Save user object
      localStorage.setItem("ademyToken", data.token);
      setAuthForm({ username: "", email: "", password: "" });
    } catch (error) {
      setAuthError(error.response?.data?.error || "An error occurred");
    }
  };

  const handleLogout = () => {
    setUser(null);
    // Clear user-specific data from state/localStorage on logout
    localStorage.removeItem("ademyUser");
    localStorage.removeItem("ademyToken");
    setCompletedVideos({});
    localStorage.removeItem("completedVideos");
    setBookmarkedVideos({});
    localStorage.removeItem("bookmarkedVideos");
    setVideoNotes({});
    localStorage.removeItem("videoNotes"); // useLocalStorage handles saving, but clear on logout
    setStreak(0);
    localStorage.setItem("streak", 0);
    setXp(0);
    localStorage.setItem("xp", 0);
    setLastActive(null);

    // navigate('/'); // Requires useNavigate hook from react-router-dom
  };

  // Username update handler
  const handleUsernameSave = async () => {
    if (!newUsername.trim()) return;
    try {
      const ok = await updateUsername(newUsername);
      if (ok) {
        setUser((u) => ({ ...u, username: newUsername }));
        localStorage.setItem("ademyUser", JSON.stringify({ ...user, username: newUsername })); // Update user in localStorage
        setEditingUsername(false);
      }
    } catch (err) {
      console.error("Failed to update username:", err);
    }
  };

  // Mark video as completed
  const toggleCompleted = (videoId) => {
    const wasCompleted = completedVideos[videoId]; // Check if it was completed before this toggle

    setCompletedVideos(prev => { // Use functional update for safety
      const updated = { ...prev, [videoId]: !prev[videoId] };
      localStorage.setItem("completedVideos", JSON.stringify(updated)); // Ensure saving to localStorage
      return updated;
    });

    // XP: +10 for new completion
    if (!wasCompleted) { // Only award XP if marking as complete for the first time
      setXp((x) => {
        const newXp = x + 10;
        localStorage.setItem("xp", newXp);
        return newXp;
      });
    }

    // Confetti on completing ALL videos
    const currentLevelVideos = levels.find(l => l.value === level)?.videos || [];
    const totalVideosInCurrentLevel = currentLevelVideos.reduce((sum, t) => sum + t.videos.length, 0);
     const updatedCompletedCount = Object.values({ ...completedVideos, [videoId]: !completedVideos[videoId] }).filter(Boolean).length;

    if (!wasCompleted && updatedCompletedCount === totalVideosInCurrentLevel && totalVideosInCurrentLevel > 0) { // Added check for totalVideos > 0
       confetti();
    }
  };

  // Toggle bookmark status for a video
  const toggleBookmark = (videoId) => {
    setBookmarkedVideos(prev => {
      const updatedBookmarks = {
        ...prev,
        [videoId]: !prev[videoId],
      };
      localStorage.setItem("bookmarkedVideos", JSON.stringify(updatedBookmarks));
      return updatedBookmarks;
    });
  };

  // Add a note to the current video
  const handleAddNote = (videoId) => {
    if (!videoId || !currentNoteText.trim()) return;
    const newNote = {
      id: Date.now().toString(), // Simple unique ID
      timestamp: currentNoteTimestamp.trim() || "N/A",
      text: currentNoteText.trim(),
    };
    setVideoNotes((prevNotes) => {
      const updatedNotes = {
        ...prevNotes,
        [videoId]: [...(prevNotes[videoId] || []), newNote],
      };
      // useLocalStorage hook handles saving to localStorage
      return updatedNotes;
    });
    setCurrentNoteText("");
    setCurrentNoteTimestamp("");
  };

  // Delete a note from a video
  const handleDeleteNote = (videoId, noteId) => {
    setVideoNotes((prevNotes) => {
      const updatedNotes = {
        ...prevNotes,
        [videoId]: (prevNotes[videoId] || []).filter((note) => note.id !== noteId),
      };
       // useLocalStorage hook handles saving to localStorage
      return updatedNotes;
    });
  };

  // When topic changes, reset video selection
  const handleTopicSelect = (idx) => {
    setSelectedTopicIdx(idx);
    setSelectedVideoIdx(0);
  };

  // When level changes, reset topic/video selection
  const handleLevelSelect = (e) => {
    setLevel(e.target.value);
    setSelectedTopicIdx(0);
    // setSelectedVideoIdx(0); // This line is redundant
    // Optionally clear completed videos for the new level, or keep them
    // setCompletedVideos({});
    // localStorage.removeItem("completedVideos");
  };

  // Get current level's topics and selected video
  const currentLevelData = levels.find((l) => l.value === level); // Renamed to avoid conflict
  const topics = currentLevelData ? currentLevelData.videos : [];
  const selectedTopic = topics[selectedTopicIdx] || topics[0];
  const selectedVideo =
    selectedTopic && selectedTopic.videos[selectedVideoIdx]
      ? selectedTopic.videos[selectedVideoIdx]
      : selectedTopic?.videos[0]; // Use optional chaining

  // Progress calculation for the CURRENT level
  const totalVideosInCurrentLevel = topics.reduce((sum, t) => sum + t.videos.length, 0);
  const completedCountInCurrentLevel = Object.keys(completedVideos).filter(videoId => {
      // Check if the videoId belongs to the current level's topics
      return topics.some(topic => topic.videos.some(video => video.videoId === videoId)) && completedVideos[videoId];
  }).length;

  const progress = totalVideosInCurrentLevel
    ? Math.min(100, Math.round((completedCountInCurrentLevel / totalVideosInCurrentLevel) * 100)) // Ensure progress doesn't exceed 100%
    : 0;

  // If user is not logged in, show the authentication form
  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
        {/* App Title */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-3xl md:text-4xl">🎓</span>
          <span className="text-3xl md:text-4xl font-extrabold text-indigo-600 dark:text-indigo-300 drop-shadow-lg tracking-wide">
            StudyHub
          </span>
        </div>
        <form
          onSubmit={handleAuth}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-sm"
        >
          <h2 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 text-center mb-6">
            {authMode === "login" ? "Login" : "Register"}
          </h2>
          {authMode === "register" && (
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={authForm.username}
              onChange={handleAuthInput}
              className="w-full p-2 mb-4 rounded border dark:bg-gray-700 dark:text-gray-100"
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={authForm.email}
            onChange={handleAuthInput}
            className="w-full p-2 mb-4 rounded border dark:bg-gray-700 dark:text-gray-100"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={authForm.password}
            onChange={handleAuthInput}
            className="w-full p-2 mb-4 rounded border dark:bg-gray-700 dark:text-gray-100"
            required
          />
          {authError && (
            <div className="text-red-500 text-sm text-center mb-4">
              {authError}
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 transition"
          >
            {authMode === "login" ? "Login" : "Register"}
          </button>
          <button
            type="button"
            className="w-full text-sm text-indigo-600 dark:text-indigo-400 mt-4"
            onClick={() => {
              setAuthMode(authMode === "login" ? "register" : "login");
              setAuthError("");
            }}
          >
            {authMode === "login"
              ? "Need an account? Register"
              : "Have an account? Login"}
          </button>
        </form>
      </div>
    );
  }

  // If user is logged in, render the main application layout with routes
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-pink-50 to-white dark:from-gray-900 dark:via-indigo-900 dark:to-indigo-800 transition-colors duration-300">
      {/* Header - Render Header here to be global across all logged-in routes */}
       <header className="fixed top-0 left-0 right-0 z-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:via-indigo-900 dark:to-indigo-800 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Title - Wrapped with Link */}
            <div className="flex items-center gap-x-4">
              <Link to="/" className="flex items-center gap-3">
                <div> {/* Added div to ensure Link styles apply correctly if needed, or style Link directly */}
                  <span className="text-2xl md:text-3xl">🎓</span>
                  <span className="text-2xl md:text-3xl font-extrabold text-white drop-shadow-lg tracking-wide">
                    StudyHub
                  </span>
                </div>
              </Link>
              
            </div>
            <div className="flex flex-col items-start md:items-center gap-1">
              <span className="text-xs md:text-sm text-white font-semibold">
                🔥 Streak: {streak} day{streak !== 1 ? "s" : ""}
              </span>
              <span className="text-xs md:text-sm text-yellow-200 font-semibold">
                ⭐ XP: {xp}
              </span>
              {streak > 2 && (
                <span className="text-xs text-green-200 italic">
                  Keep it up! 🚀
                </span>
              )}
            </div>
            {/* Header Controls */}
            <div className="flex items-center space-x-4">
              {/* Dark Mode Toggle */}
                {/* Home link for desktop */}
                <Link to="/" className="hidden md:block text-white hover:text-indigo-200 transition-colors font-semibold">
                  Home
                </Link> 
              <button
                onClick={() => setDarkMode((prev) => !prev)}
                className="p-2 rounded-full hover:bg-white/20 transition-colors text-white"
                aria-label="Toggle dark mode"
              >
                {darkMode ? "🌙" : "☀️"}
              </button>
              {/* Profile Icon */}
              <ProfileMenu  
                user={user}
                setUser={setUser}
                profileMenuOpen={profileMenuOpen}
                setProfileMenuOpen={setProfileMenuOpen}
                editingUsername={editingUsername}
                setEditingUsername={setEditingUsername}
                newUsername={newUsername}
                setNewUsername={setNewUsername}
                handleUsernameSave={handleUsernameSave}
                handleLogout={handleLogout}
                streak={streak}
                xp={xp}
                profileMenuRef={profileMenuRef} // Pass the ref
              />
              {/* Mobile Sidebar Toggle */}
              <button
                onClick={() => setSidebarOpen((prev) => !prev)}
                className="md:hidden p-2 rounded-md hover:bg-white/20 text-white"
              >
                {sidebarOpen ? "✖" : "☰"}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area controlled by Routes */}
      <div className="flex-1 flex mt-16"> {/* Added mt-16 to offset fixed header */}
        <Routes>
          <GAListener />
          {/* Route for the main dashboard content */}
          {/* DashboardContent includes its own Main and Sidebar */}
          <Route path="/" element={
            <DashboardContent
              level={level} setLevel={setLevel}
              completedVideos={completedVideos} // setCompletedVideos is handled by App
              selectedTopicIdx={selectedTopicIdx} // setSelectedTopicIdx is handled by App
              selectedVideoIdx={selectedVideoIdx} // setSelectedVideoIdx is handled by App
              // darkMode={darkMode} setDarkMode={setDarkMode} // Handled by App
              sidebarOpen={sidebarOpen} // setSidebarOpen is handled by App
              // user={user} setUser={setUser} // Handled by App
              // profileMenuOpen={profileMenuOpen} setProfileMenuOpen={setProfileMenuOpen} // Handled by App
              // editingUsername={editingUsername} setEditingUsername={setEditingUsername} // Handled by App
              // newUsername={newUsername} setNewUsername={setNewUsername} // Handled by App
              // lastActive={lastActive} setLastActive={setLastActive} // Handled by App
              // streak={streak} setStreak={setStreak} // Handled by App
              // xp={xp} setXp={setXp} // Handled by App
              quote={quote} // setQuote is handled by App
              // profileMenuRef={profileMenuRef} // Handled by App
              bookmarkedVideos={bookmarkedVideos} // setBookmarkedVideos is handled by App
              videoNotes={videoNotes} // setVideoNotes is handled by App
              currentNoteText={currentNoteText} setCurrentNoteText={setCurrentNoteText}
              currentNoteTimestamp={currentNoteTimestamp} setCurrentNoteTimestamp={setCurrentNoteTimestamp}
              // handleLogout={handleLogout} // Handled by App
              // handleUsernameSave={handleUsernameSave} // Handled by App
              toggleCompleted={toggleCompleted}
              toggleBookmark={toggleBookmark}
              handleAddNote={handleAddNote}
              handleDeleteNote={handleDeleteNote}
              handleLevelSelect={handleLevelSelect}
              handleTopicSelect={handleTopicSelect}
              topics={topics}
              selectedTopic={selectedTopic}
              selectedVideo={selectedVideo}
              progress={progress}
              totalVideos={totalVideosInCurrentLevel} // Pass total videos for current level
            />
          } />

          {/* Routes for footer pages */}
          {/* These pages will render within the main flex container, below the header */}
          {/* The mt-16 on the main container handles the fixed header offset */}
          <Route path="/about" element={<main className="flex-1 p-4 md:p-8"><AboutPage /></main>} />
          <Route path="/contact" element={<main className="flex-1 p-4 md:p-8"><ContactPage /></main>} />
          <Route path="/careers" element={<main className="flex-1 p-4 md:p-8"><CareersPage /></main>} />
          <Route path="/blog" element={<main className="flex-1 p-4 md:p-8"><BlogPage /></main>} />
          <Route path="/help" element={<main className="flex-1 p-4 md:p-8"><HelpPage /></main>} />
          <Route path="/affiliates" element={<main className="flex-1 p-4 md:p-8"><AffiliatesPage /></main>} />
          <Route path="/terms" element={<main className="flex-1 p-4 md:p-8"><TermsPage /></main>} />
          <Route path="/privacy" element={<main className="flex-1 p-4 md:p-8"><PrivacyPage /></main>} />
          <Route path="/cookies" element={<main className="flex-1 p-4 md:p-8"><CookiesPage /></main>} />
          <Route path="/admin/login" element={<main className="flex-1 p-4 md:p-8"><AdminLoginRequiredPage /></main>} />

          {/* Protected Admin Route */}
          <Route 
            path="/admin" 
            element={
              <ProtectedRouteAdmin user={user}>
                <main className="flex-1 p-4 md:p-8"><AdminPage /></main>
              </ProtectedRouteAdmin>
            } 
          />

          {/* Redirect any unknown paths to home */}
          <Route path="*" element={<Navigate to="/" />} />
          
        </Routes>
      </div>

      {/* Footer - Render Footer here to be global across all logged-in routes */}
      <Footer />
    </div>
  );
}
export default App;

/* Add this to your App.css for a fade-in animation: */
/*
@keyframes fadein {
  from { opacity: 0; transform: translateY(24px);}
  to { opacity: 1; transform: translateY(0);}
}
.animate-fadein {
  animation: fadein 0.6s cubic-bezier(.4,0,.2,1);
}
*/
