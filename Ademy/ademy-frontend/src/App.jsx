import React, { useState, useEffect } from "react";
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
      {
        title: "JavaScript Tutorial Full Course - Beginner to Pro",
        url: "https://www.youtube.com/watch?v=EerdGm-ehJQ",
        videoId: "EerdGm-ehJQ",
      },
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

function App() {
  const [level, setLevel] = useState("beginner");
  const [completedVideos, setCompletedVideos] = useState({});
  const [selectedTopicIdx, setSelectedTopicIdx] = useState(0);
  const [selectedVideoIdx, setSelectedVideoIdx] = useState(0);
  const [darkMode, setDarkMode] = useState(() => {
    // Persist dark mode preference
    return localStorage.getItem("darkMode") === "true";
  });

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

  return (
    <div
      className={`min-h-screen flex flex-col ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      <header
        className={`bg-white dark:bg-gray-800 shadow py-4 px-8 flex items-center justify-between`}
      >
        <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          FullStack Study Assistant
        </h1>
        <div className="flex items-center gap-4">
          <select
            value={level}
            onChange={handleLevelSelect}
            className="p-2 border rounded-md dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
          >
            {levels.map((l) => (
              <option key={l.value} value={l.value}>
                {l.label}
              </option>
            ))}
          </select>
          <button
            onClick={() => setDarkMode((d) => !d)}
            className="ml-2 px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 dark:text-gray-100 border dark:border-gray-600 transition"
            aria-label="Toggle dark mode"
            title="Toggle dark mode"
          >
            {darkMode ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
      </header>
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-72 bg-white dark:bg-gray-800 border-r dark:border-gray-700 p-4 overflow-y-auto">
          <h2 className="font-bold text-lg mb-4">Course Curriculum</h2>
          <ul>
            {topics.map((topic, tIdx) => (
              <li key={topic.topic} className="mb-2">
                <div
                  className={`cursor-pointer px-2 py-1 rounded font-semibold ${
                    tIdx === selectedTopicIdx
                      ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => handleTopicSelect(tIdx)}
                >
                  {topic.topic}
                </div>
                <ul className="ml-4 mt-1">
                  {topic.videos.map((video, vIdx) => (
                    <li
                      key={video.videoId || video.url}
                      className={`flex items-center cursor-pointer px-2 py-1 rounded text-sm ${
                        tIdx === selectedTopicIdx && vIdx === selectedVideoIdx
                          ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-800 dark:text-indigo-200"
                          : "hover:bg-gray-50 dark:hover:bg-gray-700"
                      }`}
                      onClick={() => {
                        setSelectedTopicIdx(tIdx);
                        setSelectedVideoIdx(vIdx);
                      }}
                    >
                      <span className="mr-2">
                        {completedVideos[video.videoId] ? "✅" : "▶️"}
                      </span>
                      {video.title}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </aside>
        {/* Main Content */}
        <main className="flex-1 p-8 flex flex-col items-center bg-gray-50 dark:bg-gray-900">
          {selectedVideo && (
            <div className="w-full max-w-2xl">
              <h2 className="text-xl font-bold mb-2">{selectedVideo.title}</h2>
              {selectedVideo.videoId ? (
                <iframe
                  width="100%"
                  height="400"
                  src={`https://www.youtube.com/embed/${selectedVideo.videoId}`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg shadow"
                ></iframe>
              ) : (
                <a
                  href={selectedVideo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-600 underline mb-4"
                >
                  Watch on YouTube (Playlist)
                </a>
              )}
              <p className="mt-4 text-gray-700 dark:text-gray-200">
                {selectedVideo.description}
              </p>
              {selectedVideo.videoId && (
                <button
                  className={`mt-4 px-4 py-2 rounded ${
                    completedVideos[selectedVideo.videoId]
                      ? "bg-green-500 text-white"
                      : "bg-indigo-200 dark:bg-indigo-700 dark:text-white"
                  }`}
                  onClick={() => toggleCompleted(selectedVideo.videoId)}
                >
                  {completedVideos[selectedVideo.videoId]
                    ? "Completed"
                    : "Mark as Completed"}
                </button>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
