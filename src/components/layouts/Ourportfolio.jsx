import React from "react";
import Container from "../Container";
import orebi from "/src/assets/orebi.png";
import hancok from "/src/assets/hancok.png";
import game from "/src/assets/numbeGss.png";
import Images from "../Images";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";

const Projects = () => {
  return (
    <section
      id="projects"
      className=" py-8 md:py-23.75 bg-[#202020] lg:w-full w-95.75"
    >
      <Container className={"w-90 lg:w-295"}>
        <div className="ml-3 md:ml-0 md:text-center mx-auto">
          <h3 className="text-white text-[29px] font-russo">
            My Work & Projects
          </h3>
          <div className="hidden md:block h-1 w-10 bg-white relative text-center mx-auto -left-30 mt-2">
            <div className="h-px w-73 bg-white absolute left-0 top-1/2 -translate-y-1/2"></div>
          </div>
          <p className="text-[#90A1B9]   text-sm md:text-[15px] pt-1 md:pt-6 w-60 md:w-full">
            Here are some of the projects I have built using React and Tailwind
            CSS.
          </p>
        </div>

        <div className="lg:flex lg:justify-between lg:gap-x-10 mt-15">
          {/* project 1 start */}
          <div className="group mx-3 md:mx-0 bg-[#1e293b]/20 border border-white/5 rounded-2xl overflow-hidden hover:border-[#FE9A00]/50 transition-all duration-300 hover:-translate-y-2 mb-7.5 lg:mb-0">
            <div className="h-50 w-75 md:w-full overflow-hidden relative">
              <Images
                srcImg={orebi}
                className="md:w-full md:h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold font-montserrat text-white mb-3 group-hover:text-[#FE9A00] duration-300">
                E-Commerce Website
              </h3>
              <p className="text-gray-400 w-60 md:w-full mb-6 h-11.25">
                A fully functional online store where you can view products.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-[#FE9A00]/10 text-[#FE9A00] text-xs font-semibold rounded-full border group-hover:text-white duration-300 border-[#FE9A00]/20">
                  React
                </span>
                <span className="px-3 py-1 bg-[#FE9A00]/10 text-[#FE9A00] text-xs font-semibold rounded-full border group-hover:text-white duration-300 border-[#FE9A00]/20">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 bg-[#FE9A00]/10 text-[#FE9A00] text-xs font-semibold rounded-full border group-hover:text-white duration-300 border-[#FE9A00]/20">
                  Context API
                </span>
              </div>
              <div className="">
                <div className="flex items-center justify-around md:justify-between mt-auto">
                  <a
                    href="https://e-commerce-six-liard.vercel.app/"
                    className="hover:text-[#FE9A00] text-white duration-300 font-semibold text-sm flex items-center gap-2"
                  >
                    Live Preview
                    <FaArrowUpRightFromSquare />
                  </a>
                  <a
                    href="https://github.com/jaber-2004/e-Commerce"
                    className="text-gray-400 text-xl hover:text-[#FE9A00] transition-colors duration-300"
                  >
                    <BsGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* project 1 end */}
          {/* project 2 start */}
          <div className="group mx-3 md:mx-0 bg-[#1e293b]/20 border border-white/5 rounded-2xl overflow-hidden hover:border-[#FE9A00]/50 transition-all duration-300 hover:-translate-y-2 mb-7.5 lg:mb-0">
            <div className="h-50 overflow-hidden relative">
              <Images
                srcImg={hancok}
                className="w-75 md:w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold font-montserrat text-white mb-3 group-hover:text-[#FE9A00] transition-colors">
                Gaming-Portfolio
              </h3>
              <p className="text-gray-400 mb-6 w-60 md:w-full h-11.25">
                A modern landing page for Ui/Ux Designer.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-[#FE9A00]/10 text-[#FE9A00] text-xs font-semibold rounded-full border group-hover:text-white duration-300 border-[#FE9A00]/20">
                  JavaScript
                </span>
                <span className="px-3 py-1 bg-[#FE9A00]/10 text-[#FE9A00] text-xs font-semibold rounded-full border group-hover:text-white duration-300 border-[#FE9A00]/20">
                  jQuery
                </span>
                <span className="px-3 py-1 bg-[#FE9A00]/10 text-[#FE9A00] text-xs font-semibold rounded-full border group-hover:text-white duration-300 border-[#FE9A00]/20">
                  CSS
                </span>
              </div>
              <div className="">
                <div className="flex items-center justify-around md:justify-between mt-auto">
                  <a
                    href="https://jaber-2004.github.io/Hancok/"
                    className="hover:text-[#FE9A00] text-white duration-300 font-semibold text-sm flex items-center  gap-2"
                  >
                    Live Preview
                    <FaArrowUpRightFromSquare />
                  </a>
                  <a
                    href="https://github.com/jaber-2004/Hancok"
                    className="text-gray-400 text-xl hover:text-[#FE9A00] transition-colors duration-300"
                  >
                    <BsGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* project 2 end */}
          {/* project 3 start */}
          <div className="group mx-3 md:mx-0 bg-[#1e293b]/20 border border-white/5 rounded-2xl overflow-hidden hover:border-[#FE9A00]/50 transition-all duration-300 hover:-translate-y-2 mb-7.5 lg:mb-0">
            <div className="h-50 w-75 md:w-full overflow-hidden relative">
              <Images
                srcImg={game}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold md:w-100 font-montserrat text-white mb-3 group-hover:text-[#FE9A00] transition-colors w-60 ">
                Number Guessing Game
              </h3>
              <p className="text-gray-400 mb-6 w-60 md:w-full h-11.25">
                A simple funny game for entertainment.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-[#FE9A00]/10 text-[#FE9A00] text-xs font-semibold rounded-full border border-[#FE9A00]/20">
                  JavaScript
                </span>
                <span className="px-3 py-1 bg-[#FE9A00]/10 text-[#FE9A00] text-xs font-semibold rounded-full border border-[#FE9A00]/20">
                  Tailwind
                </span>
              </div>
              <div className="">
                <div className="flex items-center justify-around md:justify-between mt-auto">
                  <a
                    href="https://jaber-2004.github.io/domFunGame/"
                    className="hover:text-[#FE9A00] text-white duration-300 font-semibold text-sm flex items-center gap-2"
                  >
                    Live Preview
                    <FaArrowUpRightFromSquare />
                  </a>
                  <a
                    href="https://github.com/jaber-2004/domFunGame"
                    className="text-gray-400 text-xl hover:text-[#FE9A00] transition-colors duration-300"
                  >
                    <BsGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* project 3 end */}
        </div>
        {/* 'See More' Button */}
        <div className="ml-3 md:ml-0 md:text-center mt-16">
          <a
            href="https://github.com/jaber-2004"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border border-[#FE9A00] text-[#FE9A00] font-bold rounded hover:bg-[#FE9A00] hover:text-white transition-all duration-300"
          >
            View All Projects
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
