import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const ProtectedRoutes = ({ children }) => {
  const { user, isAuthChecked } = useSelector((state) => state.auth);

  if (!isAuthChecked) {
    return <h1>Loading...</h1>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoutes;
