import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-gray-200 text-base-content p-10 md:p-12 lg:p-16">
        <nav className="text-black">
          <div className="flex justify-between items-center gap-2 mb-5">
            <div>
              <a href="/" className="text-xl font-logo font-bold ml-2 lg:ml-0">
                <span className="text-blue-600 text-3xl">V</span>isorix
              </a>
            </div>
          </div>
          <a className="link link-hover">Location: av. Washington 165,NY CA</a>
          <a className="link link-hover">54003</a>
          <a className="link link-hover">Phone: +31 85 964 47 25</a>
          <a className="link link-hover">Email: visorixofficial@gmail.com</a>
          <a className="link link-hover">Opening hours: 9.00 AM - 5.00 PM</a>
          <nav className="text-black">
            <div className="grid grid-flow-col gap-4">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </nav>
        </nav>
        <nav id="nav" className="text-black">
          <h6 className="text-black text-lg font-bold mb-3">Useful links</h6>
          <NavLink className={"hover:text-blue-600"} to="/">
            Home
          </NavLink>

          <NavLink className={"hover:text-blue-600"} to="/about-us">
            About Us
          </NavLink>
          <NavLink className={"hover:text-blue-600"} to="/contact-us">
            Contact
          </NavLink>
        </nav>
        <nav>
          <h4 className="text-black text-xl font-bold mb-3">Drop a Message</h4>
          <input
            type="text"
            className="p-4  rounded-lg bg-[#FFFFFF] text-black font-semibold"
            placeholder="Email"
          />

          <button className="btn border-none bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-500 hover:to-blue-500 hover:scale-105 text-white  w-full">
            Subscribe
          </button>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
