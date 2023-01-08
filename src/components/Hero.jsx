import React, { useEffect, useState } from "react";

import bgSlide01 from "../img/pexels-expect-best-323780-res.jpg";

import bgSlide02 from "../img/projects/projectsSix.jpg";

import bgSlide03 from "../img/projects/projectsFive.jpg";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Hero = () => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    if (slide < 0) {
      setSlide(slide + 3);
    } else if (slide > 2) {
      setSlide(slide - 3);
    }
  }, [slide]);

  const sliderImage = [bgSlide01, bgSlide02, bgSlide03];
  const sliderTitle = [
    "Best Solution For Your Home",
    " For Your Home",
    "Best Solution",
  ];
  const sliderParam = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut ",
    "Lorem ipsum dolor sit amet",
  ];

  useEffect(() => {
    document.querySelector(".bgSlide").src = sliderImage[0];
    document.querySelector("#titleHero").innerHTML = sliderTitle[0];
    document.querySelector("#sliderParam").innerHTML = sliderParam[0];
    if (slide === 1) {
      document.querySelector(".bgSlide").src = sliderImage[1];
      document.querySelector("#titleHero").innerHTML = sliderTitle[1];
      document.querySelector("#sliderParam").innerHTML = sliderParam[1];
    } else if (slide === 2) {
      document.querySelector(".bgSlide").src = sliderImage[2];
      document.querySelector("#titleHero").innerHTML = sliderTitle[2];
      document.querySelector("#sliderParam").innerHTML = sliderParam[2];
    }
  });

  return (
    <section className="hero relative container m-auto min-h-[861.09px]">
      <div className="lg:w-[691px]   lg:h-[550px] sm:w-[450px]   sm:mt-[-150px]  lg:mt-[-275px]   sm:bg-gradient-to-t sm:from-[#F4F6F5E5] sm:to-[#FFFFFFE5] sm:absolute sm:top-1/2 top-0  left-0  ml-0 lg:ml-[-100px] lg:pl-[100px] py-4 pl-4 sm:py-[60px] lg:py-[138px] sm:pr-4  z-20">
        <h1
          id="titleHero"
          className="font-[900]  text-[51px] font-['Playfair_Display'] "
        >
          {" "}
        </h1>
        <p id="sliderParam" className="font-[200]  text-[32px] pt-[10px]">
          {" "}
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
