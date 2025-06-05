import React from 'react';

const AffiliatesPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 pt-10 md:pt-12 min-h-[calc(100vh-12rem)] text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold mb-8">Affiliate Program</h1>
      <div className="prose dark:prose-invert lg:prose-xl max-w-none text-gray-700 dark:text-gray-300">
        <p className="mb-4">
          Interested in partnering with StudyHub? Our affiliate program allows you to earn commissions by referring new users to our platform.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">How it Works</h2>
        <p className="mb-4">
          Details about the affiliate program, commission rates, and how to sign up will be available here soon.
        </p>
        <p>
          For early inquiries, please contact <a href="mailto:affiliates@studyhub.example.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">affiliates@studyhub.example.com</a>.
        </p>
      </div>
    </div>
  );
};

export default AffiliatesPage;