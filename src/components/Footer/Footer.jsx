import React from 'react'
import { FaGithub, FaLinkedinIn} from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

function Footer() {
  return (
    <div className="flex flex-row gap-8 pt-[50px] mb-[50px]">
        <a
          href="https://github.com/mknyambura"
          target="_blank"
          rel="noreferrer"
          className="w-[60px] h-[60px] flex flex-row justify-center items-center rounded-full text-[#a6a8ab] hover:transition-all hover:duration-500 hover:ease-in-out hover:bg-[#a6a8ab] "
        >
          <FaGithub className="text-3xl hover:text-4xl md:text-3xl lg:text-5xl hover:text-black hover:transition-all hover:duration-300 hover:ease-in-out" />
        </a>
        <a
          href="https://www.linkedin.com/in/mercy-nyambura-kariuki/"
          target="_blank"
          rel="noreferrer"
          className="w-[60px] h-[60px] flex flex-row justify-center items-center rounded-full text-[#a6a8ab] hover:transition-all hover:duration-500 hover:ease-in-out hover:bg-[#a6a8ab] "
        >
          <FaLinkedinIn className="text-3xl hover:text-4xl md:text-3xl lg:text-5xl hover:text-black hover:transition-all hover:duration-300 hover:ease-in-out" />
        </a>
        <a
          href="mailto:kariuki.mercie@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="w-[60px] h-[60px] flex flex-row justify-center items-center rounded-full text-[#a6a8ab] hover:transition-all hover:duration-500 hover:ease-in-out hover:bg-[#a6a8ab] "
        >
          <TfiEmail className="text-3xl hover:text-4xl md:text-3xl lg:text-5xl hover:text-black hover:transition-all hover:duration-300 hover:ease-in-out" />
        </a>
    </div>
  )
}

export default Footer