import React from "react";
import { FiMapPin, FiClock, FiCalendar, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function VisaCard({ visaCard }) {
  return (
    <div className="group bg-white border border-gray-100/80 rounded-2xl p-4 flex flex-col gap-4 shadow-sm hover:shadow-xl hover:shadow-gray-100/40 transition-all duration-300 select-none">
      {/* Image Thumbnail Container with Zoom Zoom Effect */}
      <figure className="h-52 w-full overflow-hidden rounded-xl bg-gray-50 relative">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          src={visaCard.image}
          alt={`${visaCard.countryName} banner`}
          loading="lazy"
        />
        {/* Visa Type Badge Overlaid on Thumbnail */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md border border-gray-100/50 px-2.5 py-1 rounded-lg shadow-sm">
          <span className="text-[10px] font-bold  tracking-wider text-gray-800">
            {visaCard.visaType}
          </span>
        </div>
      </figure>

      {/* Country Header Identity */}
      <div className="flex items-center gap-2 px-1">
        <FiMapPin className="text-sm text-primaryBlue flex-shrink-0" />
        <h4 className="text-sm font-bold text-gray-800 tracking-tight truncate">
          {visaCard.countryName}
        </h4>
      </div>

      {/* Meta Specs Grid Block */}
      <div className="flex flex-col gap-2.5 px-1 flex-grow">
        {/* Specs Separator */}
        <div className="h-[1px] w-full bg-gray-50" />

        {/* Processing Time Data Node */}
        <div className="flex justify-between items-center text-xs">
          <div className="flex items-center gap-1.5 text-gray-400 font-medium">
            <FiClock className="text-xs" />
            <span>Processing</span>
          </div>
          <span className="font-bold text-gray-600 tracking-wide truncate max-w-[120px]">
            {visaCard.processingTime}
          </span>
        </div>

        {/* Validity Data Node */}
        <div className="flex justify-between items-center text-xs">
          <div className="flex items-center gap-1.5 text-gray-400 font-medium">
            <FiCalendar className="text-xs" />
            <span>Validity</span>
          </div>
          <span className="font-bold text-gray-600 tracking-wide truncate max-w-[120px]">
            {visaCard.validity}
          </span>
        </div>
      </div>

      {/* Action Router Terminal Node */}
      <div className="px-1 pt-1">
        <Link
          to={`/visa/${visaCard._id}`}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold   text-white bg-gradient-to-r from-primaryBlue to-secondaryIndigo rounded-xl shadow-md shadow-primaryBlue/10 hover:shadow-lg hover:shadow-primaryBlue/20 active:scale-[0.98] transition-all duration-300 cursor-pointer"
        >
          <span>See Details</span>
          <FiArrowRight className="text-sm group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
