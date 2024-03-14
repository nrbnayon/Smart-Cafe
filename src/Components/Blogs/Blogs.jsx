import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleToBookmarks, handleMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fakeData = async () => {
      const res = await fetch("fakedata.json");
      const data = await res.json();
      setBlogs(data);
    };
    fakeData();
  }, []);
  // console.log(blogs);
  return (
    <div className="md:w-2/3">
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleMarkAsRead={handleMarkAsRead}
          handleToBookmarks={handleToBookmarks}
        />
      ))}
    </div>
  );
};
Blogs.propTypes = {
  handleToBookmarks: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};
export default Blogs;
