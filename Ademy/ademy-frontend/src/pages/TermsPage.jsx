import React from 'react';

const TermsPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 pt-10 md:pt-12 min-h-[calc(100vh-12rem)] text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <div className="prose dark:prose-invert lg:prose-xl max-w-none text-gray-700 dark:text-gray-300">
        <p className="mb-4">
          Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the StudyHub website (the "Service") operated by StudyHub ("us", "we", or "our").
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Accounts</h2>
        <p className="mb-4">
          When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
        </p>
        {/* Add more sections as needed: Content, Use License, Disclaimer, Limitations, Revisions, Governing Law etc. */}
        <p className="mt-8">
          Last updated: [Current Date]
        </p>
      </div>
    </div>
  );
};

export default TermsPage;