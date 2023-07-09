import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <span>
          {/* Link to view all blogs */}  {/* Link to the blog-form route */}
          <Link to="/">All Blogs</Link> <Link to="/blog-form">New Blog</Link>
      </span> 
    </nav>
  );
};

export default NavBar;
