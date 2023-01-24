import React from "react";
import ProjectsCard from "./ProjectsCard";

import projectsOne from "../img/projects/projectsOne.jpg";
import projectsTwo from "../img/projects/projectsTwo.jpg";
import projectsThree from "../img/projects/projectsThree.jpg";
import projectsFour from "../img/projects/projectsFour.jpg";
import projectsFive from "../img/projects/projectsFive.jpg";
import projectsSix from "../img/projects/projectsSix.jpg";

const Projects = () => {
  const projOneTitle = [
    "Our Services Line one Servive line two",
    "Our Services Line one Servive line two",
    "Our Services Line one Servive line two",
    "Our Services Line one Servive line two",
    "Our Services Line one Servive line two",
    "Our Services Line one Servive line two",
  ];
  return (
    <section className="projects container m-auto px-[5px] mb-[90px]">
      <div className="flex md:flex-row flex-col md:justify-between md:mb-16">
        <h2 className="font-['Playfair_Display'] max-md:mb-4 max-md:text-center text-5xl font-[900]">
          Our Projects
        </h2>
        <ul className="flex items-center gap-6 max-md:mb-4 max-md:justify-center lg:gap-x-20">
          <li className="font-[600]">All</li>
          <li className="">Furniture</li>
          <li className="">Design</li>
          <li className="">House</li>
        </ul>
      </div>
      <div>
        <ul className="grid justify-center sm:grid-cols-2 md:grid-cols-3 gap-20">
          <ProjectsCard
            img={projectsOne}
            alt={projOneTitle[0]}
            title={projOneTitle[0]}
          />
          <ProjectsCard
            img={projectsTwo}
            alt={projOneTitle[1]}
            title={projOneTitle[1]}
          />
          <ProjectsCard
            img={projectsThree}
            alt={projOneTitle[2]}
            title={projOneTitle[2]}
          />
          <ProjectsCard
            img={projectsFour}
            alt={projOneTitle[3]}
            title={projOneTitle[3]}
          />
          <ProjectsCard
            img={projectsFive}
            alt={projOneTitle[4]}
            title={projOneTitle[4]}
          />
          <ProjectsCard
            img={projectsSix}
            alt={projOneTitle[5]}
            title={projOneTitle[5]}
          />
        </ul>
      </div>
    </section>
  );
};

export default Projects;
