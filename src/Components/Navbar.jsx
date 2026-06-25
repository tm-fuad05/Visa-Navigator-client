import React, { useState, useContext, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { motion, AnimatePresence } from "framer-motion";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

// React Icons
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { TbLogout2 } from "react-icons/tb";
import { FiFolderPlus, FiBriefcase, FiChevronDown } from "react-icons/fi";
import Logo from "./shared/Logo";

const Navbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const sideNavRef = useRef(null);
  const dropdownRef = useRef(null);

  // বাইরে ক্লিক করলে মোবাইল সাইডবার এবং ইউজার ড্রপডাউন বন্ধ করার লজিক
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
        setMobileSidebarOpen(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setUserDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        setMobileSidebarOpen(false);
        setUserDropdownOpen(false);
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
        });
      });
  };

  const getNavLinkClass = ({ isActive }) => {
    const base =
      "relative font-semibold text-sm text-gray-800 hover:text-primaryBlue transition-colors duration-300 py-1 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:bg-primaryBlue before:transition-all before:duration-300";
    return isActive
      ? `${base} text-primaryBlue before:w-full`
      : `${base} before:w-0 hover:before:w-full`;
  };

  // মূল ও মোবাইল মেনুর জন্য পাবলিক লিঙ্কসমূহ
  const publicLinks = (
    <>
      <NavLink to="/" className={getNavLinkClass}>
        Home
      </NavLink>
      <NavLink to="/all-visas" className={getNavLinkClass}>
        All Visas
      </NavLink>
      {user?.email && (
        <NavLink to="/add-visa" className={getNavLinkClass}>
          Add Visa
        </NavLink>
      )}
      <NavLink to="/about-us" className={getNavLinkClass}>
        About Us
      </NavLink>
      <NavLink to="/contact-us" className={getNavLinkClass}>
        Contact
      </NavLink>
    </>
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-50 select-none">
      <nav className="w-11/12 mx-auto py-3.5">
        <div className="w-full bg-white border border-gray-100 rounded-2xl md:rounded-full px-5 py-3 flex items-center justify-between lg:px-10 backdrop-blur-md">
          {/* Brand Logo Identity */}
          <Logo />

          {/* Desktop Links Menu Terminal */}
          <div className="hidden lg:flex items-center gap-8">{publicLinks}</div>

          {/* Desktop Interface Controller Core */}
          <div className="flex items-center gap-2">
            {/* User Dropdown Structure */}
            {user?.email && (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-1.5 p-1 rounded-full hover:bg-gray-50 transition-colors cursor-pointer focus:outline-none"
                >
                  <figure className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-primaryBlue/20 shadow-inner">
                    <img
                      className="w-full h-full object-cover"
                      src={
                        user?.photoURL ||
                        "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                      }
                      alt="User Terminal Profile"
                    />
                  </figure>
                  <FiChevronDown
                    className={`text-gray-500 text-sm transition-transform duration-300 ${userDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Animated Dropdown Wrapper */}
                <AnimatePresence>
                  {userDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute right-0 mt-3 w-56 bg-white border border-gray-100 rounded-2xl shadow-xl p-2 z-50 flex flex-col gap-0.5"
                    >
                      <div className="px-4 py-2.5 border-b border-gray-50 mb-1">
                        <p className="text-xs font-bold text-gray-900 truncate">
                          {user?.displayName || "Active User"}
                        </p>
                        <p className="text-[10px] font-medium text-gray-400 truncate mt-0.5">
                          {user?.email}
                        </p>
                      </div>

                      <Link
                        to="/my-added-visas"
                        onClick={() => setUserDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2.5 text-xs font-bold text-gray-700 hover:text-primaryBlue hover:bg-primaryBlue/5 rounded-xl transition-colors"
                      >
                        <FiFolderPlus className="text-sm" />
                        My Added Visas
                      </Link>

                      <Link
                        to="/my-visa-application"
                        onClick={() => setUserDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2.5 text-xs font-bold text-gray-700 hover:text-primaryBlue hover:bg-primaryBlue/5 rounded-xl transition-colors"
                      >
                        <FiBriefcase className="text-sm" />
                        My Applications
                      </Link>

                      <button
                        onClick={handleSignOut}
                        className="flex items-center gap-2.5 w-full text-left px-3 py-2.5 text-xs font-bold text-primaryRed hover:bg-primaryRed/5 rounded-xl border-none cursor-pointer transition-colors mt-1 pt-2.5 border-t border-gray-50"
                      >
                        <TbLogout2 className="text-sm" />
                        Sign Out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* Guest Action: Only Sign In if user does not exist */}
            {!user?.email && (
              <div className="hidden md:flex items-center gap-2">
                <Link
                  to="/auth/sign-in"
                  className="px-5 py-2.5 text-xs font-bold   rounded-full text-primaryBlue bg-primaryBlue/5 hover:bg-primaryBlue/10 transition-all duration-300"
                >
                  Login
                </Link>
              </div>
            )}

            {/* Responsive Mobile Drawer Trigger Menu */}
            <button
              onClick={() => setMobileSidebarOpen(true)}
              className="lg:hidden p-2 text-gray-700 hover:text-primaryBlue transition-colors rounded-xl border border-transparent hover:border-gray-100 bg-transparent cursor-pointer"
            >
              <HiOutlineMenuAlt3 className="text-2xl" />
            </button>
          </div>
        </div>

        {/* ==================== MOBILE DRAWER INTERFACE ==================== */}
        <AnimatePresence>
          {mobileSidebarOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileSidebarOpen(false)}
                className="fixed inset-0 h-screen bg-black/20 backdrop-blur-sm z-50 lg:hidden"
              />

              <motion.aside
                ref={sideNavRef}
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 24, stiffness: 190 }}
                className="fixed top-0 right-0 h-screen w-[290px] sm:w-[330px] bg-white border-l border-gray-100 shadow-2xl p-6 flex flex-col justify-between z-50 lg:hidden"
              >
                <div className="space-y-8">
                  <div className="flex items-center justify-between border-b border-gray-50 pb-5">
                    <Link
                      to="/"
                      className="flex items-center gap-1"
                      onClick={() => setMobileSidebarOpen(false)}
                    >
                      <span className="text-2xl font-bold text-primaryBlue tracking-tighter">
                        V
                      </span>
                      <span className="text-lg font-bold tracking-tight text-gray-900 font-logo">
                        isorix
                      </span>
                    </Link>
                    <button
                      onClick={() => setMobileSidebarOpen(false)}
                      className="p-2 text-gray-400 hover:text-gray-900 transition-colors border-none bg-transparent cursor-pointer"
                    >
                      <IoMdClose className="text-xl" />
                    </button>
                  </div>

                  <nav
                    className="flex flex-col gap-5 text-left pl-2"
                    onClick={() => setMobileSidebarOpen(false)}
                  >
                    {publicLinks}
                  </nav>
                </div>

                {/* Mobile Side Drawer Login Redirect Indicator */}
                {!user?.email && (
                  <div className="border-t border-gray-50 pt-5">
                    <Link
                      to="/auth/sign-in"
                      onClick={() => setMobileSidebarOpen(false)}
                      className="w-full block text-center py-3 text-xs font-bold   rounded-xl text-primaryBlue bg-primaryBlue/5 hover:bg-primaryBlue/10 transition-colors"
                    >
                      Login
                    </Link>
                  </div>
                )}
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
