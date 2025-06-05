import React from 'react';

const ContactPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 pt-10 md:pt-12 min-h-[calc(100vh-12rem)] text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <div className="prose dark:prose-invert lg:prose-xl max-w-none text-gray-700 dark:text-gray-300">
        <p className="mb-4">
          Have questions, feedback, or need support? We'd love to hear from you!
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Get in Touch</h2>
        <p className="mb-4">
          You can reach us via email at: <a href="mailto:support@studyhub.example.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">support@studyhub.example.com</a>.
        </p>
        <p className="mb-4">
          For partnership inquiries, please contact <a href="mailto:partners@studyhub.example.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">partners@studyhub.example.com</a>.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Office Hours</h2>
        <p>
          Our support team is available Monday to Friday, 9:00 AM - 5:00 PM (Your Timezone).
        </p>
      </div>
    </div>
  );
};

export default ContactPage;