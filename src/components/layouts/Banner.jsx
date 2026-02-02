import React from "react";
import Container from "../Container";
import Images from "../Images";
import myImg from "/src/assets/profile-pic (3).png";
import { FaRegQuestionCircle } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-[#202020] py-40 relative">
      <Container>
        <div className="flex items-center justify-between">
          <div className="w-[48%]">
            <h1 className="text-[55px] text-white font-light font-montserrat uppercase">
              I'm Jaber
            </h1>
            <h3 className="text-[19px] text-white font-light font-montserrat">
              Front-end Developer
            </h3>
          </div>
          <div className="w-[48%]">
            <Images srcImg={myImg} />
          </div>
        </div>
      </Container>
      <a
        href="#"
        className="uppercase text-white text-[10px] font-light font-montserrat [writing-mode:vertical-lr] rotate-180 absolute right-10 bottom-10 flex items-center gap-x-1"
      >
        about us <FaRegQuestionCircle className="rotate-80" />
      </a>
    </div>
  );
};

export default Banner;
