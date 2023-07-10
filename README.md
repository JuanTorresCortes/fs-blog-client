# Blogging Application

This is a blogging application that allows users to create and view blog posts. Users can create new blog posts, view a list of all blogs, and navigate to individual blog posts to read the content. The application also provides upcoming features for editing and deleting blog posts.

## Features

- **Create New Blog:** Users can create new blog posts by providing a title, content, and author.
- **View All Blogs:** Users can view a list of all blog posts.
- **View Individual Blog:** Users can navigate to individual blog posts to read the content and view additional details.
- **Navigation:** The application includes a navigation bar with links to view all blogs and create a new blog post.

## Upcoming Features

- **Edit Blog:** Users will be able to edit the content of a blog post, allowing them to update the title, content, or author.
- **Delete Blog:** Users will have the option to delete a blog post completely.

## Components

- **App:** The main component that handles the overall structure of the application, including the navigation bar and rendering child components based on the current route.
- **NavBar:** Renders the navigation bar with links to view all blogs and create a new blog post.
- **Blogs:** Displays a list of all blog posts.
- **BlogCard:** Renders a single blog post with its title, author, last modified date, and content.
- **BlogForm:** Provides a form for creating a new blog post.

## User Stories

1. As a user, I want to be able to create a new blog post by providing a title, content, and author.
2. As a user, I want to view a list of all blog posts to see what topics are available.
3. As a user, I want to navigate to an individual blog post to read the content and view additional details.
4. (Upcoming Feature) As a user, I want to be able to edit the content of a blog post, allowing me to update the title, content, or author.
5. (Upcoming Feature) As a user, I want to have the option to delete a blog post completely.

## Technology Stack

- React: JavaScript library for building user interfaces.
- React Router DOM: Library for handling routing in a React application.
- CSS: Styling language for designing the application's user interface.

## Design and Overall Architecture

The application follows a client-side rendering architecture, where the UI components are rendered on the client side using React. The React Router DOM library is used to handle routing and provide navigation functionality. The application uses CSS for styling and layout.

The overall design of the application includes a navigation bar at the top, which allows users to navigate between the list of all blogs and the blog creation form. The list of all blogs is displayed in a grid format, with each blog post represented by a `BlogCard` component. Clicking on a blog post in the list navigates the user to the individual blog post page, where the full content and additional details are displayed.

The upcoming features will include an edit button on each blog post page, allowing users to update the content of the blog post, and a delete button to remove the blog post entirely.
