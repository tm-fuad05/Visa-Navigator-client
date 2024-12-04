import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          position: "middle",
          icon: "success",
          title: "Successfully logged out",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };

  const navMenu = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-visas">All Visas</NavLink>
      </li>
      <li>
        <NavLink to="/add-visa">Add Visa</NavLink>
      </li>
      <li>
        <NavLink to="/my-added-visas">Added Visas</NavLink>
      </li>
      <li>
        <NavLink to="/visa-application">Visa applications</NavLink>
      </li>
      <li>
        <NavLink to="/about-us">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/contact-us">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className=" border-b border-gray-200 ">
      <div className="navbar bg-base-100 lg:w-11/12 mx-auto ">
        <div className="navbar-start">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#1E88E5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-20 mt-3 w-52 p-2 shadow "
            >
              {navMenu}
            </ul>
          </div>
          <a href="/" className="text-xl font-logo font-bold ml-2 lg:ml-0">
            <span className="text-blue-600 text-3xl">V</span>isorix
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-1">{navMenu}</ul>
        </div>
        <div className="navbar-end space-x-3">
          {user?.email ? (
            <button
              onClick={handleSignOut}
              className="btn text-white bg-gradient-to-r from-red-500 to-orange-500 hover:from-orange-500 hover:to-red-500 hover:scale-105 duration-500 focus:outline-none"
            >
              Sign Out
            </button>
          ) : (
            <Link
              to="/auth/sign-in"
              className="btn text-white bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-500 hover:to-blue-500 hover:scale-105 duration-500 focus:outline-none"
            >
              Login
            </Link>
          )}
          {!user?.email && (
            <Link
              to="/auth/register"
              className="btn text-white bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 hover:scale-105 duration-500 focus:outline-none"
            >
              Sign Up
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
