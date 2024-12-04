import React, { useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import slide1 from "../../assets/slide1.avif";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Banner = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className=" border">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
        <SwiperSlide>
          <figure className="relative w-full h-[550px]">
            {/* Background Image */}
            <img
              src={slide1}
              alt="Hero Background"
              className="w-full h-full object-cover"
            />

            {/* Blackish Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-65"></div>

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-start px-16 text-white gap-5">
              <h2
                data-aos="fade-right"
                data-aos-easing="ease-in-sine"
                className="lg:w-3/4 md:w-3/4 text-4xl lg:text-6xl font-bold text-center md:text-left lg:text-left"
              >
                Your Trusted Visa Partner
              </h2>
              <p
                data-aos="fade-right"
                data-aos-easing="ease-in-sine"
                className="lg:w-3/4 md:w-3/4 text-md text-center md:text-left lg:text-left font-light"
              >
                Navigating the visa process can be complex—trust us to simplify
                it for you. With personalized solutions, we ensure a smooth and
                stress-free application journey.
              </p>
              <Link
                to="/contact-us"
                data-aos="zoom-in"
                className="btn border-none bg-blue-600 hover:bg-blue-700  hover:scale-110 duration-500 rounded-md  text-white font-semibold w-fit mx-auto md:mx-0 lg:mx-0"
              >
                <FaPhoneAlt />
                Contact Us
              </Link>
            </div>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <figure className="relative w-full h-[550px]">
            {/* Background Image */}
            <img
              src={slide2}
              alt="Hero Background"
              className="w-full h-full object-cover"
            />

            {/* Blackish Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-start px-16 text-white gap-5">
              <h2 className="lg:w-3/4 md:w-3/4 text-4xl lg:text-6xl font-bold text-center md:text-left lg:text-left">
                Achieve Your Immigration Goals
              </h2>
              <p className="lg:w-3/4 md:w-3/4 text-md text-center md:text-left lg:text-left font-light">
                Whether you're starting a new life abroad or planning a
                temporary visit, we provide expert guidance to help you achieve
                your immigration goals effortlessly.
              </p>
              <Link
                to="/contact-us"
                data-aos="zoom-in"
                className="btn border-none bg-red-600 hover:bg-red-700 rounded-md text-white font-semibold w-fit mx-auto md:mx-0 lg:mx-0"
              >
                <FaPhoneAlt />
                Contact Us
              </Link>
            </div>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <figure className="relative w-full h-[550px]">
            {/* Background Image */}
            <img
              src={slide3}
              alt="Hero Background"
              className="w-full h-full object-cover"
            />

            {/* Blackish Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-start px-16 text-white gap-5">
              <h2 className="lg:w-3/4 md:w-3/4 text-4xl lg:text-6xl font-bold text-center md:text-left lg:text-left">
                Explore Global Opportunities
              </h2>
              <p className="lg:w-3/4 md:w-3/4 text-md text-center md:text-left lg:text-left font-light">
                Discover the easiest and most reliable pathways to secure your
                visa for work, study, or travel. Let us guide you toward
                fulfilling your international dreams with confidence.
              </p>
              <Link
                to="/contact-us"
                data-aos="zoom-in"
                className="btn border-none bg-red-600 hover:bg-red-700 rounded-md text-white font-semibold w-fit mx-auto md:mx-0 lg:mx-0"
              >
                <FaPhoneAlt />
                Contact Us
              </Link>
            </div>
          </figure>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
