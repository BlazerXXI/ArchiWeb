import React from "react";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
	const projectsArr = [
		{
			img: "./img/projects/projectsOne.jpg",
			title: "Our Services Line one Servive line two",
		},
		{
			img: "./img/projects/projectsTwo.jpg",
			title: "Our Services Line one Servive line two",
		},
		{
			img: "./img/projects/projectsThree.jpg",
			title: "Our Services Line one Servive line two",
		},
		{
			img: "./img/projects/projectsFour.jpg",
			title: "Our Services Line one Servive line two",
		},
		{
			img: "./img/projects/projectsFive.jpg",
			title: "Our Services Line one Servive line two",
		},
		{
			img: "./img/projects/projectsSix.jpg",
			title: "Our Services Line one Servive line two",
		},
	];

	return (
		<section className="projects container m-auto px-[5px] mb-[90px]">
			<div className="flex md:flex-row flex-col md:justify-between md:mb-16">
				<h2 className="font-['Playfair_Display'] max-md:mb-4 max-md:text-center text-5xl font-[900]">
					Our Projects
				</h2>
				<ul className="flex items-center gap-6 max-md:mb-4 max-md:justify-center lg:gap-x-20 max-md:flex-wrap">
					<li>
						<a className="projects__active font-[600]" href="#">
							All
						</a>
					</li>
					<li>
						<a href="#">Furniture</a>
					</li>
					<li>
						<a href="#">Design</a>
					</li>
					<li>
						<a href="#">House</a>
					</li>
				</ul>
			</div>
			<div>
				<ul className="grid justify-center sm:grid-cols-2 md:grid-cols-3 gap-20">
					{projectsArr.map((project, id) => (
						<ProjectsCard
							key={id}
							img={project.img}
							alt={project.title}
							title={project.title}
						/>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Projects;
