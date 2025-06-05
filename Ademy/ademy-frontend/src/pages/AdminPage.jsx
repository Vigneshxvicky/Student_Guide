import React from 'react';

const AdminPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 pt-10 md:pt-12 min-h-[calc(100vh-12rem)] text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
      <div className="prose dark:prose-invert lg:prose-xl max-w-none text-gray-700 dark:text-gray-300">
        <p className="mb-4">
          Welcome to the Admin Dashboard. Here you can manage users, content, and other site settings.
        </p>
        {/* Placeholder for admin functionalities */}
        <div className="mt-8 p-4 border rounded-md dark:border-gray-700">
          <h2 className="text-2xl font-semibold mb-3">User Management</h2>
          <p>User management features will be available here.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;