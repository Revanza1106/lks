// src/components/BlogList.js
import React from 'react';

const BlogList = ({ posts, onPostClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="border p-4 cursor-pointer hover:bg-gray-100"
          onClick={() => onPostClick(post)}
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-40 object-cover mb-2"
          />
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p className="mt-2">{post.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
