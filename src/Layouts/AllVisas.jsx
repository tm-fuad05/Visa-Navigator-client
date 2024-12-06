import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaFlag } from "react-icons/fa";
const AllVisas = () => {
  const visaData = useLoaderData();
  console.log(visaData);

  return (
    <div>
      <div className="text-center h-32 lg:h-44 flex items-center justify-center bg-indigo-200 mb-20">
        <h1 class="text-4xl  w-ful lg:text-5xl font-bold text-[#1f2937]  animate-bounce">
          All Visas
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-11/12 mx-auto mb-20">
        {visaData.map((visaCard, _id) => (
          <div
            key={_id}
            className="border border-gray-200  rounded-lg  transition-transform transform hover:scale-105 text-black flex flex-col gap-2 p-4"
          >
            <figure className=" h-64 lg:h-44">
              <img
                className="w-full h-full  object-cover rounded-lg "
                src={visaCard.image}
                alt="Country Image"
              />
            </figure>
            <h4 className="text-center text-lg  font-semibold text-[#1f2937] flex items-center gap-2">
              <FaFlag className="text-[#1f2937]" /> {visaCard.countryName}
            </h4>

            <div className=" pt-0 flex flex-col gap-2 text-sm lg:text-md">
              <hr className="opacity-40" />
              <p className="flex justify-between text-[#1f2937]">
                <sapn className="font-bold">Visa Type</sapn>{" "}
                <span className="text-gray-400 ">{visaCard.visaType}</span>
              </p>
              <p className="flex justify-between text-[#1f2937]">
                <sapn className="font-bold">Processing Time</sapn>{" "}
                <span className="text-gray-400">{visaCard.processingTime}</span>
              </p>
              <p className="flex justify-between text-[#1f2937]">
                <sapn className="font-bold">Validity</sapn>{" "}
                <span className="text-gray-400">{visaCard.validity}</span>
              </p>

              <Link
                to={`/visa/${visaCard._id}`}
                class="btn border-none py-2 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:scale-105 transform transition duration-200 mt-3"
              >
                See Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllVisas;
