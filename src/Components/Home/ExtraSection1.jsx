import React from "react";
import { RxBorderSolid } from "react-icons/rx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { PiBuildingOfficeFill } from "react-icons/pi";
import { IoNewspaperOutline } from "react-icons/io5";
import { GiCommercialAirplane } from "react-icons/gi";
import { GrUserManager } from "react-icons/gr";
const ExtraSection1 = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return (
    <div>
      <section className="flex flex-col lg:flex-row justify-center items-center my-10 w-10/12 mx-auto">
        <div className="flex-grow ">
          <p className="text-[8px]">HOW WE HELP CLIENTS</p>
          <h3 className="text-2xl lg:text-4xl font-bold">
            Level With Great Visa Serving Policies
          </h3>
          <RxBorderSolid className="text-5xl text-blue-600" />
        </div>
        <p className="text-xs font-light lg:w-3/4">
          We provide a skilled staff to help you get the most out of your
          immigration. Our qualified and dependable Immigration Consultants can
          assist you in obtaining a favorable result in your case.
        </p>
      </section>
      <section className="my-10 bg-gray-300 relative h-[400px] lg:h-72 mt-72 lg:mt-64 ">
        <div className=" w-10/12 mx-auto  grid grid-cols-2 lg:grid-cols-4 gap-10 absolute  left-1/2 transform -translate-x-1/2 lg:-translate-y-1/2 -translate-y-52">
          <div>
            <div className="flex flex-col gap-1 shadow-lg px-5 py-12 hover:scale-110 duration-500 hover:border-b-4 hover:border-blue-500 bg-white">
              <div className="w-fit mx-auto">
                <PiBuildingOfficeFill className="text-6xl text-indigo-500 hover:text-blue-500 duration-500 " />
              </div>
              <p className="text-[10px] text-gray-500 text-center">VISA TYPE</p>
              <h5 className="text-lg text-center font-semibold">
                Tourists Visa
              </h5>
              <p className="text-[12px] text-center">
                Easily apply for a tourist visa and start your journey to
                explore new places and create unforgettable memories!
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-1 shadow-lg px-5 py-12 hover:scale-110 duration-500 hover:border-b-4 hover:border-blue-500 bg-white">
              <div className="w-fit mx-auto">
                <IoNewspaperOutline className="text-6xl text-indigo-500 hover:text-blue-500 duration-500 " />
              </div>
              <p className="text-[10px] text-gray-500 text-center">VISA TYPE</p>
              <h5 className="text-lg text-center font-semibold">Study Visas</h5>
              <p className="text-[12px] text-center">
                Unlock your educational journey abroad with a study visa. Apply
                easily and take the next step towards a brighter future!
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-1 shadow-lg px-5 py-12 hover:scale-110 duration-500 hover:border-b-4 hover:border-blue-500 bg-white">
              <div className="w-fit mx-auto">
                <GiCommercialAirplane className="text-6xl text-indigo-500 hover:text-blue-500 duration-500 " />
              </div>
              <p className="text-[10px] text-gray-500 text-center">VISA TYPE</p>
              <h5 className="text-lg text-center font-semibold">
                Business Visa
              </h5>
              <p className="text-[12px] text-center">
                Expand your business opportunities globally with a business
                visa. Apply today and take your career to the next level!
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-1 shadow-lg px-5 py-12 hover:scale-110 duration-500 hover:border-b-4 hover:border-blue-500 bg-white">
              <div className="w-fit mx-auto">
                <GrUserManager className="text-6xl text-indigo-500 hover:text-blue-500 duration-500 " />
              </div>
              <p className="text-[10px] text-gray-500 text-center">VISA TYPE</p>
              <h5 className="text-lg text-center font-semibold">
                Working Visas
              </h5>
              <p className="text-[12px] text-center">
                Start your career abroad with a working visa. Apply now and open
                doors to exciting job opportunities worldwide!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExtraSection1;
