import React from "react";
import { motion } from "framer-motion"; // framer-motion ইম্পোর্ট করা হয়েছে
import { RxBorderSolid } from "react-icons/rx";
import { PiBuildingOfficeFill } from "react-icons/pi";
import { IoNewspaperOutline } from "react-icons/io5";
import { GiCommercialAirplane } from "react-icons/gi";
import { GrUserManager } from "react-icons/gr";

const ExtraSection1 = () => {
  // কার্ডগুলোর সিকোয়েন্সিয়াল অ্যানিমেশনের জন্য স্ট্যাগার ভ্যারিয়েন্ট
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // একটি কার্ড আসার কতক্ষণ পর আরেকটি আসবে
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const visaCards = [
    {
      id: 1,
      icon: (
        <PiBuildingOfficeFill className="text-5xl text-indigo-500 duration-300 group-hover:text-blue-500" />
      ),
      tag: "VISA TYPE",
      title: "Tourists Visa",
      desc: "Easily apply for a tourist visa and start your journey to explore new places and create unforgettable memories!",
    },
    {
      id: 2,
      icon: (
        <IoNewspaperOutline className="text-5xl text-indigo-500 duration-300 group-hover:text-blue-500" />
      ),
      tag: "VISA TYPE",
      title: "Study Visas",
      desc: "Unlock your educational journey abroad with a study visa. Apply easily and take the next step towards a brighter future!",
    },
    {
      id: 3,
      icon: (
        <GiCommercialAirplane className="text-5xl text-indigo-500 duration-300 group-hover:text-blue-500" />
      ),
      tag: "VISA TYPE",
      title: "Business Visa",
      desc: "Expand your business opportunities globally with a business visa. Apply today and take your career to the next level!",
    },
    {
      id: 4,
      icon: (
        <GrUserManager className="text-5xl text-indigo-500 duration-300 group-hover:text-blue-500" />
      ),
      tag: "VISA TYPE",
      title: "Working Visas",
      desc: "Start your career abroad with a working visa. Apply now and open doors to exciting job opportunities worldwide!",
    },
  ];

  return (
    <div className="overflow-hidden bg-white py-16">
      {/* Header Section with Scroll Animation */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-11/12 mx-auto gap-6 lg:gap-20 mb-16"
      >
        <div className="space-y-2 max-w-xl">
          <p className="text-[10px] font-bold  text-blue-600 ">
            HOW WE HELP CLIENTS
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 leading-tight">
            Level With Great Visa Serving Policies
          </h2>
          <RxBorderSolid className="text-4xl text-blue-500 -mt-2" />
        </div>
        <p className="text-sm text-gray-500 font-medium lg:w-1/2 leading-relaxed">
          We provide a skilled staff to help you get the most out of your
          immigration. Our qualified and dependable Immigration Consultants can
          assist you in obtaining a favorable result in your case.
        </p>
      </motion.section>

      {/* Cards Display Section with Grid Layout */}
      <section className="w-11/12 mx-auto mt-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {visaCards.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              className="h-full shadow-lg rounded-2xl"
            >
              <div className="group flex flex-col justify-between items-center text-center p-8 bg-white border border-gray-100 rounded-2xl shadow-gray-100/50 hover:border-b-4 hover:border-b-blue-500 transition-all duration-300 min-h-[320px]">
                <div className="space-y-4 flex flex-col items-center">
                  {/* Icon Container  */}
                  <div className="p-4 bg-gray-50 rounded-2xl group-hover:bg-blue-50 transition-colors duration-300">
                    {card.icon}
                  </div>

                  <div className="space-y-1">
                    <span className="text-[9px] font-bold  text-gray-400 ">
                      {card.tag}
                    </span>
                    <h5 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {card.title}
                    </h5>
                  </div>

                  <p className="text-xs text-gray-500 font-medium leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default ExtraSection1;
