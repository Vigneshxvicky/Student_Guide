import React from 'react';

const CareersPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 pt-10 md:pt-12 min-h-[calc(100vh-12rem)] text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold mb-8">Careers at StudyHub</h1>
      <div className="prose dark:prose-invert lg:prose-xl max-w-none text-gray-700 dark:text-gray-300">
        <p className="mb-4">
          Join our passionate team and help us build the future of online learning!
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Current Openings</h2>
        <p className="mb-4">
          We are not actively hiring for specific roles at the moment, but we are always interested in hearing from talented individuals.
        </p>
        <p>
          If you believe you have skills that would benefit StudyHub, feel free to send your resume and a cover letter to <a href="mailto:careers@studyhub.example.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">careers@studyhub.example.com</a>.
        </p>
      </div>
    </div>
  );
};

export default CareersPage;