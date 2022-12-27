import React from "react";

import aboutImage from "../img/about/about-min.jpg";

const About = () => {
  const AboutLink = "/";
  return (
    <section className="mb-[95px] sm:flex sm:flex-row flex-col-reverse container max-w-[1240px] m-auto px-2 text-center sm:text-left sm:gap-[85px] gap-10">
      <div className="flex-auto">
        <img className="w-full " src={aboutImage} alt="About" />
      </div>
      <div className="sm:w-[456px] flex flex-col sm:mt-0 mt-10 justify-center">
        <h2 className="font-['Playfair_Display'] text-5xl font-[900]">
          About Us
        </h2>
        <p className="my-7 font-['Playfair_Display'] text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor
        </p>
        <a
          className="font-['Inter'] font-[600] text-2xl hover:opacity-80 active:opacity-40"
          href={AboutLink}
        >
          Read more
        </a>
      </div>
    </section>
  );
};

export default About;
