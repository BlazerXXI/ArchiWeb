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
    <section className="testimonial">
      <h2>Testimonial</h2>
      <ul>
        <TestimonialCard
          imgTestimonial={imgTestimonialOne}
          nameTestimonial={nameTestimonial}
          textTestimonial=""
        />
        <TestimonialCard
          imgTestimonial={imgTestimonialTwo}
          nameTestimonial=""
          textTestimonial=""
        />
      </ul>
    </section>
  );
};

export default Testimonial;
