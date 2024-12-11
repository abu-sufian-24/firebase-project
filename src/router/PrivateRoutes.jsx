import { useContext } from "react";
import { AuthContext } from "../context";
import { Navigate } from "react-router";


const PrivateRoutes = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    // If no user is logged in, redirect to login
    return <Navigate to="/login" />;
  }

  // If the user is logged in, render the children components
  return children;
};

export default PrivateRoutes;
