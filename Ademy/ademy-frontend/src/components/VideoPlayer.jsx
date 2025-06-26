import React from 'react';
import YouTubeEmbed from './YouTubeEmbed';

const VideoPlayer = ({
  selectedVideo,
  toggleCompleted,
  completedVideos,
  toggleBookmark,
  bookmarkedVideos,
}) => {
  if (!selectedVideo) {
    return null;
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 mb-4 animate-fadein">
      <h2 className="text-xl font-bold mb-4">
        {selectedVideo.title}
      </h2>
      <YouTubeEmbed videoId={selectedVideo.videoId} />
      <div className="flex space-x-3">
        <button
          onClick={() => toggleCompleted(selectedVideo.videoId)}
          className={`px-4 py-2 rounded-lg font-semibold shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 ${
            completedVideos[selectedVideo.videoId]
              ? "bg-green-500 hover:bg-green-600"
              : "bg-purple-600 hover:bg-purple-700"
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
  );
};

export default VideoPlayer;