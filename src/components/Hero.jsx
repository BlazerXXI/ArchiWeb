import React, { useEffect, useState } from "react";

import bgSlide01 from "../img/pexels-expect-best-323780-res.jpg";

import bgSlide02 from "../img/pexels-expect-best-3237801.jpg";

import bgSlide03 from "../img/pexels-expect-best-323780-res.jpg";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Hero = () => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    if (slide < 0) {
      setSlide(slide + 1);
    } else if (slide > 3) {
      setSlide(slide - 1);
    }
  }, [slide]);

  const sliderImage = [bgSlide01, bgSlide02, bgSlide03];

  useEffect(() => {
    console.log(document.querySelector(".bgSlide").src);
    if (slide > 2) {
      console.log((document.querySelector(".bgSlide").src = sliderImage[1]));
    }
  });

  return (
    <section className="hero relative container m-auto">
      <div className="lg:w-[691px]   lg:h-[550px] sm:w-[450px]   sm:mt-[-150px]  lg:mt-[-275px]   sm:bg-gradient-to-t sm:from-[#F4F6F5E5] sm:to-[#FFFFFFE5] sm:absolute sm:top-1/2 top-0  left-0  ml-0 lg:ml-[-100px] lg:pl-[100px] py-4 pl-4 sm:py-[60px] lg:py-[138px] sm:pr-4  z-20">
        <h1 className="font-[900]  text-[51px] font-['Playfair_Display'] ">
          Best Solution For Your Home ({slide})
        </h1>
        <p className="font-[200]  text-[32px] pt-[10px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet
        </p>
      </div>
      <div>
        <img
          src={sliderImage[1]}
          alt="Best Solution For Your Home"
          width="1150px"
          id="heroBg"
          className="filter bgSlide w-full brightness-50 sm:brightness-100 "
        />
        <div className="absolute bottom-0 right-0  flex gap-4 py-2 px-2 sm:gap-[50px] sm:py-[16px] sm:px-[33px] bg-[#F4F6F5B2] ">
          <div onClick={() => setSlide(slide - 1)}>
            <ArrowBackIcon
              fontSize="large"
              className="cursor-pointer 
					  active:opacity-40 sm:hover:opacity-60"
            />
          </div>
          <div onClick={() => setSlide(slide + 1)}>
            <ArrowForwardIcon
              fontSize="large"
              className="cursor-pointer 
					  active:opacity-40 sm:hover:opacity-60"
            />{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
