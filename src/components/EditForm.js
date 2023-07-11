import React from "react";
import { useEffect, useState } from "react";
import { useParams, useOutletContext, useNavigate } from "react-router-dom";

const EditForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();
  const url = process.env.REACT_APP_URL_ENDPOINT;

  const { id } = useParams();
  const { blogs, setShouldRefresh } = useOutletContext();
  const allBlogs = blogs.data;

  useEffect(() => {
    if (allBlogs) {
      const foundBlog = allBlogs.find((blog) => blog._id === id);
      if (foundBlog) {
        setTitle(foundBlog.title);
        setContent(foundBlog.content);
      }
    }
  }, [id, blogs, allBlogs]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setShouldRefresh(true);

    const body = {
      title,
      content,
    };

    const response = await fetch(`${url}/blogs/edit/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const updatedBlog = await response.json();
    console.log(updatedBlog);
    setShouldRefresh(false);
    navigate("/");
  };

  const handleDelete = async () => {
    setShouldRefresh(true);
    const response = await fetch(`${url}/blogs/delete/${id}`, {
      method: "DELETE",
    });
    const deletedBlog = await response.json();
    console.log(deletedBlog);
    setShouldRefresh(false);
    navigate("/");
  };

  return (
    <div>
      <h1>New Post:</h1>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="title">Title:</label>
        <br />
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <br />
        <label htmlFor="content">Content:</label>
        <br />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <button style={{ backgroundColor: "green" }}>Post</button>
      </form>

      <hr style={{ width: "30%" }} />
      <br />
      <button style={{ backgroundColor: "red" }} onClick={handleDelete}>
        delete
      </button>
      <br />
      <button style={{ backgroundColor: "blue" }} onClick={() => navigate("/")}>
        cancel
      </button>
    </div>
  );
};

export default EditForm;
