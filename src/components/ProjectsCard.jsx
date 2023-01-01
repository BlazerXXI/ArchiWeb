import React from "react";

const ProjectsCard = (props) => {
  return (
    <li>
      <img className="mb-3" src={props.img} alt={props.alt} />
      <h3 className="font-['Playfair_Display'] text-[18px] text-center m-auto max-w-[178px] font-[500]">
        {props.title}
      </h3>
    </li>
  );
};

export default ProjectsCard;
