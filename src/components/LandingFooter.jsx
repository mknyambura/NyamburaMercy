import React from 'react'
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const LandingFooter = () => {
  return (
    <div  className='bg-black flex flex-col py-16 items-center justify-center'>
      <div className='flex flex-col bg-[#FF9b00] h-[2px] w-[80%] items-center'></div>
      <div className='flex flex-row items-center justify-evenly'>
        <div className='flex sm:flex-col md:flex-col lg:flex-row text-white justify-between px-48 w-full py-6 gap-8'>
            <h1 className='text-white flex sm:flex-col md:flex-col lg:flex-row'>Copyright © <a href='/' className='text-[#FF9B00]'>Mercy Faith Nyambura Kariuki. </a></h1>
            <h1>All Rights Reserved</h1>
        </div>
        <div className='flex flex-row justify-between gap-8'>
            <FaLinkedinIn className='text-[#FF9B00] text-3xl'/>
            <FaTwitter className='text-[#FF9B00] text-3xl'/>
        </div>
      </div>
    </div>
  )
}

export default LandingFooter