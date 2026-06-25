import React, { useContext } from "react";
import { HiOutlinePhone } from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

// Swiper CSS Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// Slide Assets
import slide1 from "../../assets/slide1.png";
import slide2 from "../../assets/slide2.png";
import slide3 from "../../assets/slide3.png";

const Banner = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="w-full relative overflow-hidden bg-neutral-950">
      <Swiper
        navigation={true}
        effect={"fade"}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay, EffectFade]}
        className="mySwiper min-h-screen"
      >
        {/* Slide 01: Welcome Gateway */}
        <SwiperSlide>
          <div
            className="bg-cover bg-center min-h-screen relative flex flex-col justify-center items-start px-6 sm:px-12 md:px-20 lg:px-28"
            style={{ backgroundImage: `url(${slide1})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/50 to-transparent" />

            <div className="relative z-10 max-w-4xl space-y-6 text-left">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold  tracking- text-white leading-none">
                Welcome to{" "}
                <span className="bg-gradient-to-r from-primaryBlue to-secondaryIndigo bg-clip-text text-transparent">
                  Visorix
                </span>
                !
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-gray-300 font-medium max-w-2xl leading-relaxed">
                Navigating the visa process can be complex—trust us to simplify
                it for you. With personalized solutions, we ensure a smooth and
                stress-free application journey.
              </p>

              <div className="pt-2">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-3 px-6 py-3.5 bg-primaryBlue hover:bg-primaryBlue/90 active:scale-[0.98] rounded-xl text-white font-bold text-xs   shadow-xl shadow-primaryBlue/20 transition-all duration-300"
                >
                  <HiOutlinePhone className="text-base animate-pulse" />
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 02: Immigration Protocol Terminal */}
        <SwiperSlide>
          <div
            className="bg-cover bg-center min-h-screen relative flex flex-col justify-center items-start px-6 sm:px-12 md:px-20 lg:px-28"
            style={{ backgroundImage: `url(${slide2})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/50 to-transparent" />

            <div className="relative z-10 max-w-4xl space-y-6 text-left">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold  tracking-normal text-white leading-none">
                Achieve Your <br />
                <span className="bg-gradient-to-r from-primaryBlue to-secondaryIndigo bg-clip-text text-transparent">
                  Immigration
                </span>{" "}
                Goals
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-gray-300 font-medium max-w-2xl leading-relaxed">
                Whether you're starting a new life abroad or planning a
                temporary visit, we provide expert guidance to help you achieve
                your immigration goals effortlessly.
              </p>

              <div className="pt-2">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-3 px-6 py-3.5 bg-primaryBlue hover:bg-primaryBlue/90 active:scale-[0.98] rounded-xl text-white font-bold text-xs   shadow-xl shadow-primaryBlue/20 transition-all duration-300"
                >
                  <HiOutlinePhone className="text-base" />
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 03: Global Exploration Nexus */}
        <SwiperSlide>
          <div
            className="bg-cover bg-center min-h-screen relative flex flex-col justify-center items-start px-6 sm:px-12 md:px-20 lg:px-28"
            style={{ backgroundImage: `url(${slide3})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/50 to-transparent" />

            <div className="relative z-10 max-w-4xl space-y-6 text-left">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold  tracking-normal text-white leading-none">
                Explore Global <br />
                <span className="bg-gradient-to-r from-secondaryOrange to-primaryRed bg-clip-text text-transparent">
                  Opportunities
                </span>
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-gray-300 font-medium max-w-2xl leading-relaxed">
                Discover the easiest and most reliable pathways to secure your
                visa for work, study, or travel. Let us guide you toward
                fulfilling your international dreams with confidence.
              </p>

              <div className="pt-2">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-3 px-6 py-3.5 bg-primaryBlue hover:bg-primaryBlue/90 active:scale-[0.98] rounded-xl text-white font-bold text-xs   shadow-xl shadow-primaryBlue/20 transition-all duration-300"
                >
                  <HiOutlinePhone className="text-base" />
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Embedded Swiper Navigation Pure Arrow Style */}
      <style>{`
        .swiper-button-next, .swiper-button-prev {
          color: rgba(255, 255, 255, 0.6) !important;
          background: transparent !important;
          border: none !important;
          width: 40px !important;
          height: 40px !important;
          transition: color 0.3s ease, transform 0.2s ease;
        }
        .swiper-button-next:after, .swiper-button-prev:after {
          font-size: 28px !important;
          font-weight: 900;
        }
        .swiper-button-next:hover, .swiper-button-prev:hover {
          color: #3B82F6 !important; /* primaryBlue */
        }
        .swiper-button-next:active, .swiper-button-prev:active {
          transform: scale(0.9);
        }
        @media (max-width: 640px) {
          .swiper-button-next, .swiper-button-prev {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;
