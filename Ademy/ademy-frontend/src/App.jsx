import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./App.css";

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
];

const levels = [
  { value: "beginner", label: "Beginner", videos: beginnerVideos },
  { value: "intermediate", label: "Intermediate", videos: intermediateVideos },
  { value: "advanced", label: "Advanced", videos: advancedVideos },
];

const beginnerSingleVideos = [
  {
    topic: "HTML",
    video: {
      title: "HTML Full Course for Beginners | Complete All-in-One Tutorial",
      videoId: "mJgBOIoGihA",
    },
  },
  {
    topic: "CSS",
    video: {
      title: "CSS Full Course for Beginners | Complete All-in-One Tutorial",
      videoId: "n4R2E7O-Ngo",
    },
  },
  {
    topic: "JavaScript",
    video: {
      title: "Learn JavaScript - Full Course for Beginners",
      videoId: "PkZNo7MFNFg",
    },
  },
  {
    topic: "Node.js",
    video: {
      title: "Node.js Full Course for Beginners | Complete All-in-One Tutorial",
      videoId: "f2EqECiTBL8",
    },
  },
  {
    topic: "Express.js",
    video: {
      title: "Express.js & Node.js Course for Beginners - Full Tutorial",
      videoId: "G8uL0lFFoN0",
    },
  },
  {
    topic: "React",
    video: {
      title:
        "React JS Full Course for Beginners | Complete All-in-One Tutorial",
      videoId: "Ke90Tje7VS0",
    },
  },
  {
    topic: "MongoDB",
    video: {
      title: "MongoDB Tutorial For Beginners | Full Course",
      videoId: "Www6cTUymCY",
    },
  },
];

function YouTubeEmbed({ videoId }) {
  return (
    <div className="video-container">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube tutorial"
        allowFullScreen
        frameBorder="0"
      />
    </div>
  );
}

