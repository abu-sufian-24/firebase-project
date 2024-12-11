import { FaCalendarAlt } from "react-icons/fa"
import img1 from "../assets/images/demo-card-thumbnail.png"


function LeftSide() {
  return (
    <div className=" bg-white shadow-md rounded-lg overflow-hidden m-5">
      {/* Image */}
      <img
        className="w-full h-40 object-cover"
        src={img1}
        alt="News Thumbnail"
      />

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h1 className="text-lg font-semibold text-gray-800">
          Bayern Slams Authorities Over Flight Delay to Club World Cup
        </h1>
        {/* Category and Date */}
        <div className="flex items-center mt-2 text-gray-600 text-sm">
          <span className="font-medium">Sports</span>
          <span className="mx-2">|</span>
          <div className="flex items-center">
            <FaCalendarAlt className="w-4 h-4 mr-1" />
            <span>Jan 4, 2022</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSide