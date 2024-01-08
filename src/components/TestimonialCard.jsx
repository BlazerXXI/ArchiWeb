import React from "react";

const TestimonialCard = (props) => {
	const { img, name, text } = props;
	return (
		<li className="flex gap-7 items-center justify-center max-md:flex-wrap">
			<img src={img} alt={name} />
			<div>
				<h3
					className="
			 font-['Playfair_Display']
			 text-2xl  font-bold"
				>
					{name}
				</h3>
				<p
					className="
				 font-['Playfair_Display']
				 text-[17px]
				"
				>
					{text}
				</p>
			</div>
		</li>
	);
};

export default TestimonialCard;
