import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [jsonResponse, setJsonResponse] = useState({ message: "" });
  const url = process.env.REACT_APP_URL_ENDPOINT;

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`${url}/blogs/hello`);
      const data = await response.json();
      setJsonResponse(data);
    };
    getData();
  }, []);
  return (
    <div className="App">
      <h1>hello</h1>
      <Outlet />
    </div>
  );
}

export default App;
