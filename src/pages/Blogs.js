import React from 'react';
import { useOutletContext } from 'react-router-dom';

const Blogs = () => {
    // Access the blogs data from the context
    const { blogs } = useOutletContext();

    // Log the blogs data to the console for debugging purposes
    console.log(blogs);

    // Destructure the 'data' property from the blogs object
    const { data } = blogs;

    return (
        <div>
            {/* Render the title */}
            <h1>Blogs</h1>
            {/* Check if the blogs data is successfully fetched */}
            {blogs.success && (
                <div>
                    {/* Map over the data and render each blog */}
                    {data.map((blog) => {
                        // Render the title of each blog
                        return <p>{blog.title}</p>;
                    })}
                </div>
            )}
        </div>
    );
}

export default Blogs;
