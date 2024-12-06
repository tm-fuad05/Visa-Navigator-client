import React from "react";
import { useLoaderData } from "react-router-dom";

const VisaDetails = () => {
  const visa = useLoaderData();
  const {
    _id,
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
  return (
    <div>
      <div className="text-center h-80 flex pt-16 justify-center bg-indigo-200 mb-[500px]">
        <h1 class="text-4xl lg:text-5xl font-bold text-[#1f2937]  ">
          Visa Details
        </h1>
      </div>
    </div>
  );
};

export default VisaDetails;
