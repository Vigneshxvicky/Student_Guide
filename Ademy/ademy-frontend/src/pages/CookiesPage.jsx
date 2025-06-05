import React from 'react';

const CookiesPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 pt-10 md:pt-12 min-h-[calc(100vh-12rem)] text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
      <div className="prose dark:prose-invert lg:prose-xl max-w-none text-gray-700 dark:text-gray-300">
        <p className="mb-4">
          This is the Cookie Policy for StudyHub, accessible from [Your Website URL].
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">What Are Cookies</h2>
        <p className="mb-4">
          As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Cookies</h2>
        <p className="mb-4">
          We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site.
        </p>
        {/* Add more sections as needed: Disabling Cookies, The Cookies We Set, Third Party Cookies, More Information etc. */}
      </div>
    </div>
  );
};

export default CookiesPage;