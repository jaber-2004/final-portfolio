import React from "react";
import Images from "../Images";
import logo from "/src/assets/logo.png";
import Container from "../Container";

const Header = () => {
  return (
    <section className="bg-[#202020] py-5">
      <Container>
        <div className="flex items-center justify-between">
          <div className="">
            <Images srcImg={logo} />
          </div>
          <nav>
            <ul className="flex gap-x-10 text-white text-sm font-medium font-montserrat">
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
