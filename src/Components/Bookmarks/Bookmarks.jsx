import PropTypes from "prop-types";
import Bookmark from "./Bookmark";
const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="md:w-1/3 bg-gray-300 rounded-md">
      <h3 className="text-2xl text-center text-white">
        Bookmarks Blogs: {bookmarks.length}
      </h3>
      {bookmarks.map((bookmark, i) => (
        <Bookmark key={i} bookmark={bookmark} />
      ))}
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
};

export default Bookmarks;
