import React, { useEffect, useState } from "react";
import { FaFlag } from "react-icons/fa";
import { RxBorderSolid } from "react-icons/rx";
import { Link } from "react-router-dom";

const LatestAddedVisas = () => {
  const [latestVisas, setLatestVisas] = useState([]);

  useEffect(() => {
    fetch(
      "https://assignment-10-server-five-rose.vercel.app/latest-added-visas"
    )
      .then((res) => res.json())
      .then((data) => setLatestVisas(data));
  }, []);

  return (
    <div className="my-32 w-11/12 mx-auto">
      <section className="flex flex-col justify-center items-center my-10 w-10/12 mx-auto ">
        <h2 className="text-2xl lg:text-4xl font-bold ">Latest Added Visas</h2>
        <RxBorderSolid className="text-5xl text-blue-600" />
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {latestVisas.map((visa, idx) => (
          <div
            key={idx}
            className="border border-gray-200  rounded-lg  transition-transform transform hover:scale-105 text-[#1f2937] flex flex-col gap-2 p-4"
          >
            <figure className=" h-64 lg:h-52">
              <img
                className="w-full h-full  object-cover rounded-lg "
                src={visa.image}
                alt="Country Image"
              />
            </figure>
            <h4 className="text-center text-lg  font-semibold text-[#1f2937] flex items-center gap-2">
              <FaFlag className="text-[#1f2937]" /> {visa.countryName}
            </h4>

            <div className=" pt-0 flex flex-col gap-2 text-sm lg:text-md">
              <hr className="opacity-40" />
              <p className="flex justify-between text-[#1f2937]">
                <sapn className="font-bold">Visa Type</sapn>{" "}
                <span className="text-gray-400 ">{visa.visaType}</span>
              </p>
              <p className="flex justify-between text-[#1f2937]">
                <sapn className="font-bold">Processing Time</sapn>{" "}
                <span className="text-gray-400">{visa.processingTime}</span>
              </p>
              <p className="flex justify-between text-[#1f2937]">
                <sapn className="font-bold">Validity</sapn>{" "}
                <span className="text-gray-400">{visa.validity}</span>
              </p>

              <Link
                to={`/visa/${visa._id}`}
                class="btn border-none py-2 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:scale-105 transform transition duration-200 mt-3"
              >
                See Details
              </Link>
            </div>
          </div>
        ))}
      </section>
      <div className="my-10 w-fit mx-auto border-2 border-blue-400 rounded-lg p-0.5 hover:scale-105">
        <Link
          to="/all-visas"
          className="btn btn-sm md:btn-md bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-500 hover:to-blue-500  text-white"
        >
          See All Visas
        </Link>
      </div>
    </div>
  );
};

export default LatestAddedVisas;
