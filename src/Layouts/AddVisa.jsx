import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import { motion } from "framer-motion";
import {
  FiGlobe,
  FiClock,
  FiDollarSign,
  FiCalendar,
  FiCheckSquare,
  FiPlusCircle,
} from "react-icons/fi";

const AddVisa = () => {
  const [error, setError] = useState("");
  const { user } = useContext(AuthContext);
  const email = user?.email || "";

  const initialFormState = {
    countryImage: "",
    countryName: "",
    visaType: "",
    processingTime: "",
    requiredDocuments: [],
    description: "",
    ageRestriction: "",
    fee: "",
    validity: "",
    applicationMethod: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  const visaTypes = ["Tourist Visa", "Student Visa", "Official Visa"];
  const documentOptions = [
    "Valid passport",
    "Visa application form",
    "Recent passport-sized photograph",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        requiredDocuments: checked
          ? [...prev.requiredDocuments, value]
          : prev.requiredDocuments.filter((doc) => doc !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleAddVisa = (e) => {
    e.preventDefault();

    setError("");
    if (formData.requiredDocuments.length === 0) {
      setError("Please select at least one required document.");
      return;
    }

    const visaData = {
      image: formData.countryImage,
      countryName: formData.countryName,
      visaType: formData.visaType,
      processingTime: formData.processingTime,
      requiredDocuments: formData.requiredDocuments,
      description: formData.description,
      ageRestriction: formData.ageRestriction,
      fee: formData.fee,
      validity: formData.validity,
      applicationMethod: formData.applicationMethod,
      email,
    };

    axios
      .post("https://assignment-10-server-five-rose.vercel.app/visa", visaData)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully Added Visa",
            showConfirmButton: false,
            timer: 1500,
          });
          // ফর্মের ডোমেন এবং রিঅ্যাক্ট স্টেট উভয়ই ক্লিন করা হলো
          setFormData(initialFormState);
          e.target.reset();
        }
      })
      .catch((err) => console.error("Error adding visa:", err));
  };

  return (
    <div className="bg-white min-h-screen select-none pt-24 pb-20">
      {/* Header Hero Section */}
      <div className="text-center py-10 lg:py-14  border-b border-gray-50 mb-12">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-2"
        >
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
            Add Visa Entry
          </h2>
          <p className="text-xs text-gray-400 font-bold  ">
            Create a new visa tier in the application ecosystem
          </p>
        </motion.div>
      </div>

      {/* Main Form Dashboard Shell */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-11/12 max-w-4xl mx-auto bg-gray-50/40 border border-gray-100 rounded-3xl p-6 sm:p-10 shadow-sm shadow-gray-50"
      >
        <form onSubmit={handleAddVisa} className="space-y-6">
          {/* Form Input Fields Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Country Name */}
            <div className="space-y-2">
              <label className="text-[11px] font-bold   text-gray-600 block">
                Country Name
              </label>
              <div className="relative flex items-center">
                <FiGlobe className="absolute left-4 text-gray-600 text-sm" />
                <input
                  type="text"
                  name="countryName"
                  value={formData.countryName}
                  onChange={handleChange}
                  placeholder="e.g., France"
                  className="w-full pl-11 pr-4 py-3 text-xs font-semibold bg-white border border-gray-100 rounded-xl outline-none text-gray-800 focus:border-primaryBlue shadow-sm transition-all duration-300"
                  required
                />
              </div>
            </div>

            {/* Country Image URL */}
            <div className="space-y-2">
              <label className="text-[11px] font-bold   text-gray-600 block">
                Country Image URL
              </label>
              <input
                type="url"
                name="countryImage"
                value={formData.countryImage}
                onChange={handleChange}
                placeholder="https://example.com/image.png"
                className="w-full px-4 py-3 text-xs font-semibold bg-white border border-gray-100 rounded-xl outline-none text-gray-800 focus:border-primaryBlue shadow-sm transition-all duration-300"
                required
              />
            </div>

            {/* Visa Type Select Option */}
            <div className="space-y-2">
              <label className="text-[11px] font-bold   text-gray-600 block">
                Visa Type
              </label>
              <div className="relative flex items-center">
                <select
                  name="visaType"
                  value={formData.visaType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-xs font-bold tracking-wider  bg-white border border-gray-100 rounded-xl outline-none text-gray-700 focus:border-primaryBlue shadow-sm transition-all duration-300 cursor-pointer appearance-none"
                  required
                >
                  <option value="" disabled>
                    Select Visa Type
                  </option>
                  {visaTypes.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[5px] border-t-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Processing Time */}
            <div className="space-y-2">
              <label className="text-[11px] font-bold   text-gray-600 block">
                Processing Time
              </label>
              <div className="relative flex items-center">
                <FiClock className="absolute left-4 text-gray-600 text-sm" />
                <input
                  type="text"
                  name="processingTime"
                  value={formData.processingTime}
                  onChange={handleChange}
                  placeholder="e.g., 7-10 working days"
                  className="w-full pl-11 pr-4 py-3 text-xs font-semibold bg-white border border-gray-100 rounded-xl outline-none text-gray-800 focus:border-primaryBlue shadow-sm transition-all duration-300"
                  required
                />
              </div>
            </div>

            {/* Fee */}
            <div className="space-y-2">
              <label className="text-[11px] font-bold   text-gray-600 block">
                Visa Fee
              </label>
              <div className="relative flex items-center">
                <FiDollarSign className="absolute left-4 text-gray-600 text-sm" />
                <input
                  type="number"
                  name="fee"
                  value={formData.fee}
                  onChange={handleChange}
                  placeholder="e.g., 150"
                  className="w-full pl-11 pr-4 py-3 text-xs font-semibold bg-white border border-gray-100 rounded-xl outline-none text-gray-800 focus:border-primaryBlue shadow-sm transition-all duration-300"
                  required
                />
              </div>
            </div>

            {/* Validity */}
            <div className="space-y-2">
              <label className="text-[11px] font-bold   text-gray-600 block">
                Validity
              </label>
              <div className="relative flex items-center">
                <FiCalendar className="absolute left-4 text-gray-600 text-sm" />
                <input
                  type="text"
                  name="validity"
                  value={formData.validity}
                  onChange={handleChange}
                  placeholder="e.g., 6 Months"
                  className="w-full pl-11 pr-4 py-3 text-xs font-semibold bg-white border border-gray-100 rounded-xl outline-none text-gray-800 focus:border-primaryBlue shadow-sm transition-all duration-300"
                  required
                />
              </div>
            </div>

            {/* Age Restriction */}
            <div className="space-y-2">
              <label className="text-[11px] font-bold   text-gray-600 block">
                Age Restriction (Optional)
              </label>
              <input
                type="number"
                name="ageRestriction"
                value={formData.ageRestriction}
                onChange={handleChange}
                placeholder="e.g., 18 (Leave blank if none)"
                className="w-full px-4 py-3 text-xs font-semibold bg-white border border-gray-100 rounded-xl outline-none text-gray-800 focus:border-primaryBlue shadow-sm transition-all duration-300"
              />
            </div>

            {/* Application Method */}
            <div className="space-y-2">
              <label className="text-[11px] font-bold   text-gray-600 block">
                Application Method
              </label>
              <input
                type="text"
                name="applicationMethod"
                value={formData.applicationMethod}
                onChange={handleChange}
                placeholder="e.g., Online / Embassy"
                className="w-full px-4 py-3 text-xs font-semibold bg-white border border-gray-100 rounded-xl outline-none text-gray-800 focus:border-primaryBlue shadow-sm transition-all duration-300"
                required
              />
            </div>
          </div>

          {/* Full Width Components: Checklist Framework */}
          <div className="space-y-2 border-t border-b border-gray-100/70 py-4">
            <label className="text-[11px] font-bold   text-gray-600 block">
              Required Documents
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {documentOptions.map((doc, index) => {
                const isChecked = formData.requiredDocuments.includes(doc);
                return (
                  <label
                    key={index}
                    className={`flex items-center gap-3 p-3 rounded-xl border select-none cursor-pointer transition-all duration-300 ${
                      isChecked
                        ? "bg-primaryBlue/5 border-primaryBlue/20 text-gray-800 font-bold"
                        : "bg-white border-gray-100 text-gray-500 font-medium"
                    }`}
                  >
                    <input
                      type="checkbox"
                      name="requiredDocuments"
                      value={doc}
                      checked={isChecked}
                      onChange={handleChange}
                      className="hidden" // ডিফল্ট ক্লাঙ্কি বক্স হাইড করা হয়েছে
                    />
                    <FiCheckSquare
                      className={`text-base transition-colors ${isChecked ? "text-primaryBlue" : "text-gray-300"}`}
                    />
                    <span className="text-[11px] leading-tight tracking-wide">
                      {doc}
                    </span>
                  </label>
                );
              })}
            </div>
            {error && (
              <p className="text-[11px] font-bold text-primaryRed tracking-wide pt-1">
                {error}
              </p>
            )}
          </div>

          {/* Description Node */}
          <div className="space-y-2">
            <label className="text-[11px] font-bold   text-gray-600 block">
              Visa Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Provide an overview of the visa requirements, terms, and guidelines..."
              rows="4"
              className="w-full px-4 py-3.5 text-xs font-semibold bg-white border border-gray-100 rounded-xl outline-none text-gray-800 focus:border-primaryBlue shadow-sm transition-all duration-300 resize-none"
              required
            ></textarea>
          </div>

          {/* Submit Action Terminal Block */}
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold   text-white bg-gradient-to-r from-primaryBlue to-secondaryIndigo rounded-xl shadow-md shadow-primaryBlue/15 active:scale-[0.99] transition-all duration-300 cursor-pointer"
          >
            <FiPlusCircle className="text-sm" />
            Add Visa Node
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default AddVisa;
