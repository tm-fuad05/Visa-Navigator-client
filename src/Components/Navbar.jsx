import React, { useState, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { FaUserCircle } from "react-icons/fa";
// react icons

import { RiMenuLine } from "react-icons/ri";
import { RiMenuFoldLine } from "react-icons/ri";

const Navbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const { user, signOutUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          position: "center",
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

  return (
    <nav className="flex items-center justify-between  relative bg-white boxShadow rounded-full px-4 lg:px-8 py-2 lg:py-3">
      <a href="/" className="text-xl font-logo font-bold ml-2 lg:ml-0">
        <span className="text-blue-600 text-3xl">V</span>isorix
      </a>
      <ul className="items-center gap-[25px] text-[1rem] text-[#424242] lg:flex hidden">
        <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
          <NavLink to="/all-visas">All Visas</NavLink>
        </li>
        <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
          <NavLink to="/add-visa">Add Visa</NavLink>
        </li>
        <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
          <NavLink to="/my-added-visas">My Added Visas</NavLink>
        </li>
        <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
          <NavLink to="/my-visa-application">My Visa applications</NavLink>
        </li>
        <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
          <NavLink to="/about-us">About Us</NavLink>
        </li>
        <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
          <NavLink to="/contact-us">Contact</NavLink>
        </li>
      </ul>

      <div className="items-center gap-[10px] flex">
        <div>
          {user && user.photoURL ? (
            <figure className="w-9 h-9">
              <img
                className="rounded-full w-full h-full  object-cover"
                src={user.photoURL}
                alt=""
              />
            </figure>
          ) : (
            <FaUserCircle className="text-4xl" />
          )}
        </div>
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

        <button
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          className="lg:hidden"
        >
          {mobileSidebarOpen ? (
            <RiMenuFoldLine className="text-3xl text-[#424242] hover:opacity-50" />
          ) : (
            <RiMenuLine className="text-3xl text-[#424242] hover:opacity-50" />
          )}
        </button>
      </div>

      <aside
        className={` ${
          mobileSidebarOpen ? "z-20" : "hidden z-[-1]"
        } lg:hidden bg-white boxShadow p-4 text-center absolute top-[65px] right-0 w-full rounded-md transition-all duration-300`}
      >
        <ul className="items-center gap-[20px] text-[1rem] text-gray-600 flex flex-col">
          <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-poin ter capitalize">
            <NavLink to="/all-visas">All Visas</NavLink>
          </li>
          <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-poin ter capitalize">
            <NavLink to="/add-visa">Add Visa</NavLink>
          </li>
          <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">
            <NavLink to="/my-added-visas">My Added Visas</NavLink>
          </li>
          <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">
            <NavLink to="/my-visa-application">My Visa applications</NavLink>
          </li>
          <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">
            <NavLink to="/about-us">About Us</NavLink>
          </li>
          <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">
            <NavLink to="/contact-us">Contact</NavLink>
          </li>
        </ul>
      </aside>
    </nav>
  );
};

export default Navbar;
