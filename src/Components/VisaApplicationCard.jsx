import React from "react";
import axios from "axios";
import {
  FiXCircle,
  FiMapPin,
  FiClock,
  FiCalendar,
  FiDollarSign,
  FiLayers,
  FiUser,
  FiMail,
} from "react-icons/fi";
import Swal from "sweetalert2";

const VisaApplicationCard = ({
  appliedVisaCard,
  myAppliedVisas,
  setMyAppliedVisas,
}) => {
  const {
    _id,
    email,
    firstName,
    lastName,
    date,
    fee,
    image,
    countryName,
    visaType,
    processingTime,
    validity,
    applicationMethod,
  } = appliedVisaCard;

  const handleCancelVisa = (id) => {
    Swal.fire({
      title: "Cancel Application?",
      text: "This action will revoke the current application tracking node.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444", // Crimson Red
      cancelButtonColor: "#9ca3af", // Neutral Gray
      confirmButtonText: "Yes, cancel it!",
      background: "#ffffff",
      customClass: {
        popup: "rounded-2xl border border-gray-100 shadow-xl",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://assignment-10-server-five-rose.vercel.app/applied-visas/${id}`,
          )
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Canceled",
                text: "The submission node has been safely terminated.",
                icon: "success",
                timer: 1500,
                showConfirmButton: false,
              });
              const remaining = myAppliedVisas.filter(
                (data) => data._id !== id,
              );
              setMyAppliedVisas(remaining);
            }
          })
          .catch((err) =>
            console.error("Error canceling submission node:", err),
          );
      }
    });
  };

  return (
    <div className="group bg-white border border-gray-100 rounded-2xl p-4 flex flex-col gap-4 shadow-sm hover:shadow-xl hover:shadow-gray-100/40 transition-all duration-300 select-none">
      {/* Thumbnail Banner Section */}
      <figure className="h-52 w-full overflow-hidden rounded-xl bg-gray-50 relative">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          src={image}
          alt={`${countryName} application banner`}
          loading="lazy"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md border border-gray-100/50 px-2.5 py-1 rounded-lg shadow-sm">
          <span className="text-[9px] font-black  tracking-wider text-gray-800">
            {visaType}
          </span>
        </div>
      </figure>

      {/* Country Header Area */}
      <div className="flex justify-between items-start px-1">
        <div className="flex items-center gap-2">
          <FiMapPin className="text-sm text-primaryBlue flex-shrink-0" />
          <h4 className="text-sm font-black text-gray-800 tracking-tight truncate">
            {countryName}
          </h4>
        </div>
        <span className="text-[10px] font-black text-gray-400 tracking-wider bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-md">
          {date}
        </span>
      </div>

      {/* Core Meta Specifications Wrapper */}
      <div className="flex flex-col gap-4 flex-grow px-1">
        {/* Sub-Section 1: Visa Properties */}
        <div className="flex flex-col gap-2 text-xs">
          <div className="h-[1px] w-full bg-gray-50 mb-0.5" />

          <div className="flex justify-between items-center">
            <span className="flex items-center gap-1.5 text-gray-400 font-medium">
              <FiClock /> Processing
            </span>
            <span className="font-bold text-gray-600 truncate max-w-[130px]">
              {processingTime}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="flex items-center gap-1.5 text-gray-400 font-medium">
              <FiCalendar /> Validity
            </span>
            <span className="font-bold text-gray-600 truncate max-w-[130px]">
              {validity}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="flex items-center gap-1.5 text-gray-400 font-medium">
              <FiLayers /> Method
            </span>
            <span className="font-bold text-gray-600 truncate max-w-[130px]">
              {applicationMethod}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="flex items-center gap-1.5 text-gray-400 font-medium">
              <FiDollarSign /> Net Fee
            </span>
            <span className="font-black text-gray-800">${fee}</span>
          </div>
        </div>

        {/* Sub-Section 2: Applicant Credentials Profile Box */}
        <div className="bg-gray-50/50 border border-gray-100/60 rounded-xl p-3 space-y-2 text-[11px]">
          <div className="flex items-center gap-2 text-gray-600">
            <FiUser className="text-gray-400 flex-shrink-0" />
            <span className="font-bold truncate">
              {firstName} {lastName}
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <FiMail className="text-gray-400 flex-shrink-0" />
            <span className="font-medium truncate tracking-wide">{email}</span>
          </div>
        </div>
      </div>

      {/* Revocation Terminal Footer Block */}
      <div className="pt-1 px-1">
        <button
          onClick={() => handleCancelVisa(_id)}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-black   text-red-500 bg-red-50/50 hover:bg-red-500 hover:text-white border border-red-100/60 rounded-xl transition-all duration-300 cursor-pointer"
        >
          <FiXCircle className="text-sm" />
          Cancel Application
        </button>
      </div>
    </div>
  );
};

export default VisaApplicationCard;
