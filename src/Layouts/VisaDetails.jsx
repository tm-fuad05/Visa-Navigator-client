import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import DatePicker from "react-datepicker";
import {
  FiClock,
  FiCalendar,
  FiDollarSign,
  FiLayers,
  FiAlertCircle,
  FiCheckCircle,
  FiGlobe,
} from "react-icons/fi";
import { MdDateRange } from "react-icons/md";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";

const VisaDetails = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email || "";
  const visa = useLoaderData();

  const {
    image,
    countryName,
    visaType,
    processingTime,
    requiredDocuments,
    description,
    ageRestriction,
    fee,
    validity,
    applicationMethod,
  } = visa;

  const [startDate, setStartDate] = useState(new Date());

  const handleApply = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;

    // বাগ ফিক্স: ডেসিমাল বা টেক্সট ফরম্যাটিং সেভ না করে সরাসরি ভ্যালু পাঠানো হলো
    const appliedVisaInfo = {
      email,
      firstName,
      lastName,
      date: form.date.value,
      fee,
      image,
      countryName,
      visaType,
      processingTime,
      requiredDocuments,
      description,
      ageRestriction,
      validity,
      applicationMethod,
    };

    axios
      .post(
        "https://assignment-10-server-five-rose.vercel.app/applied-visas",
        appliedVisaInfo,
      )
      .then((res) => {
        if (res.data.insertedId) {
          document.getElementById("apply_visa_modal").close();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Application Node Registered Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      })
      .catch((err) =>
        console.error("Error processing application payload:", err),
      );
  };

  return (
    <div className="bg-white min-h-screen select-none pb-24">
      {/* Dynamic Header Section */}
      <div className="text-center pt-32 pb-16 bg-gradient-to-b from-blue-50/50 to-white border-b border-gray-50">
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
          Visa Requirement Profile
        </h1>
        <p className="text-xs text-gray-400 font-bold te mt-2">
          Review system specs before committing submission data
        </p>
      </div>

      {/* Main Structural Grid Base */}
      <div className="w-11/12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 mt-12">
        {/* Left Column: Visual Identity Banner */}
        <div className="md:col-span-5 space-y-4">
          <figure className="h-64 md:h-80 w-full overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 shadow-sm">
            <img
              src={image}
              alt={`${countryName} Visa Thumbnail`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </figure>
          <div className="bg-gray-50/50 border border-gray-100 p-4 rounded-2xl">
            <h2 className="text-xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              <FiGlobe className="text-primaryBlue text-lg" /> {countryName}
            </h2>
            <span className="inline-block text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100/60  tracking-wider px-2.5 py-0.5 rounded-md mt-2">
              {visaType}
            </span>
          </div>
        </div>

        {/* Right Column: Information Specification Parameters */}
        <div className="md:col-span-7 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-gray-600 te  border-b border-gray-100 pb-2">
              Technical Specifications
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="flex justify-between items-center bg-gray-50/80 p-3 rounded-xl border border-gray-100/40">
                <span className="flex items-center gap-1.5 text-gray-600 font-medium">
                  <FiClock /> Processing
                </span>
                <span className="font-bold text-gray-700">
                  {processingTime} Days
                </span>
              </div>
              <div className="flex justify-between items-center bg-gray-50/80 p-3 rounded-xl border border-gray-100/40">
                <span className="flex items-center gap-1.5 text-gray-600 font-medium">
                  <FiAlertCircle /> Age Bar
                </span>
                <span className="font-bold text-gray-700">
                  {ageRestriction ? `${ageRestriction}+` : "None"}
                </span>
              </div>
              <div className="flex justify-between items-center bg-gray-50/80 p-3 rounded-xl border border-gray-100/40">
                <span className="flex items-center gap-1.5 text-gray-600 font-medium">
                  <FiCalendar /> Validity
                </span>
                <span className="font-bold text-gray-700 truncate max-w-[120px]">
                  {validity}
                </span>
              </div>
              <div className="flex justify-between items-center bg-gray-50/80 p-3 rounded-xl border border-gray-100/40">
                <span className="flex items-center gap-1.5 text-gray-600 font-medium">
                  <FiLayers /> Method
                </span>
                <span className="font-bold text-gray-700  tracking-wide">
                  {applicationMethod}
                </span>
              </div>
            </div>

            <div className="bg-gray-50/80 border border-gray-100/70 p-4 rounded-xl text-xs text-gray-600 leading-relaxed">
              <span className="text-[10px] font-bold text-gray-600 te  block mb-1.5">
                Description Node
              </span>
              {description}
            </div>

            {/* Required Documents Protocol */}
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-gray-600 te  block">
                Required Protocol Documents
              </span>
              <div className="flex flex-wrap gap-2">
                {requiredDocuments.map((doc, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1.5 text-[10px] font-bold text-gray-600 bg-white border border-gray-100 px-3 py-1.5 rounded-xl"
                  >
                    <FiCheckCircle className="text-primaryBlue text-xs" /> {doc}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Trigger Block */}
          <div className="pt-4 border-t border-gray-50">
            <button
              onClick={() =>
                document.getElementById("apply_visa_modal").showModal()
              }
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-xs font-bold te text-white bg-gradient-to-r from-primaryBlue to-secondaryIndigo rounded-xl shadow-md active:scale-[0.99] transition-all cursor-pointer"
            >
              Initialize Visa Application
            </button>
          </div>
        </div>
      </div>

      {/* DaisyUI Dialog Overlay Portal */}
      <dialog
        id="apply_visa_modal"
        className="modal backdrop-blur-sm transition-all duration-300"
      >
        <div className="modal-box bg-white max-w-xl border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-2xl relative scrollbar-none">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 tracking-tight">
              Application Manifest
            </h3>
            <p className="text-[10px] font-bold text-gray-600 tracking-wider  mt-0.5">
              Fill out your credential metrics
            </p>
          </div>

          <form onSubmit={handleApply} className="space-y-4">
            {/* Disabled Node: User Email */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold  tracking-wider text-gray-600">
                Authenticated Email
              </label>
              <input
                type="email"
                value={email}
                disabled
                className="w-full px-4 py-2.5 text-xs font-semibold bg-gray-50 border border-gray-100 rounded-xl text-gray-600 outline-none cursor-not-allowed"
              />
            </div>

            {/* Full Name Flex Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold  tracking-wider text-gray-600">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="John"
                  className="w-full px-4 py-2.5 text-xs font-semibold bg-white border border-gray-100 rounded-xl outline-none text-gray-800 focus:border-primaryBlue transition-all"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold  tracking-wider text-gray-600">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  className="w-full px-4 py-2.5 text-xs font-semibold bg-white border border-gray-100 rounded-xl outline-none text-gray-800 focus:border-primaryBlue transition-all"
                  required
                />
              </div>
            </div>

            {/* Date and Fee System Rows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1 relative">
                <label className="text-[10px] font-bold  tracking-wider text-gray-600 block">
                  Application Date
                </label>
                <div className="relative flex items-center">
                  <DatePicker
                    name="date"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="w-full pl-10 pr-4 py-2.5 text-xs font-semibold bg-white border border-gray-100 rounded-xl outline-none text-gray-800 focus:border-primaryBlue transition-all"
                    required
                  />
                  <MdDateRange className="absolute left-3.5 text-gray-600 text-sm pointer-events-none" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold  tracking-wider text-gray-600">
                  Required Fee ($)
                </label>
                <input
                  type="text"
                  value={`$${fee}`}
                  disabled
                  className="w-full px-4 py-2.5 text-xs font-bold bg-gray-50 border border-gray-100 rounded-xl text-gray-700 outline-none cursor-not-allowed"
                />
              </div>
            </div>

            {/* Commit Transaction Button */}
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center px-6 py-3 text-xs font-bold  te text-white bg-gradient-to-r from-primaryBlue to-secondaryIndigo rounded-xl shadow-md active:scale-[0.99] transition-all cursor-pointer mt-2"
            >
              Submit Application
            </button>
          </form>

          {/* Close Action Node Overlay */}
          <div className="modal-action absolute top-2 right-4">
            <form method="dialog">
              <button className="text-gray-600 hover:text-gray-600 font-bold text-xs  te p-2 transition-colors cursor-pointer">
                ✕
              </button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop bg-black/10">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default VisaDetails;
