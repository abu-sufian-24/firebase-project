import { Link } from "react-router";
import logo from "../assets/images/logo.png"
import { useContext } from "react";
import { AuthContext } from "../context";


const Header = () => {

  const { user, singOutUser } = useContext(AuthContext);

  const handleClick = () => {
    singOutUser()
      .then(() => {
        console.log("User logged out successfully");
      })
      .catch((error) => {
        console.error("Logout error:", error.message);
      });
  };

  return (
    <>
      <header className="bg-gray-100 text-center py-4">
        <div className=" flex justify-center">
          <img src={logo} alt="" />
        </div>

        <p className=" italic mt-2 text-xl">Journalism Without Fear or Favour</p>
        <p className="text-sm mt-2">{new Date().toLocaleDateString()}</p>
      </header>
      <header className="py-3 flex justify-between items-center px-8 bg-gray-100 sticky top-0">
        {/* Navigation links in the center */}
        <ul className="flex-1 flex justify-center space-x-6 text-lg">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
          <li><Link to="/career" className="hover:underline">Career</Link></li>
          {user && <li><Link to="/profile" className="hover:underline">Profile</Link></li>}
        </ul>

        {/* Icon and Button on the right */}
        <div className="flex items-center space-x-4 mr-10">
          {user ?
            <>
              {/* <IoIosContact className="text-4xl text-gray-800 cursor-pointer" > */}
              <img
                src={user.photoURL || "https://via.placeholder.com/40"}
                alt="User Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
              {/* </IoIosContact> */}
              <span>
                {user?.displayName}
              </span>


              <button onClick={handleClick} className="py-2 px-4  bg-gray-800 text-white rounded hover:bg-gray-700">LogOut</button>
            </>
            : <button className="py-2 px-4  bg-gray-800 text-white rounded hover:bg-gray-700">
              <Link to={"/login"}>
                Login
              </Link>
            </button>}

        </div>
      </header>
    </>

  );
};

export default Header;
