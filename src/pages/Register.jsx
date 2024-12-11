import { useContext } from "react";
import { AuthContext } from "../context";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router";




const Register = () => {

  const { creatUser } = useContext(AuthContext);
  const navigate = useNavigate()



  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    creatUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/")
        e.target.reset()


        // Update the user's profile with name and photo
        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            console.log("User profile updated");
          })
          .catch((error) => {
            console.log("Error updating profile:", error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Register your account</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-xl mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              name="name"
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          {/* Photo URL Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-xl mb-2" htmlFor="photo">
              Photo URL
            </label>
            <input
              name="photo"
              type="text"
              id="photo"
              placeholder="Enter photo URL"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-xl mb-2" htmlFor="email">
              Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-gray-700 text-xl mb-2" htmlFor="password">
              Password
            </label>
            <input
              name="password"
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          {/* Terms & Conditions Checkbox */}
          <div className="mb-6">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-gray-600"
              />
              <span className="ml-2 text-gray-700 text-xl">
                Accept <a href="#" className="text-gray-800 ">Term & Conditions</a>
              </span>
            </label>
          </div>
          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
