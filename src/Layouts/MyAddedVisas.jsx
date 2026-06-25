import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import {
  FiEdit3,
  FiTrash2,
  FiMapPin,
  FiClock,
  FiCalendar,
  FiDollarSign,
  FiLayers,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import empty from "../assets/empty.json";
import axios from "axios";
import UpdateVisaData from "./UpdateVisaData";
import useMyAddedVisa from "../hooks/useMyAddedVisa";
import Loader from "../Components/shared/Loader";

const MyAddedVisas = () => {
  const { loader, myVisaData: initialData } = useMyAddedVisa();
  // কাস্টম হুক থেকে আসা ডেটাকে লোকাল স্টেটে সিঙ্ক করা হলো রিঅ্যাক্টিভ ডিলিট ফিল্টারিংয়ের জন্য
  const [visas, setVisas] = useState([]);

  useEffect(() => {
    if (initialData) {
      setVisas(initialData);
    }
  }, [initialData]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This visa node will be permanently removed from the cluster.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#10b981", // Success Green
      cancelButtonColor: "#ef4444", // Crimson Red
      confirmButtonText: "Yes, delete it!",
      background: "#ffffff",
      customClass: {
        popup: "rounded-2xl border border-gray-100 shadow-xl",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://assignment-10-server-five-rose.vercel.app/visa/${id}`,
          )
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "The records have been updated successfully.",
                icon: "success",
                timer: 1500,
                showConfirmButton: false,
              });
              // লোকাল স্টেট ফিল্টারিং অ্যাকশন
              setVisas((prevVisas) =>
                prevVisas.filter((data) => data._id !== id),
              );
            }
          })
          .catch((err) => console.error("Error deleting visa node:", err));
      }
    });
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
            My Added Visas
          </h2>
          <p className="text-xs text-gray-400 font-bold ">
            Manage and maintain your registered visa configurations
          </p>
        </motion.div>
      </div>

      {/* Empty State Layout Terminal */}
      {loader ? (
        <Loader />
      ) : (
        <div>
          {" "}
          {visas.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-10"
            >
              <figure className="w-64 max-w-full opacity-80">
                <Lottie animationData={empty} loop={true} />
              </figure>
              <h3 className="text-sm font-bold   text-gray-400 mt-6 text-center">
                No Records Associated With Your Node
              </h3>
            </motion.div>
          ) : (
            /* Response Grid Base Shell */
            <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <AnimatePresence>
                {visas.map((data) => (
                  <motion.div
                    layout
                    key={data._id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      transition: { duration: 0.2 },
                    }}
                    className="group bg-white border border-gray-100 rounded-2xl p-4 flex flex-col gap-4 shadow-sm hover:shadow-xl hover:shadow-gray-100/40 transition-all duration-300"
                  >
                    {/* Thumbnail Preview Panel */}
                    <figure className="h-52 w-full overflow-hidden rounded-xl bg-gray-50 relative">
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        src={data.image}
                        alt={`${data.countryName} thumbnail`}
                        loading="lazy"
                      />
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md border border-gray-100/50 px-2.5 py-1 rounded-lg shadow-sm">
                        <span className="text-[9px] font-bold  tracking-wider text-gray-800">
                          {data.visaType}
                        </span>
                      </div>
                    </figure>

                    {/* Country Identity Block */}
                    <div className="flex items-center gap-2 px-1">
                      <FiMapPin className="text-sm text-primaryBlue flex-shrink-0" />
                      <h4 className="text-sm font-bold text-gray-800 tracking-tight truncate">
                        {data.countryName}
                      </h4>
                    </div>

                    {/* Technical Meta Specs Info Panel */}
                    <div className="flex flex-col gap-2 px-1 text-xs flex-grow">
                      <div className="h-[1px] w-full bg-gray-50 mb-1" />

                      <div className="flex justify-between items-center">
                        <span className="flex items-center gap-1.5 text-gray-400 font-medium">
                          <FiClock /> Processing
                        </span>
                        <span className="font-bold text-gray-600 truncate max-w-[120px]">
                          {data.processingTime}
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="flex items-center gap-1.5 text-gray-400 font-medium">
                          <FiCalendar /> Validity
                        </span>
                        <span className="font-bold text-gray-600 truncate max-w-[120px]">
                          {data.validity}
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="flex items-center gap-1.5 text-gray-400 font-medium">
                          <FiDollarSign /> Fee Node
                        </span>
                        <span className="font-bold text-gray-600">
                          ${data.fee}
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="flex items-center gap-1.5 text-gray-400 font-medium">
                          <FiLayers /> Method
                        </span>
                        <span className="font-bold text-gray-500 bg-gray-50 border border-gray-100/70 px-2 py-0.5 rounded-md text-[10px] tracking-wide ">
                          {data.applicationMethod}
                        </span>
                      </div>
                    </div>

                    {/* Action Controls Panel Trigger Blocks */}
                    <div className="grid grid-cols-2 gap-3 pt-2 px-1 border-t border-gray-50">
                      <button
                        onClick={() =>
                          document
                            .getElementById(`modal_${data._id}`)
                            .showModal()
                        }
                        className="inline-flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold  tracking-wider text-emerald-600 bg-emerald-50/50 hover:bg-emerald-600 hover:text-white border border-emerald-100/60 rounded-xl transition-all duration-300 cursor-pointer"
                      >
                        <FiEdit3 className="text-xs" />
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(data._id)}
                        className="inline-flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold  tracking-wider text-red-500 bg-red-50/50 hover:bg-red-500 hover:text-white border border-red-100/60 rounded-xl transition-all duration-300 cursor-pointer"
                      >
                        <FiTrash2 className="text-xs" />
                        Delete
                      </button>
                    </div>

                    {/* DaisyUI Dialog Box Node Overlay */}
                    <dialog
                      id={`modal_${data._id}`}
                      className="modal backdrop-blur-sm transition-all duration-300"
                    >
                      <div className="modal-box bg-white max-w-2xl border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-2xl relative scrollbar-none">
                        <UpdateVisaData
                          data={data}
                          onClose={() =>
                            document.getElementById(`modal_${data._id}`).close()
                          }
                        />
                        <div className="modal-action absolute top-2 right-4">
                          <form method="dialog">
                            <button className="text-gray-400 hover:text-gray-600 font-bold text-xs   p-2 transition-colors cursor-pointer">
                              ✕
                            </button>
                          </form>
                        </div>
                      </div>
                      <form
                        method="dialog"
                        className="modal-backdrop bg-black/10"
                      >
                        <button>close</button>
                      </form>
                    </dialog>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MyAddedVisas;
