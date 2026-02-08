import React from "react";
import Container from "../Container";
import Images from "../Images";
import aboutImg from "/src/assets/aboutImg.png";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";


const About = () => {
  return (
    <section className="mx-3 md:mx-0 my-8 md:my-25" id="about">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="">
            <Images srcImg={aboutImg} />
          </div>
          <div className="">
            <h3 className="text-[#202020] text-[29px] font-russo">About Us</h3>
            <div className="h-1 w-10 bg-[#202020] relative">
              <div className="h-px w-50 bg-[#202020] absolute left-0 top-1/2 -translate-y-1/2"></div>
            </div>

            <p className="text-[#333333] text-sm font-montserrat mt-3 md:mt-12 md:w-158.75 leading-7">
              For instance, whenever I go back to the guest house during the
              morning to copy out the contract, these gentlemen are always still
              sitting there eating their breakfasts. I ought to just try that
              witht my boss; I'd get kicked out on the spot.
            </p>
            <p className="text-[#333333] text-sm font-montserrat mt-2 md:mt-8 md:w-158.75 leading-7">
              But who knows, maybe that would be the best thing for me. He'd
              fall right off his desk! And it's a funny sort of business to be
              sitting up there at your desk, talking down at your subordinates.
              I ought to just try that witht my boss; I'd get kicked out on the
              spot. But who knows, maybe that would be the best thing for me.
              He'd fall right off his desk! And it's a funny sort of business to
              be sitting up there at your desk, talking down at your
              subordinates.
            </p>
            <div className="flex items-center gap-x-5 mt-6">
              <h4 className="text-[#202020] text-base font-semibold font-montserrat">
                Share :
              </h4>
              <div className="flex gap-x-4">
                <a href="https://www.facebook.com/mdjaberdev" target="_blank">
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.linkedin.com/in/mdjaberdev/"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </a>
                <a href="https://www.instagram.com/mdjaberdev/" target="_blank">
                  <FaInstagram />
                </a>
                <a href="https://github.com/mdjaberdev" target="_blank">
                  <VscGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
