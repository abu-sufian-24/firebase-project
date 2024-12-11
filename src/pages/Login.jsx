import { useContext } from "react";
import { AuthContext } from "../context";
import { useNavigate } from "react-router";



const Login = () => {
  const { singin } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    singin(email, password)
      .then((result) => {
        console.log("User logged in successfully:", result.user);
        navigate('/')
        e.target.reset()
      })
      .catch((error) => {
        console.error("Login error:", error.message);
      });
  };


  return (
    <div className="flex  justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xl h-[500px] bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Login your account</h2>
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
              Email address
            </label>
            <input
              name="email"
              type="email"
              id="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="password">
              Password
            </label>
            <input
              name="password"
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900 transition"
          >
            Login
          </button>
        </form>
        {/* Register Link */}
        <p className="text-sm text-center mt-6">
          Don’t Have An Account?{' '}
          <a href="/register" className="text-red-600 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
