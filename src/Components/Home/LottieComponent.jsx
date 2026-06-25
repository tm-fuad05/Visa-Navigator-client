import React from "react";
import { motion } from "framer-motion"; // framer-motion ইম্পোর্ট করা হয়েছে
import Lottie from "lottie-react";
import travel from "../../assets/Animation - 1733440621062.json";
import { RxBorderSolid } from "react-icons/rx";

const LottieComponent = () => {
  return (
    // প্রজেক্টের লাইট মোড ও ক্লিন ব্যাকগ্রাউন্ডের সাথে সামঞ্জস্য রেখে bg-slate-50 করা হয়েছে
    <div className="bg-slate-50 py-16 overflow-hidden select-none">
      <div className="w-10/12 mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side Content - Framer Motion Transition */}
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
        >
          <div className="space-y-2 max-w-xl">
            <p className="text-[10px] font-bold  text-blue-600 ">
              WE WILL HELP YOU
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 leading-tight">
              Travel Your Favourite Country & Make Your Dream True
            </h2>
            <div className="flex justify-center md:justify-start">
              <RxBorderSolid className="text-4xl text-blue-500 -mt-2" />
            </div>
          </div>
        </motion.section>

        {/* Right Side Lottie Animation - Smooth Scale & Fade Entrance */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-2/3 md:w-5/12 flex justify-center"
        >
          <div className="w-full max-w-sm drop-shadow-sm">
            <Lottie animationData={travel} loop={true} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LottieComponent;
