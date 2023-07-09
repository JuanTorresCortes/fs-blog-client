import React from 'react';

// BlogCard component to display a single blog
const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <h1>{blog.title}</h1>
      <small>by: {blog.author}</small>
        <br />
      <small>Date: {blog.lastModified}</small>
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogCard;
