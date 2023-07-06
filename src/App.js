import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [blogs, setBlogs] = useState([]);

  const url = process.env.REACT_APP_URL_ENDPOINT;
// REACT_APP_URL_ENDPOINT = http://localhost:4000
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`${url}/blogs/all-blogs`);
      const data = await response.json();
      console.log(data)
      setBlogs(data);
    };
    getData();
  }, [url]);

  const handleNewBlog = async (blog) => {
    const response = await fetch(`${url}/blogs/new-blog`,{
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(blog)
    })
    console.log(response)
    const data = await response.json()
    console.log("data", data)
  }
  return (
    <div className="App">
      <h1>hello</h1>
      <Outlet  context={{ handleNewBlog, blogs}}/>
    </div>
  );
}

export default App;
