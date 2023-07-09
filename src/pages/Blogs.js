import React from "react";
import BlogCard from "../components/BlogCard";
import { useOutletContext } from "react-router-dom";

// Blogs component to display a list of blogs
const Blogs = () => {
  // Access the blogs data from the context
  const { blogs } = useOutletContext();
  const { data } = blogs;
  console.log("this is data from Blogs.js", data);
  console.log("this is blogs in Blogs.js", blogs);
  return (
    <div>
      {/* Check if the blogs data is successfully fetched */}
      {blogs.success && (
        <div>
          {/* Map over the blogs data and render a BlogCard for each blog */}
          {data.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;
