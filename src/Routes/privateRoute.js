import { useContext } from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import AuthContext from "../Context/authContext";

const PrivateRoutes = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (isLoggedIn) {
    return <Outlet />;
  }
  return <Navigate to="/Login" />;
};
export default PrivateRoutes;
