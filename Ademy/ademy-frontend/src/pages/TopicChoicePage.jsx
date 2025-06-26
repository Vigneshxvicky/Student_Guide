import React from 'react';
import CourseCard from '../components/CourseCard';
import { mainTopicsData } from '../data';

const TopicChoicePage = ({ handleMainTopicSelect }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 pt-16">
      <div className="flex items-center gap-3 mb-8">
        <span className="text-3xl md:text-4xl">🚀</span>
        <span className="text-3xl md:text-4xl font-extrabold text-purple-600 dark:text-purple-400 drop-shadow-lg tracking-wide">
          Choose Your Path
        </span>
      </div>
      <div className="flex flex-wrap justify-center gap-6 max-w-4xl p-4">
        {Object.values(mainTopicsData).map((topic) => (
          <CourseCard
            key={topic.key}
            title={topic.label}
            icon={topic.icon}
            description={topic.description}
            onClick={() => handleMainTopicSelect(topic.key)}
          />
        ))}
      </div>
    </div>
  );
};

export default TopicChoicePage;
