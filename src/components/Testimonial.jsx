import React from "react";
import TestimonialCard from "./TestimonialCard";

import imgTestimonialOne from "../img/Testimonial/testimonialOne.jpg";
import imgTestimonialTwo from "../img/Testimonial/testimonialTwo.jpg";
import circle from "../img/Testimonial/Testimonial-circle.jpg";
import circleActive from "../img/Testimonial/Testimonial-circle-active.jpg";

const Testimonial = () => {
  const testimonialArr = [
    {
      name: "James Passaquindici Arcand",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
    },
    {
      name: "Abram Schleifer",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
  ];

  return (
    <section className="testimonial container m-auto">
      <h2 className="mb-[70px] max-md:text-3xl font-['Playfair_Display'] max-md:mb-4 max-md:text-center text-5xl font-[900] text-center">
        Testimonial
      </h2>
      <ul className="flex [&>*]:flex-[0_1_50%] max-sm:flex-col max-sm:w-[50%] m-auto flex-col-2 max-sm:gap-14 sm:gap-32">
        <TestimonialCard
          imgTestimonial={imgTestimonialOne}
          nameTestimonial={testimonialArr[0].name}
          textTestimonial={testimonialArr[0].text}
        />
        <TestimonialCard
          imgTestimonial={imgTestimonialTwo}
          nameTestimonial={testimonialArr[1].name}
          textTestimonial={testimonialArr[1].text}
        />
      </ul>
      <div className="flex justify-center gap-5 mt-[70px] mb-[66px]">
        <img
          id="btnCircle"
          className="w-[12px] cursor-pointer"
          src={circleActive}
          alt=""
        />
        <img
          id="btnCircle"
          className="w-[12px] cursor-pointer"
          src={circle}
          alt=""
        />
        <img
          id="btnCircle"
          className="w-[12px] cursor-pointer"
          src={circle}
          alt=""
        />
      </div>
    </section>
  );
};

export default Testimonial;
