import React from "react";
import Container from "../Container";
import Images from "../Images";
import myImg from "/src/assets/profile-pic (3).png";
import { FaRegQuestionCircle } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="bg-[#202020] md:py-40 relative">
      <Container>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="w-[48%] text-center md:text-start">
            <h1 className="text-2xl md:text-[55px] text-white font-light font-montserrat uppercase py-1 md:py-0">
              I'm Jaber
            </h1>
            <h3 className="text-sm md:text-[19px] text-white font-light font-montserrat pb-4 md:pb-0">
              Front-end Developer
            </h3>
          </div>
          <div className="w-[48%]">
            <Images srcImg={myImg} />
          </div>
        </div>
      </Container>
      <a
        href="#about"
        
        className="uppercase text-white text-[10px] font-light font-montserrat invisible md:visible [writing-mode:vertical-lr] rotate-180 absolute right-10 bottom-10 flex items-center gap-x-1"
      >
        about us <FaRegQuestionCircle className="rotate-80" />
      </a>
    </section>
  );
};

export default Banner;
