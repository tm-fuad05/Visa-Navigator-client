import React, { useState } from "react";

const AboutUs = () => {
  const [activeItem, setActiveItem] = useState(null);
  const toggleAccordion = (item) => {
    setActiveItem(activeItem === item ? null : item);
  };
  return (
    <div className="bg-gray-100 py-12 px-6 lg:px-32">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        About Us
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Welcome to <span className="text-blue-600 text-3xl">V</span>isorix
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            At Visorix, we are dedicated to simplifying your visa application
            process. Our mission is to provide clear, accurate, and efficient
            guidance tailored to your unique travel needs. With years of
            experience and a commitment to excellence, we strive to make your
            journey seamless and stress-free.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whether you are traveling for business, leisure, or education, our
            expert team is here to assist you every step of the way. Discover a
            hassle-free visa experience with Visorix.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center">
          <div className="text-center">
            <h4 className="text-lg lg:text-2xl font-semibold text-gray-800">
              Our Core Values
            </h4>
            <p className="text-gray-600 mt-2">
              Integrity, Transparency, and Excellence are at the heart of
              everything we do.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-12  lg:w-8/12 mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          FAQ
        </h2>
        <div className="space-y-4">
          {/* Accordion Item 1 */}
          <div className="border border-gray-300 rounded-md">
            <button
              className="w-full flex justify-between items-center p-4 bg-gray-200 text-gray-800 font-medium"
              onClick={() => toggleAccordion("item1")}
            >
              <span>What services does Visorix offer?</span>
              <svg
                className={`h-5 w-5 transform transition-transform ${
                  activeItem === "item1" ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {activeItem === "item1" && (
              <div className="p-4 bg-white text-gray-600">
                Visorix specializes in assisting with visa applications for
                various purposes such as travel, work, education, and more. Our
                team ensures a smooth and efficient process.
              </div>
            )}
          </div>

          {/* Accordion Item 2 */}
          <div className="border border-gray-300 rounded-md">
            <button
              className="w-full flex justify-between items-center p-4 bg-gray-200 text-gray-800 font-medium"
              onClick={() => toggleAccordion("item2")}
            >
              <span>How can I get started with Visorix?</span>
              <svg
                className={`h-5 w-5 transform transition-transform ${
                  activeItem === "item2" ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {activeItem === "item2" && (
              <div className="p-4 bg-white text-gray-600">
                Getting started is simple! Contact us through our website,
                provide the required details, and our team will guide you
                through the next steps.
              </div>
            )}
          </div>

          {/* Accordion Item 3 */}
          <div className="border border-gray-300 rounded-md">
            <button
              className="w-full flex justify-between items-center p-4 bg-gray-200 text-gray-800 font-medium"
              onClick={() => toggleAccordion("item3")}
            >
              <span>Why choose Visorix?</span>
              <svg
                className={`h-5 w-5 transform transition-transform ${
                  activeItem === "item3" ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {activeItem === "item3" && (
              <div className="p-4 bg-white text-gray-600">
                Visorix stands out for our expertise, personalized service, and
                dedication to making visa applications hassle-free for our
                clients.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
