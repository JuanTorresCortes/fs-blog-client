import React from "react";
import { useNavigate } from "react-router-dom";

// BlogCard component to display a single blog
const BlogCard = ({ blog }) => {
  const navigate = useNavigate();
  return (
    <div className="blog-card">
      <h1>{blog.title}</h1>
      <small>by: {blog.author}</small>
      <br />
      <small>Date: {blog.lastModified}</small>
      <p>{blog.content}</p>
      <button
        style={{ backgroundColor: "green" }}
        onClick={() => navigate(`/edit/${blog._id}`)}
      >
        Edit blog
      </button>
    </div>
  );
};

export default BlogCard;
