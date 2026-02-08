import Container from "../Container";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import ScrollToTop from "react-scroll-to-top";
import { GrLinkTop } from "react-icons/gr";

const Footer = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_22n2f6a", "template_4dlh5cf", form.current, {
        publicKey: "96VcsuELGflgAzir_",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };
  return (
    <section className=" mx-3 md:mx-0 mt-30 mb-10" id="contant">
      <Container>
        <div className="flex flex-col md:flex-row gap-y-10 justify-between">
          <div className="">
            <h3 className="text-[#202020] text-[29px] font-russo">
              Get In Tuch
            </h3>
            <div className="h-1 w-10 bg-[#202020] relative">
              <div className="h-px w-50 bg-[#202020] absolute left-0 top-1/2 -translate-y-1/2"></div>
            </div>
            <p className="text-sm text-[#333333] font-medium font-montserrat w-60.75 leading-6 pt-4">
              100 Main St, Blacktown NSW 2148, Australia
            </p>
            <p className="text-sm text-[#333333] font-medium font-montserrat py-2">
              support@bold.com, info@youremail.com
            </p>
            <p className="text-sm text-[#333333] font-medium font-montserrat">
              +256-4516-556, +(257) 56812749
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
          <div className="">
            <form ref={form} onSubmit={sendEmail}>
              <div className="pb-5 flex flex-col md:flex-row gap-4 text-[#777777] text-[13px] font-light font-montserrat">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name Here*"
                  className="border border-[#DDDDDD]  p-3 w-75.5"
                />

                <input
                  type="email"
                  name="user_email"
                  placeholder="Email Here**"
                  className="border border-[#DDDDDD] p-3 w-75.5"
                />
              </div>
              <div className="flex flex-col">
                <textarea
                  name="message"
                  placeholder="Message Here*"
                  className="h-22 w-76 md:w-full border border-[#DDDDDD] p-3 text-[#777777] text-[13px] font-light font-montserrat"
                />
                <input
                  type="submit"
                  value="Send "
                  className="ms-auto py-3
                 px-6 bg-[#202020] w-42 text-white text-[12px] font-montserrat uppercase mt-4 cursor-pointer rounded-2xl"
                />
              </div>
            </form>
          </div>
        </div>
      </Container>
      <div className="hidden md:block">
        <div />
        <ScrollToTop
          smooth
          top={400}
          color="white"
          className="!bg-green-400 !p-5 !h-15 !w-15 !flex items-center justify-center !rounded-full"
        />
      </div>
    </section>
  );
};

export default Footer;
