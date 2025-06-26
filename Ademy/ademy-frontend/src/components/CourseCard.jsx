import React from "react";

// Course Card Component (with optional description and video count)
const CourseCard = React.memo(({ title, icon, description, videoCount, onClick }) => (
  <div
    onClick={onClick}
    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col items-center text-center"
  >
    <span className="text-5xl mb-4">{icon}</span>
    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
      {title}
    </h3>
    {description && (
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{description}</p>
    )}
    {videoCount !== undefined && (
      <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
        {videoCount} videos
      </p>
    )}
  </div>
));

export default CourseCard;