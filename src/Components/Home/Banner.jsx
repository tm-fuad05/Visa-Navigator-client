import React, { useContext } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import slide1 from "../../assets/slide1.png";
import slide2 from "../../assets/slide2.png";
import slide3 from "../../assets/slide3.png";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { AuthContext } from "../../Provider/AuthProvider";

const Banner = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className=" border">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper min-h-screen"
      >
        <SwiperSlide>
          <figure
            className="bg-cover bg-center min-h-screen flex flex-col justify-center items-start px-16 text-white gap-5"
            style={{ backgroundImage: `url(${slide1})` }}
          >
            {/* Text Content */}
            <div className="lg:w-3/4 md:w-3/4 text-4xl lg:text-6xl font-bold text-center md:text-left lg:text-left">
              <Typewriter
                words={[
                  `${
                    user
                      ? `Hello, ${
                          user && user.displayName
                        }. Welcome to Visorix !`
                      : "Welcome to Visorix !"
                  }`,

                  "Get Your Visa Approved Fast!",
                  "Trusted Visa Solutions for All Your Travel Needs!",
                ]}
                loop={0}
                cursor
                typeSpeed={60}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </div>
            <p className="lg:w-3/4 md:w-3/4 text-md text-center md:text-left lg:text-left font-light">
              Navigating the visa process can be complex—trust us to simplify it
              for you. With personalized solutions, we ensure a smooth and
              stress-free application journey.
            </p>
            <Link
              to="/contact-us"
              className="btn border-none bg-blue-600 hover:bg-blue-700  hover:scale-105 duration-500 rounded-md  text-white font-semibold w-fit mx-auto md:mx-0 lg:mx-0"
            >
              <FaPhoneAlt />
              Contact Us
            </Link>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure
            className="bg-cover bg-center min-h-screen flex flex-col justify-center items-start px-16 text-white gap-5"
            style={{ backgroundImage: `url(${slide2})` }}
          >
            {/* Text Content */}
            <h2 className="lg:w-3/4 md:w-3/4 text-4xl lg:text-6xl font-bold text-center md:text-left lg:text-left">
              Achieve Your Immigration Goals
            </h2>
            <p className="lg:w-3/4 md:w-3/4 text-md text-center md:text-left lg:text-left font-light">
              Whether you're starting a new life abroad or planning a temporary
              visit, we provide expert guidance to help you achieve your
              immigration goals effortlessly.
            </p>
            <Link
              to="/contact-us"
              className="btn border-none bg-blue-600 hover:bg-blue-700  hover:scale-105 duration-500 rounded-md text-white font-semibold w-fit mx-auto md:mx-0 lg:mx-0"
            >
              <FaPhoneAlt />
              Contact Us
            </Link>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure
            className="bg-cover bg-center min-h-screen flex flex-col justify-center items-start px-16 text-white gap-5"
            style={{ backgroundImage: `url(${slide3})` }}
          >
            {/* Text Content */}
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
              className="btn border-none bg-blue-600 hover:bg-blue-700  hover:scale-105 duration-500 rounded-md text-white font-semibold w-fit mx-auto md:mx-0 lg:mx-0"
            >
              <FaPhoneAlt />
              Contact Us
            </Link>
          </figure>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
