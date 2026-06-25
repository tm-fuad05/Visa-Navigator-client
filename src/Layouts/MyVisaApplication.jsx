import React from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import empty from "../assets/empty.json";
import VisaApplicationCard from "../Components/VisaApplicationCard";
import useMyAppliedVisa from "../hooks/useMyAppliedVisa";
import Loader from "../Components/shared/Loader";

const MyVisaApplication = () => {
  const { myAppliedVisas, loader, setSearch, setMyAppliedVisas } =
    useMyAppliedVisa();

  return (
    <div className="bg-white min-h-screen select-none pt-24 pb-20">
      {/* Header Hero Section */}
      <div className="text-center py-10 lg:py-14  border-b border-gray-50 mb-10">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-2"
        >
          <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-gray-900">
            My Applied Visas
          </h2>
          <p className="text-xs text-gray-400 font-bold  ">
            Track and monitor the operational lifecycle of your visa submittals
          </p>
        </motion.div>
      </div>

      {/* Premium Minimal Search Dynamic Filter Bar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="w-11/12 max-w-md mx-auto mb-16 relative flex items-center"
      >
        <FiSearch className="absolute left-4 text-gray-400 text-sm" />
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search country nodes..."
          className="w-full pl-11 pr-4 py-3 text-xs font-semibold bg-gray-50/50 border border-gray-100 rounded-2xl outline-none text-gray-800 focus:bg-white focus:border-primaryBlue focus:shadow-sm focus:shadow-blue-50/50 transition-all duration-300"
        />
      </motion.div>

      {/* Conditional Interface Engine */}
      {loader ? (
        <Loader />
      ) : (
        <div>
          {" "}
          {myAppliedVisas.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-10"
            >
              <figure className="w-64 max-w-full opacity-80">
                <Lottie animationData={empty} loop={true} />
              </figure>
              <h3 className="text-sm font-black   text-gray-400 mt-6 text-center">
                No Active Submissions Found
              </h3>
            </motion.div>
          ) : (
            /* Response Grid Base Shell */
            <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myAppliedVisas.map((appliedVisaCard) => (
                <VisaApplicationCard
                  key={appliedVisaCard._id}
                  appliedVisaCard={appliedVisaCard}
                  myAppliedVisas={myAppliedVisas}
                  setMyAppliedVisas={setMyAppliedVisas}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MyVisaApplication;
