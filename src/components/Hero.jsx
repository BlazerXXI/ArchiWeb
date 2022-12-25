import React from "react";

import bgSlide01 from "../img/pexels-expect-best-323780-res.jpg";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Hero = () => {
  return (
    <section className="hero relative">
      <div className="lg:w-[691px]   lg:h-[550px] sm:w-[450px]   sm:mt-[-150px]  lg:mt-[-225px]   sm:bg-gradient-to-t sm:from-[#F4F6F5E5] sm:to-[#FFFFFFE5] sm:absolute relative w-full sm:top-1/2 top-0  left-0  ml-0 lg:ml-[-100px] lg:pl-[100px] py-4 pl-4 sm:py-[60px] lg:py-[138px] sm:pr-4  z-20">
        <h1 className="font-[900]  text-[51px] font-['Playfair_Display'] ">
          Best Solution For Your Home
        </h1>
        <p className="font-[200]  text-[32px] pt-[10px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet
        </p>
      </div>
      <div className="sm:relative sm:ml-[100px] ">
        <img
          src={bgSlide01}
          alt={bgSlide01}
          width="1150px"
          id="heroBg"
          className="sm:ml-[100px] filter brightness-50 sm:brightness-100 "
        />
        <div className="absolute bottom-0 flex gap-4 py-2 px-2 sm:gap-[50px] right-0 sm:mr-[-100px]  sm:py-[16px]  sm:px-[33px] bg-[#F4F6F5B2] ">
          <ArrowBackIcon
            fontSize="large"
            className="cursor-pointer active:opacity-40 sm:hover:opacity-60"
          />
          <ArrowForwardIcon
            fontSize="large"
            className="cursor-pointer active:opacity-40 sm:hover:opacity-60"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
