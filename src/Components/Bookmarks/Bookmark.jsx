import PropTypes from "prop-types";
const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="md:w-[90%] bg-slate-400 p-4 m-4 rounded-lg">
      <h3 className="text-1xl">{title}</h3>
    </div>
  );
};
Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
};

export default Bookmark;
