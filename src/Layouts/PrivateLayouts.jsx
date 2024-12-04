import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateLayouts = ({ children }) => {
  const { user, loader } = useContext(AuthContext);

  const location = useLocation();

  if (loader) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (user) return children;

  return <Navigate state={location.pathname} to="/auth/sign-in"></Navigate>;
};

export default PrivateLayouts;
