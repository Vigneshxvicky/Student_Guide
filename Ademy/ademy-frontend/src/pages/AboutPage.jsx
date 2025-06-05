import React from 'react';

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 pt-10 md:pt-12 min-h-[calc(100vh-12rem)] text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold mb-8">About StudyHub</h1>
      <div className="prose dark:prose-invert lg:prose-xl max-w-none text-gray-700 dark:text-gray-300">
        <p className="mb-4">
          Welcome to StudyHub, your personal learning companion designed to help you master new skills through curated video content.
          Our mission is to provide an engaging and effective platform for students and lifelong learners.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Vision</h2>
        <p className="mb-4">
          We believe that education should be accessible, flexible, and tailored to individual needs. StudyHub aims to empower users
          by organizing the vast world of online educational videos into structured learning paths, complete with progress tracking,
          note-taking, and motivational features.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Features</h2>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Curated video playlists by topic and difficulty.</li>
          <li>Progress tracking and XP system to gamify learning.</li>
          <li>Streak counter to build consistent study habits.</li>
          <li>Timestamped note-taking for efficient review.</li>
          <li>Bookmarking for easy access to important videos.</li>
          <li>Dark mode for comfortable viewing.</li>
        </ul>
        <p className="mt-6">
          StudyHub is continuously evolving, and we are committed to adding new features and content to enhance your learning journey.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;