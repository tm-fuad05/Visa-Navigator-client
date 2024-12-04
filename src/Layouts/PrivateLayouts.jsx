import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateLayouts = ({ children }) => {
  const { user, setLoader, loader } = useContext(AuthContext);
  if (loader) {
    <div>
      <span className="loading loading-spinner loading-lg"></span>
    </div>;
  }

  if (user) return children;

  return <Navigate to="/auth/sign-in"></Navigate>;
};

export default PrivateLayouts;
