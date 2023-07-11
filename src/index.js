// index.js

// Import necessary dependencies and styles
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Import the main App component
import App from "./App";

// Import the Blogs and BlogForm components
import Blogs from "./pages/Blogs";
import BlogForm from "./components/BlogForm";
import EditForm from "./components/EditForm";

// Import other dependencies
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Create the router configuration
const router = createBrowserRouter([
  {
    path: "/", // Root path
    element: <App />, // Main App component
    children: [
      {
        index: true, // Set this as the default route
        path: "/", // Path for the Blogs component
        element: <Blogs />, // Render the Blogs component when the path matches
      },
      {
        path: "blog-form", // Path for the BlogForm component
        element: <BlogForm />, // Render the BlogForm component when the path matches
      },
      {
        path: "edit/:id",
        element: <EditForm />,
      },
    ],
  },
]);

// Create a root element and render the App component with the router
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// Measure and report web vitals
reportWebVitals();
