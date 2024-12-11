import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";
import { DataItem } from "../data/data";
import { Link } from "react-router";



const MainContent = () => {
  const data = DataItem();

  const maxLength = 200;

  return (
    <main className="p-4 space-y-6 bg-slate-50 shadow-md rounded-lg overflow-hidden">
      <h2 className="font-bold mb-4 text-2xl">Dragon News Home</h2>

      {data.map((item) => (
        <div key={item._id} className="bg-white shadow rounded-lg overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-200 rounded">
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full"
                src={item.author.img}
                alt="Author Avatar"
              />
              <div className="ml-3">
                <h3 className="text-sm font-semibold text-gray-800">
                  {item.author.name}
                </h3>
                <p className="text-xs text-gray-500">{item.author.published_date}</p>
              </div>
            </div>
            <div className="flex space-x-2 text-gray-500">
              <FaRegBookmark className="w-5 h-5 cursor-pointer hover:text-gray-700" />
              <FaShareAlt className="w-5 h-5 cursor-pointer hover:text-gray-700" />
            </div>
          </div>

          {/* Content */}
          <div className="px-4 py-2 my-5">
            <h1 className="text-xl font-bold text-gray-800">{item.title}</h1>
          </div>

          {/* Image */}
          <img
            className="w-full object-cover"
            src={item.image_url}
            alt="News Thumbnail"
          />

          {/* Details */}
          <p className="text-sm text-gray-600 mt-2 px-2">
            {item.details.length > maxLength
              ? `${item.details.substring(0, maxLength)}...`
              : item.details}
            {item.details.length > maxLength && (
              <Link
                to={`/details/${item._id}`}
                className="text-blue-500 font-semibold cursor-pointer"
              >
                {" "}
                Read More
              </Link>
            )}
          </p>

          {/* Footer */}
          <div className="px-4 py-3 flex items-center justify-between">
            <div className="flex items-center text-yellow-500">
              <FaStar className="w-5 h-5" />
              <span className="ml-1 text-sm text-gray-800">{item.rating.number}</span>
            </div>
            <div className="flex items-center text-gray-500">
              <FaEye className="w-5 h-5" />
              <span className="ml-1 text-sm text-gray-800">{item.total_view}</span>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default MainContent;
