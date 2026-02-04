import React, { useState } from "react";
import Images from "../Images";
import logo from "/src/assets/logo.png";
import Container from "../Container";
import { FaBars } from "react-icons/fa6";

const Header = () => {
    let [show, setShow] = useState(false);
  return (
    <section className="bg-[#202020] py-1 md:py-5">
      <Container>
        <div className="md:flex items-center justify-between relative">
          <div className="">
            <Images srcImg={logo} />
          </div>

          <FaBars
            className="md:hidden absolute top-1/2 -translate-y-1/2 right-3 text-white"
            onClick={() => setShow(!show)}
          />
          {show && (
        <div className="fixed inset-0 z-50" onClick={()=> setShow(!show)}></div>
        )}
          <nav className={` absolute top-10 right-3 z-50`}>
            <ul
              className={`${show ? "" : "hidden"}  flex-col flex gap-y-5 md:flex-row md:gap-x-10 text-white text-sm font-medium font-montserrat`}
            >
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Portfolio</a>
              </li>
              <li>
                <a href="#contant">Contact</a>
              </li>
            </ul>
            {/* Desktop er jonno eta  */}
            <ul
              className={`invisible md:visible flex-col flex gap-y-5 md:flex-row md:gap-x-10 text-white text-sm font-medium font-montserrat`}
            >
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Portfolio</a>
              </li>
              <li>
                <a href="#contant">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </section>
  );
};

export default Header;
