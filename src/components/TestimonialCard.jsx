import React from "react";

const TestimonialCard = (props) => {
  return (
    <li className="flex gap-7 items-center justify-center">
      <img src={props.imgTestimonial} alt={props.nameTestimonial} />
      <div>
        <h3
          className="
			 font-['Playfair_Display']
			 text-2xl  font-bold"
        >
          {props.nameTestimonial}
        </h3>
        <p
          className="
				 font-['Playfair_Display']
				 text-[17px]
				"
        >
          {props.textTestimonial}
        </p>
      </div>
    </li>
  );
};

export default TestimonialCard;
