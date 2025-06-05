import React from 'react';
import { Link } from 'react-router-dom';

const AdminLoginRequiredPage = () => {
  return (
    <div className="max-w-md mx-auto p-8 pt-20 text-center min-h-[calc(100vh-12rem)] text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4">Admin Access Required</h1>
      <p className="mb-6">
        You need to be logged in as an administrator to access this page.
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-2 bg-indigo-500 text-white rounded-lg font-semibold hover:bg-indigo-600 transition-colors"
      >
        Go to Login/Home
      </Link>
    </div>
  );
};

export default AdminLoginRequiredPage;