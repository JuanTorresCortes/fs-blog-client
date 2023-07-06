// App.js

// Import necessary dependencies and styles
import React, { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import "./App.css";

// Define the App component
function App() {
  // State to store the blogs
  const [blogs, setBlogs] = useState([]);

  // Fetch blogs data from the server
  useEffect(() => {
    const url = process.env.REACT_APP_URL_ENDPOINT;
    const getData = async () => {
      const response = await fetch(`${url}/blogs/all-blogs`);
      const data = await response.json();
      setBlogs(data);
    };
    getData();
  }, []);

  // Function to handle the creation of a new blog
  const handleNewBlog = async (blog) => {
    const url = process.env.REACT_APP_URL_ENDPOINT;
    const response = await fetch(`${url}/blogs/new-blog`, {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(blog)
    });
    const data = await response.json();
    console.log("data", data);
  }

  // Render the App component
  return (
    <div className="App">
      <h1>hello</h1>
      {/* Render the child component based on the matched route */}
      <Outlet context={{ handleNewBlog, blogs }} />
    </div>
  );
}

export default App;
