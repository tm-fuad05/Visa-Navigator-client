import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaFlag } from "react-icons/fa";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { FiEdit } from "react-icons/fi";
import UpdateVisaData from "./UpdateVisaData";
import { FiTrash } from "react-icons/fi";

import Lottie from "lottie-react";
import empty from "../assets/empty.json";
const MyAddedVisas = () => {
  const { user } = useContext(AuthContext);
  const { email } = user;

  const [myVisaData, setMyVisaData] = useState([]);

  useEffect(() => {
    fetch(
      `https://assignment-10-server-five-rose.vercel.app/my-added-visas?email=${email}`
    )
      .then((res) => res.json())
      .then((data) => setMyVisaData(data));
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-10-server-five-rose.vercel.app/visa/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const filterVisa = myVisaData.filter((data) => data._id !== id);
              setMyVisaData(filterVisa);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="text-center h-32 lg:h-44 flex items-center justify-center bg-blue-100 mb-20">
        <h1 class="text-3xl  w-ful lg:text-5xl font-bold   animate-bounce">
          {"<<< My Added Visas >>>"}
        </h1>
      </div>

      {myVisaData.length === 0 ? (
        <div>
          <figure className="w-5/12 mx-auto">
            <Lottie classID="w-full" animationData={empty} />
          </figure>
          <h3 className="text-xl lg:text-4xl font-bold mb-20 w-7/12 mx-auto text-gray-500 mt-5 text-center">
            You haven't added any visa yet
          </h3>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-11/12 mx-auto mb-20">
          {myVisaData.map((data, _id) => (
            <div
              key={_id}
              className="border border-gray-200  rounded-lg  transition-transform transform  text-black flex flex-col gap-2 p-4"
            >
              <figure className=" h-64 lg:h-44">
                <img
                  className="w-full h-full  object-cover rounded-lg "
                  src={data.image}
                  alt="Country Image"
                />
              </figure>
              <h4 className="text-center text-lg  font-semibold text-[#1f2937] flex items-center gap-2">
                <FaFlag className="text-[#1f2937]" /> {data.countryName}
              </h4>

              <div className=" pt-0 flex flex-col gap-2 text-sm lg:text-md">
                <hr className="opacity-40" />
                <p className="flex justify-between text-[#1f2937]">
                  <sapn className="font-bold">Visa Type</sapn>{" "}
                  <span className="text-gray-400 ">{data.visaType}</span>
                </p>
                <p className="flex justify-between text-[#1f2937]">
                  <sapn className="font-bold">Processing Time</sapn>{" "}
                  <span className="text-gray-400">{data.processingTime}</span>
                </p>
                <p className="flex justify-between text-[#1f2937]">
                  <sapn className="font-bold">Validity</sapn>{" "}
                  <span className="text-gray-400">{data.validity}</span>
                </p>
                <p className="flex justify-between text-[#1f2937]">
                  <sapn className="font-bold">Fee</sapn>{" "}
                  <span className="text-gray-400">{data.fee}</span>
                </p>
                <p className="flex justify-between text-[#1f2937]">
                  <sapn className="font-bold">Application Method</sapn>{" "}
                  <span className="text-gray-400">
                    {data.applicationMethod}
                  </span>
                </p>

                <div className="mt-2">
                  <button
                    onClick={() =>
                      document.getElementById(`${data._id}`).showModal()
                    }
                    className="btn w-1/2 bg-green-600 hover:bg-green-700  text-white "
                  >
                    <FiEdit className="" />
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(data._id)}
                    className="btn w-1/2 bg-red-600 hover:bg-red-700  text-white "
                  >
                    <FiTrash />
                    Delete
                  </button>
                  <dialog id={data._id} className="modal">
                    <div className="modal-box">
                      <UpdateVisaData data={data}></UpdateVisaData>
                      <div className="modal-action">
                        <form method="dialog">
                          <button className="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyAddedVisas;
