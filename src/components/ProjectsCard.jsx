import React from "react";

const ProjectsCard = (props) => {
	const { img, alt, title } = props;
	return (
		<li>
			<img className="mb-3" src={img} alt={alt} />
			<h3 className="font-['Playfair_Display'] text-[18px] text-center m-auto max-w-[178px] font-[500]">
				{title}
			</h3>
		</li>
	);
};

export default ProjectsCard;
