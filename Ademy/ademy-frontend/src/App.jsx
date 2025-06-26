import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom"; // Import useNavigate
import "./App.css";
import confetti from "canvas-confetti";
import { updateUsername } from "./utils/updateUsername";
import { login, register } from "./utils/auth"; // Assuming these handle local auth
import { updateStreak } from "./utils/streak";
import useLocalStorage from "./hooks/useLocalStorage"; // Import the custom hook
import { mainTopicsData } from "./data"; // Import main topics data
import AuthPage from "./pages/AuthPage"; // This is actually AdminPage.jsx content
import AuthenticatedLayout from "./AuthenticatedLayout"; // New component


function App() {
  // All state variables are managed here in the top-level App component
  const [level, setLevel] = useState("beginner");
  const [completedVideos, setCompletedVideos] = useState({});
  const [selectedTopicIdx, setSelectedTopicIdx] = useState(null);
  const [showTopicChoice, setShowTopicChoice] = useState(true);
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
  const [selectedMainTopic, setSelectedMainTopic] = useState(null);

  // Simple localStorage-based authentication for demo
  useEffect(() => {
    const savedUser = localStorage.getItem("ademyUser");
    if (savedUser) setUser(JSON.parse(savedUser));
    // No navigation here, routing will handle it
   }, []);

  // Quote effect, only set quote if user is logged in and on the dashboard route
  useEffect(() => {
    const quotes = [
      "Every day is a chance to get better! 💪",
      "Consistency is the key to success! 🔑",
      "Small progress is still progress. 🌱",
      "You’re building your future, one video at a time! 🎯",
      "Stay curious, stay awesome! 🤓",
    ];
    // Only set quote if user is logged in
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
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target)
      ) {
        setProfileMenuOpen(false);
        setEditingUsername(false); // Also reset editing state
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside); // Cleanup
  }, [profileMenuRef]); // Dependency is correct

  // Track streak
  useEffect(() => {
    if (user) {
      // Only track streak if user is logged in
      updateStreak(user, lastActive, setStreak, setLastActive);
    }
  }, [user, lastActive, setStreak, setLastActive]); // Added setters as dependencies

  // Save best streak/xp
  useEffect(() => {
    if (user) {
      // Only save if user is logged in
      if (streak > Number(localStorage.getItem("bestStreak") || 0)) {
        localStorage.setItem("bestStreak", streak);
      }
      if (xp > Number(localStorage.getItem("bestXp") || 0)) {
        localStorage.setItem("bestXp", xp);
      }
    }
  }, [user, streak, xp]);

  // --- DERIVED DATA ---
  // Get the available levels for the currently selected main topic
  const levelsForCurrentTopic = useMemo(() => {
    if (!selectedMainTopic) return [];
    return Object.values(mainTopicsData[selectedMainTopic].levels);
  }, [selectedMainTopic]);

  // Get the data for the currently selected level within the main topic
  const currentLevelData = useMemo(() => {
    if (!selectedMainTopic || !level) return null;
    return mainTopicsData[selectedMainTopic].levels[level];
  }, [selectedMainTopic, level]);

  // Get the list of topics (e.g., HTML, CSS) for the current level
  const topics = useMemo(() => {
    if (!currentLevelData) return [];
    return currentLevelData.videos;
  }, [currentLevelData]);

  const selectedTopic = useMemo(
    () => topics[selectedTopicIdx] || topics[0],
    [topics, selectedTopicIdx]
  );

  const selectedVideo = useMemo(
    () =>
      selectedTopic && selectedTopic.videos[selectedVideoIdx]
        ? selectedTopic.videos[selectedVideoIdx]
        : selectedTopic?.videos[0],
    [selectedTopic, selectedVideoIdx]
  );

  // Progress calculation for the CURRENT level
  const totalVideosInCurrentLevel = useMemo(
    () => topics.reduce((sum, t) => sum + t.videos.length, 0),
    [topics]
  );

  const completedCountInCurrentLevel = useMemo(
    () =>
      Object.keys(completedVideos).filter(
        (videoId) =>
          topics.some((topic) =>
            topic.videos.some((video) => video.videoId === videoId)
          ) && completedVideos[videoId]
      ).length,
    [completedVideos, topics]
  );

  // --- CALLBACKS & HANDLERS ---

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

  const handleGoogleAuth = async (idToken) => {
    setAuthError("");
    try {
      // Ensure your .env file has VITE_BACKEND_URL=http://localhost:5000 (or your backend URL)
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/google`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id_token: idToken }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Google authentication failed.");
      }
      setUser(data.user);
      localStorage.setItem("ademyUser", JSON.stringify(data.user));
      localStorage.setItem("ademyToken", data.token);
      // navigate('/'); // No need to navigate here, the Route will handle it

    } catch (error) {
      console.error("Google Auth API error:", error);
      setAuthError(error.message || "An error occurred during Google authentication.");
    }
  };

  const handleLogout = useCallback(() => {
    setUser(null); // Triggers re-render, other states will be reset based on !user
    localStorage.removeItem("ademyUser");
    localStorage.removeItem("ademyToken");
    // For states managed by useState, explicitly reset them
    setCompletedVideos({});
    localStorage.removeItem("completedVideos"); // Also clear localStorage directly
    setBookmarkedVideos({});
    localStorage.removeItem("bookmarkedVideos");
    setVideoNotes({}); // This will be handled by useLocalStorage to clear its storage too
    setStreak(0);
    localStorage.setItem("streak", "0");
    setXp(0);
    localStorage.setItem("xp", "0");
    setLastActive(null);
    localStorage.removeItem("lastActive");
    // No need to navigate, the app will show login screen due to !user
  }, [setVideoNotes]); // setVideoNotes from useLocalStorage might be stable, but include if it's not guaranteed

  // Username update handler
  const handleUsernameSave = useCallback(async () => {
    if (!newUsername.trim()) return;
    try {
      const ok = await updateUsername(newUsername);
      if (ok) {
        setUser((prevUser) => {
          const updatedUser = { ...prevUser, username: newUsername };
          localStorage.setItem("ademyUser", JSON.stringify(updatedUser));
          return updatedUser;
        });
        setEditingUsername(false);
      }
    } catch (err) {
      console.error("Failed to update username:", err);
      // Optionally set an error state here to inform the user
    }
  }, [newUsername, setUser, setEditingUsername]); // user removed as it's accessed via functional update

  // Mark video as completed
  const toggleCompleted = useCallback(
    (videoId) => {
      const wasCompleted = completedVideos[videoId]; // Check if it was completed before this toggle

      setCompletedVideos((prev) => {
        const updated = { ...prev, [videoId]: !prev[videoId] };
        localStorage.setItem("completedVideos", JSON.stringify(updated));
        return updated;
      });

      if (!wasCompleted) {
        setXp((x) => {
          const newXp = x + 10;
          localStorage.setItem("xp", String(newXp));
          return newXp;
        });
      }

      // Confetti on completing ALL videos
      // This logic needs access to `topics` which is derived below.
      // For simplicity, we might not put confetti logic inside useCallback if it complicates dependencies too much,
      // or we pass necessary derived data to this callback.
      // Let's assume `level` and `completedVideos` are sufficient for now.
          if (currentLevelData) {
      const topicsForConfetti = currentLevelData.videos;

        const totalVideosInCurrentLevelForConfetti = topicsForConfetti.reduce(
          (sum, t) => sum + t.videos.length,
          0
        );
        // Check against the *new* state of completedVideos
        const newCompletedState = {
          ...completedVideos,
          [videoId]: !completedVideos[videoId],
        };
        const completedCountForConfetti = Object.keys(newCompletedState).filter(
          (vidId) =>
            topicsForConfetti.some((topic) =>
              topic.videos.some((video) => video.videoId === vidId)
            ) && newCompletedState[vidId]
        ).length;

        if (
          !wasCompleted &&
          completedCountForConfetti === totalVideosInCurrentLevelForConfetti &&
          totalVideosInCurrentLevelForConfetti > 0
        ) {
          confetti();
        }
      }
    },
    [completedVideos, setCompletedVideos, setXp, currentLevelData]
  ); // `levels` is stable

  // Toggle bookmark status for a video
  const toggleBookmark = useCallback(
    (videoId) => {
      setBookmarkedVideos((prev) => {
        const updatedBookmarks = {
          ...prev,
          [videoId]: !prev[videoId],
        };
        localStorage.setItem(
          "bookmarkedVideos",
          JSON.stringify(updatedBookmarks)
        );
        return updatedBookmarks;
      });
    },
    [setBookmarkedVideos]
  );

  // Add a note to the current video
  const handleAddNote = useCallback(
    (videoId) => {
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
    },
    [
      currentNoteText,
      currentNoteTimestamp,
      setVideoNotes,
      setCurrentNoteText,
      setCurrentNoteTimestamp,
    ]
  );

  // Delete a note from a video
  const handleDeleteNote = useCallback(
    (videoId, noteId) => {
      setVideoNotes((prevNotes) => {
        const updatedNotes = {
          ...prevNotes,
          [videoId]: (prevNotes[videoId] || []).filter(
            (note) => note.id !== noteId
          ),
        };
        // useLocalStorage hook handles saving to localStorage
        return updatedNotes;
      });
    },
    [setVideoNotes]
  );

  // Function to handle the selection of a main topic
  const handleMainTopicSelect = (topicName) => {
    setSelectedMainTopic(topicName);
    setShowTopicChoice(false); // Hide the topic choice after selection
    setSelectedTopicIdx(0); // Start with the first sub-topic
    setSelectedVideoIdx(0);
  };

  // Function to go back to the main course selection screen
  const handleGoBackToCourses = () => {
    setShowTopicChoice(true);
    setSelectedMainTopic(null);
  };

  const handleTopicSelect = useCallback((idx) => {
    setSelectedTopicIdx(idx);
    setSelectedVideoIdx(0);
  }, []);

  // When level changes, reset topic/video selection
  const handleLevelSelect = useCallback(
    (e) => {
      setLevel(e.target.value);
      setSelectedTopicIdx(0);
      setSelectedVideoIdx(0); // Explicitly reset video index too
    },
    [setLevel, setSelectedTopicIdx, setSelectedVideoIdx]
  );

  const progress = useMemo(
    () =>
      totalVideosInCurrentLevel
        ? Math.min(
            100,
            Math.round(
              (completedCountInCurrentLevel / totalVideosInCurrentLevel) * 100
            )
          )
        : 0,
    [completedCountInCurrentLevel, totalVideosInCurrentLevel]
  );

  return (
    <Routes>
      {/* Root path: Redirects based on authentication status */}
      <Route
        path="/"
        element={
          user ? (
            <Navigate to="/app" replace /> // Logged in: go to /app
          ) : (
            <Navigate to="/login" replace /> // Not logged in: go to /login
          )
        }
      />

      {/* Public route for authentication */}
      <Route
        path="/login"
        element={
          user ? (
            <Navigate to="/app" replace /> // Already logged in: go to /app
          ) : (
            <AuthPage
              authMode={authMode}
              setAuthMode={setAuthMode}
              authForm={authForm}
              handleAuthInput={handleAuthInput}
              handleAuth={handleAuth}
              authError={authError}
              setAuthError={setAuthError}
              handleGoogleAuth={handleGoogleAuth} // Ensure this prop is passed and used in AuthPage
            />
          )
        }
      />

      {/* Protected routes - all other paths */}
      <Route
        path="/app/*" // All main app routes start with /app
        element={
          user ? (
            <AuthenticatedLayout
              user={user}
              setUser={setUser}
              streak={streak}
              xp={xp}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
              profileMenuOpen={profileMenuOpen}
              setProfileMenuOpen={setProfileMenuOpen}
              editingUsername={editingUsername}
              setEditingUsername={setEditingUsername}
              newUsername={newUsername}
              setNewUsername={setNewUsername}
              handleUsernameSave={handleUsernameSave}
              handleLogout={handleLogout}
              profileMenuRef={profileMenuRef}
              showTopicChoice={showTopicChoice}
              handleGoBackToCourses={handleGoBackToCourses}
              handleMainTopicSelect={handleMainTopicSelect}
              selectedMainTopic={selectedMainTopic}
              level={level}
              levelsForCurrentTopic={levelsForCurrentTopic}
              handleLevelSelect={handleLevelSelect}
              completedVideos={completedVideos}
              selectedTopicIdx={selectedTopicIdx}
              quote={quote}
              bookmarkedVideos={bookmarkedVideos}
              videoNotes={videoNotes}
              currentNoteText={currentNoteText}
              setCurrentNoteText={setCurrentNoteText}
              currentNoteTimestamp={currentNoteTimestamp}
              setCurrentNoteTimestamp={setCurrentNoteTimestamp}
              toggleCompleted={toggleCompleted}
              toggleBookmark={toggleBookmark}
              handleAddNote={handleAddNote}
              handleDeleteNote={handleDeleteNote}
              handleTopicSelect={handleTopicSelect}
              topics={topics}
              selectedVideo={selectedVideo}
              progress={progress}
            />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
    </Routes>
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
