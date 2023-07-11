// Import necessary dependencies and styles
import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";

// Define the App component
function App() {
  // State to store the blogs
  const [blogs, setBlogs] = useState({});
  const [shouldRefresh, setShouldRefresh] = useState(false);

  const url = process.env.REACT_APP_URL_ENDPOINT;

  // Fetch blogs data from the server
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`${url}/blogs/all-blogs`);
      const data = await response.json();
      setBlogs(data);
    };
    getData();
  }, [url, shouldRefresh]);

  // Function to handle the creation of a new blog
  const handleNewBlog = async (blog) => {
    const response = await fetch(`${url}/blogs/new-blog`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(blog),
    });
    const data = await response.json();
    setShouldRefresh(false);
    console.log("data", data);
  };

  // Render the App component
  return (
    <div className="App">
      <NavBar />
      <h1>Blogs</h1>
      <select>
        <option value="new">Newest blog</option>
        <option value="old">Oldest blog</option>
      </select>
      {/* Render the child component based on the matched route */}
      <Outlet
        context={{
          handleNewBlog,
          blogs,
          setShouldRefresh,
        }}
      />
    </div>
  );
}

export default App;
