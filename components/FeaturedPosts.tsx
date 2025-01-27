'use client';

import React, { useState } from "react";

type Post = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  content: string;
};

type FeaturedPostsProps = {
  posts: Post[];
};

const FeaturedPosts: React.FC<FeaturedPostsProps> = ({ posts }) => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const handleReadMore = (postId: number) => {
    const post = posts.find((p) => p.id === postId);
    if (post) {
      setSelectedPost(post);
    }
  };

  const handleClose = () => {
    setSelectedPost(null);
  };

  return (
    <section className="py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-blue-600 text-gray-800">
          Featured Posts
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 dark:text-white text-gray-900">
                  {post.title}
                </h3>
                <p className="text-sm dark:text-gray-300 text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <button
                  onClick={() => handleReadMore(post.id)}
                  className="bg-blue-600 text-white dark:bg-blue-500 dark:hover:bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition-all"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-4xl w-full mx-4 p-6 relative">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-700"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4 dark:text-white text-gray-800">
              {selectedPost.title}
            </h2>
            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <p className="text-gray-700 dark:text-gray-300">
              {selectedPost.content}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedPosts;
