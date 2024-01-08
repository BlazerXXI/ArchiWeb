import React from "react";

const Services = () => {
	return (
		<section className="services bg-[#254D4D33] max-sm:mt-[76px] mb-[76px]">
			<div className=" max-w-[1087px] text-center m-auto pt-[16px] pb-[65px] ">
				<div>
					<h2 className="font-['Playfair_Display'] text-[51px] font-[900] mb-[45px]">
						Our Services
					</h2>
				</div>
				<ul className="flex flex-wrap justify-center gap-6 sm:justify-between">
					<li className="text-center items-center max-w-[158px] flex flex-col justify-center">
						<div className="w-[100px] h-[100px] bg-[#254D4D] rounded-full relative">
							<img
								className="absolute top-[23px] left-[25px]"
								src={"./img/services/services-01.svg"}
								alt="Services Doc"
							/>
						</div>
						<h3 className="font-['Playfair_Display'] font-[900] text-[27px] mb-[10px]">
							Planning
						</h3>
						<p className="font-['Playfair_Display'] text-[16px]">
							Our Services Line one Servive line two
						</p>
					</li>
					<li className="text-center items-center max-w-[158px] flex flex-col justify-center">
						<div className="w-[100px] h-[100px] bg-[#254D4D] rounded-full relative">
							<img
								className="absolute top-[23px] left-[25px]"
								src={"./img/services/services-01.svg"}
								alt="Services Doc"
							/>
						</div>
						<h3 className="font-['Playfair_Display'] font-[900] text-[27px] mb-[10px]">
							Interior
						</h3>
						<p className="font-['Playfair_Display'] text-[16px]">
							Our Services Line one Servive line two
						</p>
					</li>
					<li className="text-center items-center max-w-[158px] flex flex-col justify-center">
						<div className="w-[100px] h-[100px] bg-[#254D4D] rounded-full relative">
							<img
								className="absolute top-[23px] left-[25px]"
								src={"./img/services/services-01.svg"}
								alt="Services Doc"
							/>
						</div>
						<h3 className="font-['Playfair_Display'] font-[900] text-[27px] mb-[10px]">
							Exterior
						</h3>
						<p className="font-['Playfair_Display'] text-[16px]">
							Our Services Line one Servive line two
						</p>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Services;
