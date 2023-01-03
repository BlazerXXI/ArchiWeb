import React from "react";

const TestimonialCard = (props) => {
  return (
    <li>
      <img src={props.imgTestimonial} alt={props.nameTestimonial} />
      <h3>{props.nameTestimonial}</h3>
      <p>{props.textTestimonial}</p>
    </li>
  );
};

export default TestimonialCard;
