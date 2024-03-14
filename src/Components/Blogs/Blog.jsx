import PropTypes from "prop-types";
import { BsFillBookmarkHeartFill } from "react-icons/bs";

const Blog = ({ blog, handleToBookmarks, handleMarkAsRead }) => {
  const {
    coverImg,
    author,
    author_img,
    title,
    posted_date,
    reading_time,
    hashtags,
    id,
  } = blog;
  return (
    <div className="mb-8">
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img src={coverImg} />
        </figure>
        <div className="p-4 space-y-4">
          <div className="flex items-center space-x-4">
            <div className="h-14 w-14">
              <img src={author_img} className="h-full w-full rounded-full" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-lg md:text-2xl font-semibold text-gray-900 dark:text-white">
                {author}
              </p>
              <p className="inline-flex items-center text-base font-medium text-gray-900 dark:text-white">
                {posted_date}
              </p>
            </div>
            <div className="inline-flex gap-2 items-center text-base font-semibold text-gray-900 dark:text-white">
              {reading_time} min read{" "}
              <button onClick={() => handleToBookmarks(blog)}>
                <BsFillBookmarkHeartFill />
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-2xl md:text-5xl">{title}</h3>
          </div>
          <p className="truncate text-base text-gray-500 dark:text-gray-400">
            {hashtags.map((hash, i) => (
              <span key={i}>
                <a href="#">#{hash} </a>
              </span>
            ))}
          </p>
          <button
            onClick={() => handleMarkAsRead(reading_time, id)}
            className="btn btn-ghost underline"
          >
            Mark As Read
          </button>
        </div>
      </div>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleToBookmarks: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};
export default Blog;
