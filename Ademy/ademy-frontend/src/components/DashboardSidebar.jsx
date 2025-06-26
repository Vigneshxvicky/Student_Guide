import React from 'react';

const DashboardSidebar = ({
  level,
  handleLevelSelect,
  progress,
  levels, // Now passed as a prop
  topics,
  selectedTopicIdx,
  handleTopicSelect,
  sidebarOpen,
}) => {
  return (
    <aside
      className={`fixed md:static right-0 top-16 h-[calc(100vh-4rem)] w-80 bg-white/80 dark:bg-gray-800/80 border-l dark:border-gray-700 rounded-l-2xl backdrop-blur-md shadow-xl transform transition-transform duration-300 ease-in-out ${
        sidebarOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
      }`}
    >
      <div className="p-4">
        {/* Level Selector */}
        <div className="relative w-full pb-1.5  ">
          <select
            value={level} // The value should be the current level state
            onChange={handleLevelSelect}
            className="block appearance-none w-full p-3 pr-10 text-lg rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer transition-all"
          >
            {levels.map((l) => (
              <option
                key={l.value}
                value={l.value}
                className="bg-white text-gray-900 dark:bg-gray-800 dark:text-white" // Ensure option text is visible in light mode
              >
                {l.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
            <svg
              className="w-6 h-6 text-gray-400 dark:text-gray-300 transition-transform duration-300 ease-in-out transform select-none"
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
              className="h-2 bg-purple-600 rounded-full transition-all duration-500"
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
                  selectedTopicIdx === tIdx
                    ? "bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-100 shadow"
                    : "hover:bg-purple-50 dark:hover:bg-purple-700/60"
                }`}
              >
                {topic.topic}
              </button>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;