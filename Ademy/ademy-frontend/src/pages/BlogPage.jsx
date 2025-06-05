import React from 'react';

const BlogPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 pt-10 md:pt-12 min-h-[calc(100vh-12rem)] text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold mb-8">StudyHub Blog</h1>
      <div className="prose dark:prose-invert lg:prose-xl max-w-none text-gray-700 dark:text-gray-300">
        <p className="mb-4">
          Welcome to the StudyHub blog! Here you'll find articles on learning strategies, productivity tips, technology updates, and insights into the world of online education.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Latest Posts</h2>
        <p className="mb-4">
          <em>No blog posts yet. Check back soon for exciting content!</em>
        </p>
        {/* Example Post Structure (when content is available)
        <article className="mb-6">
          <h3 className="text-xl font-semibold">Example Blog Post Title</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Published on: January 1, 2024</p>
          <p>Short excerpt of the blog post...</p>
          <a href="/blog/example-post" className="text-indigo-600 dark:text-indigo-400 hover:underline">Read more</a>
        </article> */}
      </div>
    </div>
  );
};

export default BlogPage;