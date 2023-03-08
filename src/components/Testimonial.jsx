import React from "react";
import TestimonialCard from "./TestimonialCard";

import imgTestimonialOne from "../img/Testimonial/testimonialOne.jpg";
import imgTestimonialTwo from "../img/Testimonial/testimonialTwo.jpg";

const Testimonial = (props) => {
  const nameTestimonial = ["James Passaquindici Arcand", "Abram Schleifer"];
  const textTestimonial = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
  ];

  return (
    <section className="testimonial container m-auto">
      <h2 className="mb-[70px] max-md:text-3xl font-['Playfair_Display'] max-md:mb-4 max-md:text-center text-5xl font-[900] text-center">
        Testimonial
      </h2>
      <ul className="flex max-sm:flex-col max-sm:w-[50%] m-auto flex-col-2 max-sm:gap-14 sm:gap-32">
        <TestimonialCard
          imgTestimonial={imgTestimonialOne}
          nameTestimonial={nameTestimonial}
          textTestimonial={textTestimonial}
        />
        <TestimonialCard
          imgTestimonial={imgTestimonialTwo}
          nameTestimonial={nameTestimonial}
          textTestimonial={textTestimonial}
        />
      </ul>
    </section>
  );
};

export default Testimonial;
