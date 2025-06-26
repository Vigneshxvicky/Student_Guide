import React from "react";

const YouTubeEmbed = React.memo(function YouTubeEmbed({ videoId }) {
    const videoSrc = `https://www.youtube.com/embed/${videoId}`;

  // if (!videoId) return null; // Handle cases where videoId might be null
  return (
    <> {/* Reduced mb-4 to mb-2 */}
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
});

export default YouTubeEmbed;