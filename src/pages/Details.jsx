
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { DataItem } from "../data/data";
import { Link, useParams } from "react-router";

function Details() {
  const { id } = useParams();
  const data = DataItem();
  const item = data.find((item) => item._id === id);

  if (!item) {
    return <p>Item not found</p>;
  }

  return (
    <div className="p-4 max-w-xl mx-auto bg-slate-50 shadow-md rounded-lg">
      <div className="bg-white shadow rounded-lg overflow-hidden">
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
        <p className="text-xl text-gray-600 mt-4 px-2">{item.details}</p>

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
        <div className="text-center pb-7">
          <Link to={-1} className="bg-slate-500 text-2xl text-yellow-50 py-3 px-6 mt-4 inline-block">
            Go Back
          </Link>
        </div>

      </div>


    </div>
  );
}

export default Details;
