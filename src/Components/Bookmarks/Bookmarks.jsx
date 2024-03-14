import PropTypes from "prop-types";
import Bookmark from "./Bookmark";
const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3">
      <div className="bg-lime-600 p-4 mb-2 rounded-lg ">
        <h3 className="text-2xl font-bold">
          Total Reading Time: {readingTime} min
        </h3>
      </div>
      <div className=" bg-gray-300 py-6 mt-2 rounded-md">
        <h3 className="text-2xl text-center text-white">
          Bookmarks Blogs: {bookmarks.length}
        </h3>
        {bookmarks.map((bookmark, i) => (
          <Bookmark key={i} bookmark={bookmark} />
        ))}
      </div>
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};

export default Bookmarks;