function App() {
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
  const profileMenuRef = useRef(null);

  // Simple localStorage-based authentication for demo
  useEffect(() => {
    const savedUser = localStorage.getItem("ademyUser");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const handleAuthInput = (e) => {
    setAuthForm({ ...authForm, [e.target.name]: e.target.value });
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    setAuthError("");

    try {
      const endpoint = authMode === "login" ? "/api/login" : "/api/register";
      const response = await axios.post(
        `http://localhost:5000${endpoint}`,
        authForm
      );

      setUser(response.data.user);
      localStorage.setItem("ademyToken", response.data.token);
      setAuthForm({ username: "", email: "", password: "" });
    } catch (error) {
      setAuthError(error.response?.data?.error || "An error occurred");
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("ademyUser");
  };

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

  // Close profile menu on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target)
      ) {
        setProfileMenuOpen(false);
        setEditingUsername(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Username update handler
  const handleUsernameSave = async () => {
    try {
      // Update username in backend
      const token = localStorage.getItem("ademyToken");
      const res = await axios.put(
        "http://localhost:5000/api/user/username",
        { username: newUsername },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setUser((u) => ({ ...u, username: newUsername }));
      setEditingUsername(false);
    } catch (err) {
      // handle error (show toast or alert)
    }
  };

  const currentLevel = levels.find((l) => l.value === level);
  const topics = currentLevel ? currentLevel.videos : [];
  const selectedTopic = topics[selectedTopicIdx] || topics[0];
  const selectedVideo =
    selectedTopic && selectedTopic.videos[selectedVideoIdx]
      ? selectedTopic.videos[selectedVideoIdx]
      : selectedTopic && selectedTopic.videos[0];

  // Mark video as completed
  const toggleCompleted = (videoId) => {
    const updated = {
      ...completedVideos,
      [videoId]: !completedVideos[videoId],
    };
    setCompletedVideos(updated);
    localStorage.setItem("completedVideos", JSON.stringify(updated));
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
    setSelectedVideoIdx(0);
  };

  // Progress calculation
  const totalVideos = topics.reduce((sum, t) => sum + t.videos.length, 0);
  const completedCount = Object.values(completedVideos).filter(Boolean).length;
  const progress = totalVideos
    ? Math.round((completedCount / totalVideos) * 100)
    : 0;

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

  // Updated header with profile icon
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:via-indigo-900 dark:to-indigo-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Title */}
            <div className="flex items-center gap-3">
              <span className="text-2xl md:text-3xl">🎓</span>
              <span className="text-2xl md:text-3xl font-extrabold text-white drop-shadow-lg tracking-wide">
                StudyHub
              </span>
            </div>
            {/* Header Controls */}
            <div className="flex items-center space-x-4">
              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode((prev) => !prev)}
                className="p-2 rounded-full hover:bg-white/20 transition-colors text-white"
                aria-label="Toggle dark mode"
              >
                {darkMode ? "🌙" : "☀️"}
              </button>
              {/* Profile Icon */}
              <div className="relative" ref={profileMenuRef}>
                <button
                  className="w-9 h-9 rounded-full bg-white/30 flex items-center justify-center text-lg font-bold text-white border-2 border-white shadow"
                  onClick={() => setProfileMenuOpen((open) => !open)}
                  aria-label="Profile"
                >
                  {user?.username?.[0]?.toUpperCase() || "👤"}
                </button>
                {/* Profile Dropdown */}
                {profileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50">
                    <div className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200 border-b dark:border-gray-700 flex items-center gap-2">
                      {editingUsername ? (
                        <>
                          <input
                            className="flex-1 p-1 rounded border dark:bg-gray-700 dark:text-white"
                            value={newUsername}
                            onChange={(e) => setNewUsername(e.target.value)}
                          />
                          <button
                            className="text-green-600 dark:text-green-400 text-xs font-bold"
                            onClick={handleUsernameSave}
                          >
                            Save
                          </button>
                          <button
                            className="text-red-500 text-xs font-bold"
                            onClick={() => {
                              setEditingUsername(false);
                              setNewUsername(user?.username || "");
                            }}
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <>
                          <span className="flex-1 truncate">{user?.username}</span>
                          <button
                            className="text-xs text-indigo-600 dark:text-indigo-300 underline"
                            onClick={() => setEditingUsername(true)}
                          >
                            Edit
                          </button>
                        </>
                      )}
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
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

      {/* Main Content */}
      <div className="flex-1 flex mt-16">
        {/* Main Area */}
        <main className="flex-1 p-4 md:p-8">
          <div className="max-w-4xl mx-auto">
            {selectedVideo && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 mb-4">
                <h2 className="text-xl font-bold mb-4">
                  {selectedVideo.title}
                </h2>
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedVideo.videoId}`}
                    className="w-full h-full rounded-lg"
                    allowFullScreen
                  />
                </div>
                <button
                  onClick={() => toggleCompleted(selectedVideo.videoId)}
                  className={`px-4 py-2 rounded-md ${
                    completedVideos[selectedVideo.videoId]
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-indigo-500 hover:bg-indigo-600"
                  } text-white transition-colors`}
                >
                  {completedVideos[selectedVideo.videoId]
                    ? "✓ Completed"
                    : "Mark as Complete"}
                </button>
              </div>
            )}
          </div>
        </main>

        {/* Right Sidebar */}
        <aside
          className={`fixed md:static right-0 top-16 h-[calc(100vh-4rem)] w-80 bg-white dark:bg-gray-800 border-l dark:border-gray-700 transform transition-transform duration-300 ease-in-out ${
            sidebarOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
          }`}
        >
          <div className="p-4">
            {/* Level Selector */}
            <select
              value={level}
              onChange={handleLevelSelect}
              className="w-full p-2 mb-4 rounded-md border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            >
              {levels.map((l) => (
                <option key={l.value} value={l.value}>
                  {l.label}
                </option>
              ))}
            </select>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                <div
                  className="h-2 bg-indigo-500 rounded-full transition-all duration-300"
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
                    className={`w-full text-left p-3 ${
                      tIdx === selectedTopicIdx
                        ? "bg-indigo-50 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300"
                        : "hover:bg-gray-50 dark:hover:bg-gray-700"
                    }`}
                  >
                    {topic.topic}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t dark:border-gray-700">
        <div className="flex justify-around p-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-indigo-600 dark:text-indigo-400"
          >
            📚 Curriculum
          </button>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {progress}% Complete
          </div>
        </div>
      </nav>
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
