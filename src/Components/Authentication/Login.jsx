import React, { useContext, useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import Lottie from "lottie-react";
import login from "../../assets/login.json";
import axios from "axios";

const Login = () => {
  const { signInUser, setUser, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    setError("");

    signInUser(email, password)
      .then((result) => {
        const user = { email: email };
        axios
          .post("http://localhost:4000/jwt", user)
          .then((data) => console.log(data));
        setUser(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        setError("Invalid email or password");
      });
  };

  const signInWithGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div className="bg-gradient-to-t from-gray-100 to-gray-100">
      <div className="w-10/12 mx-auto flex justify-center min-h-screen items-center gap-10 ">
        <div className="flex-grow">
          <form onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input rounded-none"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={show ? "text" : "password"}
                placeholder="password"
                name="password"
                className="input rounded-none"
                required
              />
              <div
                onClick={() => setShow(!show)}
                className="absolute right-3 bottom-4"
              >
                {show ? (
                  <FaRegEyeSlash className="text-gray-700"></FaRegEyeSlash>
                ) : (
                  <FaRegEye className="text-gray-700"></FaRegEye>
                )}
              </div>
            </div>
            <div className="mt-2">
              {error && <p className="text-red-600 text-sm">{error}</p>}
            </div>
            <div className="mt-2">
              <p className="text-sm hover:underline hover:cursor-pointer">
                Forgot password?
              </p>
            </div>
            <div className="form-control mt-6">
              <button className="btn text-white bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-500 hover:to-blue-500 hover:scale-105 duration-500 rounded-none">
                Sign In
              </button>
            </div>
          </form>
          <div className="form-control mt-3">
            <button
              onClick={signInWithGoogleLogin}
              className="btn bg-white border border-gray-300 hover:scale-105 duration-500 rounded-none"
            >
              <FcGoogle />
              Sign in with Google
            </button>
          </div>
          <div className="mt-3">
            <p className="text-center">
              New in this website?{" "}
              <Link
                to="/auth/register"
                className="text-indigo-500 hover:opacity-50"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
        <figure className="max-sm:hidden w-6/12 flex items-center">
          <Lottie className="w-full" animationData={login} />
        </figure>
      </div>
    </div>
  );
};

export default Login;
