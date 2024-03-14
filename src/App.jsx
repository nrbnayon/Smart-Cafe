import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const [readingTime, setReadingTime] = useState(0);
  const handleToBookmarks = (blog) => {
    // console.log("Bookmark added", blog);
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handleMarkAsRead = (time) => {
    // console.log("readed", time);
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
  };
  return (
    <>
      <div className="container mx-auto">
        <Header />
        <div className="md:flex justify-between gap-4">
          <Blogs
            handleMarkAsRead={handleMarkAsRead}
            handleToBookmarks={handleToBookmarks}
          />
          <Bookmarks bookmarks={bookmarks} readingTime={readingTime} />
        </div>
      </div>
    </>
  );
}

export default App;
