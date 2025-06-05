import React from 'react';

const PrivacyPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 pt-10 md:pt-12 min-h-[calc(100vh-12rem)] text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose dark:prose-invert lg:prose-xl max-w-none text-gray-700 dark:text-gray-300">
        <p className="mb-4">
          Your privacy is important to us. It is StudyHub's policy to respect your privacy regarding any information we may collect from you across our website.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
        <p className="mb-4">
          We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
        <p className="mb-4">
          We use the information we collect in various ways, including to provide, operate, and maintain our website, improve, personalize, and expand our website, understand and analyze how you use our website, and develop new products, services, features, and functionality.
        </p>
        {/* Add more sections as needed: Log Data, Cookies, Security, Links to Other Sites, Children’s Privacy, Changes to This Privacy Policy etc. */}
        <p className="mt-8">
          Last updated: [Current Date]
        </p>
      </div>
    </div>
  );
};

export default PrivacyPage;