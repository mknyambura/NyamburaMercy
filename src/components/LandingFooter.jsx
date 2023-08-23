import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedinIn, FaGitHub } from 'react-icons/fa'

const LandingFooter = () => {
  return (
    <div  className='bg-black flex flex-col py-16 items-center justify-center'>
      <div className='flex flex-col bg-[#FF9b00] h-[2px] w-[80%] items-center'></div>
      <div className='flex sm:flex-col md:flex-col lg:flex-row items-center justify-evenly'>
        <div className='flex sm:flex-col md:flex-col lg:flex-row text-white justify-between px-48 w-full py-6 gap-8'>
            <h1 className='text-white flex sm:flex-col md:flex-col lg:flex-row sm:gap-3 md:gap-3'>Copyright © <a href='/' className='text-[#FF9B00]'>Mercy Faith Nyambura Kariuki. </a></h1>
            <h1>All Rights Reserved</h1>
        </div>
        <div className='flex flex-row justify-between gap-8'>
        <a href='https://www.linkedin.com/in/mercy-nyambura-kariuki/' target='_blank' rel='noreferrer'>
          <FaLinkedinIn className='sm:text-3xl md:text-3xl lg:text-5xl hover:text-[#FF9B00] hover:transition-all hover:duration-300 hover:ease-in-out'/>
        </a>
        {/* <a href='https://github.com/mknyambura' target='_blank' rel='noreferrer'>
          <FaGitHub className='sm:text-3xl md:text-3xl lg:text-5xl hover:text-[#FF9B00] hover:transition-all hover:duration-300 hover:ease-in-out'/>
        </a> */}
        </div>
      </div>
    </div>
  )
}

export default LandingFooter