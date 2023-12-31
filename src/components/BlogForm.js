// Import necessary dependencies
import React, { useState } from 'react';
import { useOutletContext, useNavigate } from "react-router-dom";

// Define the BlogForm component
const BlogForm = () => {
  // State to store the input values
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
    
  // Access the handleNewBlog function from the context
  const { handleNewBlog, setShouldRefresh } = useOutletContext();
  
  // Import the useNavigate hook from React Router DOM 
  const navigate = useNavigate()

  // Handle form submission
  const handleOnSubmit = (e) => {
    e.preventDefault();
    
    setShouldRefresh(true)

    const newBlog = {
      title,
      content,
      author,
    };

    // Call the handleNewBlog function with the new blog data
    handleNewBlog(newBlog);
    
    // Perform navigation to the specified path ("/")
    navigate("/")
  }

  // Render the BlogForm component
  return (
    <div>
      <h1>New Post:</h1>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="title">Title:</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <br />
        <label htmlFor="content">Content:</label>
        <input value={content} onChange={(e) => setContent(e.target.value)} />
        <br />
        <label htmlFor="author">Author:</label>
        <input value={author} onChange={(e) => setAuthor(e.target.value)} />
        <br />
        <button>Post</button>
      </form>
    </div>
  );
}

export default BlogForm;
