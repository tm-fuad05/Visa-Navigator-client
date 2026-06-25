import React, { useState } from "react";
import { motion } from "framer-motion"; // framer-motion ইম্পোর্ট করা হয়েছে
import { FiMapPin, FiMail, FiPhone, FiSend, FiUser } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // আপনার সাবমিট হ্যান্ডলার লজিক এখানে যুক্ত করুন (যেমন: axios.post)
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="bg-white min-h-screen select-none pt-24 pb-20">
      {/* Header Hero Section */}
      <div className="text-center py-10 lg:py-14  border-b border-gray-50 mb-16">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-2"
        >
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
            Contact Us
          </h2>
          <p className="text-xs text-gray-400 font-bold  ">
            Get in touch with our team of global experts
          </p>
        </motion.div>
      </div>

      {/* Main Two-Column Layout Panel */}
      <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Interactive Form Terminal (7 Cols) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-7 bg-gray-50/50 border border-gray-100 rounded-3xl p-6 sm:p-10"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name Node */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-[11px] font-bold   text-gray-600 block"
              >
                Full Name
              </label>
              <div className="relative flex items-center">
                <FiUser className="absolute left-4 text-gray-600 text-sm pointer-events-none" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3.5 text-xs font-semibold bg-white border border-gray-100 rounded-xl outline-none text-gray-800 focus:border-primaryBlue shadow-sm shadow-gray-100/50 transition-all duration-300 placeholder:text-gray-300"
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* Email Address Node */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-[11px] font-bold   text-gray-600 block"
              >
                Email Address
              </label>
              <div className="relative flex items-center">
                <FiMail className="absolute left-4 text-gray-600 text-sm pointer-events-none" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3.5 text-xs font-semibold bg-white border border-gray-100 rounded-xl outline-none text-gray-800 focus:border-primaryBlue shadow-sm shadow-gray-100/50 transition-all duration-300 placeholder:text-gray-300"
                  placeholder="johndoe@example.com"
                />
              </div>
            </div>

            {/* Message Textarea Node */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-[11px] font-bold   text-gray-600 block"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3.5 text-xs font-semibold bg-white border border-gray-100 rounded-xl outline-none text-gray-800 focus:border-primaryBlue shadow-sm shadow-gray-100/50 transition-all duration-300 placeholder:text-gray-300 resize-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            {/* Submit Action Block */}
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold   text-white bg-gradient-to-r from-primaryBlue to-secondaryIndigo rounded-xl shadow-md shadow-primaryBlue/15 active:scale-[0.99] transition-all duration-300 cursor-pointer"
            >
              <FiSend className="text-sm" />
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Right Column: Info Terminal Info Grid (5 Cols) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-5 space-y-4"
        >
          {/* Address Node */}
          <div className="flex items-center p-5 bg-gray-50/40 border border-gray-100 rounded-2xl shadow-sm shadow-gray-50/50">
            <div className="p-3 bg-white border border-gray-100 text-primaryBlue rounded-xl shadow-sm">
              <FiMapPin className="text-base" />
            </div>
            <div className="ml-4 space-y-0.5">
              <h3 className="text-xs font-bold  tracking-wider text-gray-900">
                Address
              </h3>
              <p className="text-xs font-semibold text-gray-500">
                Washington 165, NY CA
              </p>
            </div>
          </div>

          {/* Email Node */}
          <div className="flex items-center p-5 bg-gray-50/40 border border-gray-100 rounded-2xl shadow-sm shadow-gray-50/50">
            <div className="p-3 bg-white border border-gray-100 text-secondaryIndigo rounded-xl shadow-sm">
              <FiMail className="text-base" />
            </div>
            <div className="ml-4 space-y-0.5">
              <h3 className="text-xs font-bold  tracking-wider text-gray-900">
                Email
              </h3>
              <p className="text-xs font-semibold text-gray-500 lowercase">
                visorixofficial@gmail.com
              </p>
            </div>
          </div>

          {/* Phone Node */}
          <div className="flex items-center p-5 bg-gray-50/40 border border-gray-100 rounded-2xl shadow-sm shadow-gray-50/50">
            <div className="p-3 bg-white border border-gray-100 text-blue-500 rounded-xl shadow-sm">
              <FiPhone className="text-base" />
            </div>
            <div className="ml-4 space-y-0.5">
              <h3 className="text-xs font-bold  tracking-wider text-gray-900">
                Phone
              </h3>
              <p className="text-xs font-semibold text-gray-500">{`+31 85 964 47 25`}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
