import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import {
  FiGlobe,
  FiClock,
  FiDollarSign,
  FiCalendar,
  FiCheckSquare,
  FiRefreshCw,
} from "react-icons/fi";

const UpdateVisaData = ({ data, onClose }) => {
  const [error, setError] = useState(null);

  // বাগ ফিক্স: প্রপস থেকে আসা এক্সিস্টিং ডাটা দিয়ে স্টেট ইনিশিয়ালাইজ করা হলো
  const [formData, setFormData] = useState({
    countryImage: data?.image || "",
    countryName: data?.countryName || "",
    visaType: data?.visaType || "",
    processingTime: data?.processingTime || "",
    requiredDocuments: data?.requiredDocuments || [],
    description: data?.description || "",
    ageRestriction: data?.ageRestriction || "",
    fee: data?.fee || "",
    validity: data?.validity || "",
    applicationMethod: data?.applicationMethod || "",
  });

  // যদি কোনো কারণে প্যারেন্ট কম্পোনেন্টের ডাটা চেঞ্জ হয়, স্টেট সিঙ্ক হবে
  useEffect(() => {
    if (data) {
      setFormData({
        countryImage: data.image || "",
        countryName: data.countryName || "",
        visaType: data.visaType || "",
        processingTime: data.processingTime || "",
        requiredDocuments: data.requiredDocuments || [],
        description: data.description || "",
        ageRestriction: data.ageRestriction || "",
        fee: data.fee || "",
        validity: data.validity || "",
        applicationMethod: data.applicationMethod || "",
      });
    }
  }, [data]);

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

  const handleUpdateVisa = (e) => {
    e.preventDefault();
    setError("");

    if (formData.requiredDocuments.length === 0) {
      setError("Please select at least one required document.");
      return;
    }

    // বাগ ফিক্স: ডম ট্রাভার্সাল বাদ দিয়ে সরাসরি পিওর স্টেট ম্যানেজমেন্ট থেকে অবজেক্ট তৈরি
    const updatedVisaData = {
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
    };

    axios
      .put(
        `https://assignment-10-server-five-rose.vercel.app/visa/${data._id}`,
        updatedVisaData,
      )
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          onClose();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully Updated Configuration",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          // কোনো ডাটা চেঞ্জ না করে সেভ দিলে মডাল ক্লোজ করে দেবে
          onClose();
        }
      })
      .catch((err) => console.error("Error updating visa node:", err));
  };

  return (
    <div className="w-full text-left select-none">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 tracking-tight">
          Update Visa Node
        </h3>
        <p className="text-[10px] font-bold text-gray-400 tracking-wider mt-0.5">
          Modify database registration metrics
        </p>
      </div>

      <form onSubmit={handleUpdateVisa} className="space-y-5">
        {/* Input Grid System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Country Name */}
          <div className="space-y-1">
            <label className="text-[10px] font-bold  tracking-wider text-gray-600">
              Country Name
            </label>
            <div className="relative flex items-center">
              <FiGlobe className="absolute left-3.5 text-gray-600 text-xs" />
              <input
                type="text"
                name="countryName"
                value={formData.countryName}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2.5 text-xs font-semibold bg-white border border-gray-100 rounded-xl outline-none text-gray-800 focus:border-primaryBlue transition-all"
                required
              />
            </div>
          </div>

          {/* Country Image URL */}
          <div className="space-y-1">
            <label className="text-[10px] font-bold  tracking-wider text-gray-600">
              Country Image URL
            </label>
            <input
              type="url"
              name="countryImage"
              value={formData.countryImage}
              onChange={handleChange}
              className="w-full px-4 py-2.5 text-xs font-semibold bg-white border border-gray-100 rounded-xl outline-none text-gray-800 focus:border-primaryBlue transition-all"
              required
            />
          </div>

          {/* Visa Type Select Dynamic Dropdown */}
          <div className="space-y-1">
            <label className="text-[10px] font-bold  tracking-wider text-gray-600">
              Visa Type
            </label>
            <div className="relative flex items-center">
              <select
                name="visaType"
                value={formData.visaType}
                onChange={handleChange}
                className="w-full px-4 py-2.5 text-xs font-bold tracking-wide  bg-white border border-gray-100 rounded-xl outline-none text-gray-700 focus:border-primaryBlue transition-all cursor-pointer appearance-none"
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
          <div className="space-y-1">
            <label className="text-[10px] font-bold  tracking-wider text-gray-600">
              Processing Time
            </label>
            <div className="relative flex items-center">
              <FiClock className="absolute left-3.5 text-gray-600 text-xs" />
              <input
                type="text"
                name="processingTime"
                value={formData.processingTime}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2.5 text-xs font-semibold bg-white border border-gray-100 rounded-xl outline-none text-gray-800 focus:border-primaryBlue transition-all"
                required
              />
            </div>
          </div>

          {/* Visa Fee */}
          <div className="space-y-1">
            <label className="text-[10px] font-bold  tracking-wider text-gray-600">
              Visa Fee ($)
            </label>
            <div className="relative flex items-center">
              <FiDollarSign className="absolute left-3.5 text-gray-600 text-xs" />
              <input
                type="number"
                name="fee"
                value={formData.fee}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2.5 text-xs font-semibold bg-white border border-gray-100 rounded-xl outline-none text-gray-800 focus:border-primaryBlue transition-all"
                required
              />
            </div>
          </div>

          {/* Validity */}
          <div className="space-y-1">
            <label className="text-[10px] font-bold  tracking-wider text-gray-600">
              Validity
            </label>
            <div className="relative flex items-center">
              <FiCalendar className="absolute left-3.5 text-gray-600 text-xs" />
              <input
                type="text"
                name="validity"
                value={formData.validity}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2.5 text-xs font-semibold bg-white border border-gray-100 rounded-xl outline-none text-gray-800 focus:border-primaryBlue transition-all"
                required
              />
            </div>
          </div>

          {/* Age Restriction */}
          <div className="space-y-1">
            <label className="text-[10px] font-bold  tracking-wider text-gray-600">
              Age Restriction
            </label>
            <input
              type="number"
              name="ageRestriction"
              value={formData.ageRestriction}
              onChange={handleChange}
              className="w-full px-4 py-2.5 text-xs font-semibold bg-white border border-gray-100 rounded-xl outline-none text-gray-800 focus:border-primaryBlue transition-all"
            />
          </div>

          {/* Application Method */}
          <div className="space-y-1">
            <label className="text-[10px] font-bold  tracking-wider text-gray-600">
              Application Method
            </label>
            <input
              type="text"
              name="applicationMethod"
              value={formData.applicationMethod}
              onChange={handleChange}
              className="w-full px-4 py-2.5 text-xs font-semibold bg-white border border-gray-100 rounded-xl outline-none text-gray-800 focus:border-primaryBlue transition-all"
              required
            />
          </div>
        </div>

        {/* Required Documents Interactive Group */}
        <div className="space-y-1.5 border-t border-b border-gray-100 py-3">
          <label className="text-[10px] font-bold  tracking-wider text-gray-600 block">
            Required Documents
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {documentOptions.map((doc, index) => {
              const isChecked = formData.requiredDocuments.includes(doc);
              return (
                <label
                  key={index}
                  className={`flex items-center gap-2 p-2.5 rounded-xl border select-none cursor-pointer transition-all ${
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
                    className="hidden"
                  />
                  <FiCheckSquare
                    className={`text-sm transition-colors ${isChecked ? "text-primaryBlue" : "text-gray-300"}`}
                  />
                  <span className="text-[10px] leading-tight tracking-wide">
                    {doc}
                  </span>
                </label>
              );
            })}
          </div>
          {error && (
            <p className="text-[10px] font-bold text-red-500 tracking-wide pt-1">
              {error}
            </p>
          )}
        </div>

        {/* Description Field */}
        <div className="space-y-1">
          <label className="text-[10px] font-bold  tracking-wider text-gray-600">
            Visa Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            className="w-full px-4 py-2.5 text-xs font-semibold bg-white border border-gray-100 rounded-xl outline-none text-gray-800 focus:border-primaryBlue transition-all resize-none"
            required
          ></textarea>
        </div>

        {/* Update Terminal Submit Grid */}
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold   text-white bg-gradient-to-r from-primaryBlue to-secondaryIndigo rounded-xl shadow-md active:scale-[0.99] transition-all cursor-pointer"
        >
          <FiRefreshCw className="text-xs animate-pulse" />
          Commit System Update
        </button>
      </form>
    </div>
  );
};

export default UpdateVisaData;
