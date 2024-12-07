import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="bg-gray-100 py-12 px-6 lg:px-32">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <form className="space-y-6">
              <div>
                <label
                  for="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  for="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="yourname@example.com"
                />
              </div>

              <div>
                <label
                  for="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
            <div className="flex items-center">
              <div className="p-3 bg-indigo-100 rounded-full">
                <svg
                  className="h-6 w-6 text-indigo-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 10l9-7 9 7-9 7-9-7z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 21V11.39l-6 4.5V21h6z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 21h6v-5.11l-6-4.5V21z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Address</h3>
                <p className="text-gray-600">Washington 165,NY CA</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="p-3 bg-indigo-100 rounded-full">
                <svg
                  className="h-6 w-6 text-indigo-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.003 10.25C3.99 5.25 8.184 2 12 2s8.01 3.25 9.997 8.25a3.248 3.248 0 01-.27 3.196c-1.517 1.94-4.997 5.054-9.727 8.524-4.73-3.47-8.21-6.583-9.727-8.524A3.248 3.248 0 012.003 10.25z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 10h.01"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-gray-600">visorixofficial@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="p-3 bg-indigo-100 rounded-full">
                <svg
                  className="h-6 w-6 text-indigo-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7-5m0 0l7 5m-7-5v12m5-6h5m-5 6h5"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-gray-600">+31 85 964 47 25</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
