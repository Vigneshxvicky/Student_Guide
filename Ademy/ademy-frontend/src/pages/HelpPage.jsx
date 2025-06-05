import React from 'react';

const HelpPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 pt-10 md:pt-12 min-h-[calc(100vh-12rem)] text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold mb-8">Help Center</h1>
      <div className="prose dark:prose-invert lg:prose-xl max-w-none text-gray-700 dark:text-gray-300">
        <p className="mb-4">
          Welcome to the StudyHub Help Center. Find answers to frequently asked questions and learn how to make the most of our platform.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Frequently Asked Questions (FAQ)</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">How do I reset my password?</h3>
            <p>You can reset your password by clicking the "Forgot Password" link on the login page.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">How does the XP and Streak system work?</h3>
            <p>You earn XP for completing videos. Maintaining a daily activity contributes to your streak.</p>
          </div>
          {/* Add more FAQs as needed */}
        </div>
        <p className="mt-8">
          If you can't find an answer to your question, please <a href="/contact" className="text-indigo-600 dark:text-indigo-400 hover:underline">contact our support team</a>.
        </p>
      </div>
    </div>
  );
};

export default HelpPage;