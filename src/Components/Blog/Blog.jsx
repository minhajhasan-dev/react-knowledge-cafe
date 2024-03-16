import PropTypes from "prop-types";
import { BsFillBookmarksFill } from "react-icons/bs";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    title,
    cover,
    author,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="mb-20 space-y-4">
      <img
        className="w-full mb-8"
        src={cover}
        alt={`Cover picture of ${title}`}
      />
      <div className="flex justify-between mb-4">
        <div className="flex gap-6">
          <img className="w-14" src={author_img} alt="" />
          <div>
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="btn shadow-lg p-2 rounded-xl text-2xl bg-slate-100"
          >
            <BsFillBookmarksFill />
          </button>
        </div>
      </div>
      <h2 className="text-4xl mb-4">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}> # {hash}</span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(reading_time)}
        className="text-purple-600 font-bold underline"
      >
        Mark As Read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};

export default Blog;
