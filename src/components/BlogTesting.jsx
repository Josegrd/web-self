import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import BlogDetail from "./BlogDetail";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/blog")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="flex flex-wrap pt-24">
      {blogs.map((blog) => (
        <BlogDetail
          key={blog.id}
          title={blog.title}
          author={blog.author}
          headingImageUrl={blog.headingImageUrl}
          contents={blog.contents}
        />
      ))}
    </div>
  );
};

export default BlogList;
