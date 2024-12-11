import { useContext } from "react";
import { AuthContext } from "../context";

function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex flex-col items-center justify-center  bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full">
        <div className="flex flex-col items-center">
          <img
            src={user.photoURL || "https://via.placeholder.com/200"}
            alt="User Profile"
            className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-500 shadow-lg"
          />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {user.displayName || "User Name"}
          </h1>
          <p className="text-sm text-gray-500">{user.email || "Email not provided"}</p>
        </div>
        <div className="mt-6">
          <button className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition duration-300">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
