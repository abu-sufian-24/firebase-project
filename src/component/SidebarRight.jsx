import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import img1 from "../assets/images/swimming.png"
import img2 from "../assets/images/class.png"
import img3 from "../assets/images/playground.png"
import img4 from "../assets/images/bg.png"
import { useContext } from "react";
import { AuthContext } from "../context";

const SidebarRight = () => {
  const { google, github } = useContext(AuthContext)

  const handleGoogle = () => {
    google()
      .then((result) => {
        console.log(result);

      }).catch((error) => {
        console.log(error);

      })
  }
  const handleGithub = () => {
    github()
      .then((result) => {
        console.log(result);

      }).catch((error) => {
        console.log(error);

      })
  }
  return (
    <aside className="bg-gray-50 p-4 space-y-6">
      {/* Login Section */}
      <div>
        <h2 className="font-bold mb-4 text-2xl">Login With</h2>
        <button onClick={handleGoogle} className="w-full bg-blue-500 text-white py-2 mb-2 rounded">Login with Google</button>
        <button onClick={handleGithub} className="w-full bg-gray-700 text-white py-2 rounded">Login with GitHub</button>
      </div>

      {/* Social Links */}
      <div>
        <h2 className="font-bold mb-4 text-2xl">Find Us On</h2>
        <div className="flex  justify-items-center py-3 border  cursor-pointer  ">
          <FaFacebook className="ml-2 text-2xl mt-1" />
          <span className="ml-4  text-2xl">Facebook</span>
        </div>
        <div className="flex  justify-items-center py-3 border cursor-pointer  ">
          <AiFillTwitterCircle className="ml-2 text-2xl mt-1" />
          <span className="ml-4  text-2xl">Twitter</span>
        </div>
        <div className="flex  justify-items-center py-3 border cursor-pointer  ">
          <FaInstagramSquare className="ml-2 text-2xl mt-1" />
          <span className="ml-4  text-2xl">Twitter</span>
        </div>
      </div>

      {/* Q-Zone */}
      <div>
        <h2 className="font-bold mb-4 text-2xl">Q-Zone</h2>
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img3} alt="" />
        </div>
        <div>
          <img src={img4} alt="" />
        </div>
      </div>
    </aside>
  );
};

export default SidebarRight;
