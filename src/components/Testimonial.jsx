import React, { useState } from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
	const testimonialArr = [
		{
			name: "James Passaquindici Arcand",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
			img: "./img/Testimonial/testimonialOne.jpg",
		},
		{
			name: "Abram Schleifer",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
			img: "./img/Testimonial/testimonialTwo.jpg",
		},
	];

  const [activeCircle, setActiveCircle] = useState(null);

  const circleOnClick = (index) => {
    setActiveCircle(index);
  };

  return (
    <section className="testimonial container m-auto">
      <h2 className="mb-[70px] max-md:text-3xl font-['Playfair_Display'] max-md:mb-4 max-md:text-center text-5xl font-[900] text-center">
        Отзывы
      </h2>
      <div className="w-screen">
        <ul className="flex [&>*]:w-full max-sm:flex-col max-sm:w-[50%] m-auto flex-col-2 gap-4 w-full">
          {testimonialArr.map((item, index) => (
            <TestimonialCard
              key={index}
              img={item.img}
              name={item.name}
              text={item.text}
            />
          ))}
        </ul>
      </div>
      <div className="flex justify-center gap-5 mt-[70px] mb-[66px]">
        {testimonialArr.map((_, index) => (
          <button key={index} type="button" onClick={() => circleOnClick(index)}>
            <img
              className="w-[12px] cursor-pointer"
              src={
                activeCircle === index
                  ? "./img/Testimonial/Testimonial-circle-active.jpg"
                  : "./img/Testimonial/Testimonial-circle.jpg"
              }
              alt={`btnCircle${index}`}
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
