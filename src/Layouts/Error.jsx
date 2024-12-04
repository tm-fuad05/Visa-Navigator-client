import React from "react";
import errorImg from "../assets/error.jpg";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row min-h-screen items-center w-11/12 mx-auto mb-10 lg:mb-0">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold lg:text-5xl text-center lg:text-left">
          Page Not Found
        </h2>
        <p className="text-center lg:text-left">
          An error page notifies users of an issue, such as a broken link or
          server problem, and provides options to navigate back, retry, or seek
          help.
        </p>
        <div className="w-fit mx-auto lg:mx-0">
          <Link className="btn bg-blue-500 text-white" to="/">
            Back to Home
          </Link>
        </div>
      </div>
      <figure className="w-8/12">
        <img src={errorImg} alt="" />
      </figure>
    </div>
  );
};

export default Error;
