import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";

const LandingFooter = () => {
  return (
    <div className="bg-black flex flex-col py-16 items-center justify-center">
      <div className="flex flex-col bg-[#FF9b00] h-[2px] w-[80%] items-center"></div>
      <div className="flex flex-col md:flex-col lg:flex-row items-center justify-evenly">
        <div className="flex flex-col md:flex-col lg:flex-row text-white justify-between px-24 py-6 gap-8">
          <h1 className="text-white flex flex-col md:flex-col lg:flex-row gap-3 md:gap-3">
            Copyright ©{" "}
            <a href="/" className="text-[#FF9B00]">
              Mercy Faith Nyambura Kariuki.{" "}
            </a>
          </h1>
          <h1>All Rights Reserved</h1>
        </div>
      </div>
    </div>
  );
};

export default LandingFooter;
