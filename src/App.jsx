import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleToBookmarks = (blog) => {
    console.log("Bookmark added", blog);
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };
  return (
    <>
      <div className="container mx-auto">
        <Header />
        <div className="md:flex justify-between gap-4">
          <Blogs handleToBookmarks={handleToBookmarks} />
          <Bookmarks bookmarks={bookmarks} />
        </div>
      </div>
    </>
  );
}

export default App;
