import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const LandingNavbar = () => {

  const [open, setOpen] = useState(true)
  const [isClicked, setIsClicked] = useState(false)

  const handleclick =() => {
      setOpen(!open)
  }

  return (
    <>
    <div className=' flex flex-row justify-between bg-white shadow-xl px-6 sm:py-6 md:py-6 items-center'>
        <div className='lg:gap-[350px] flex flex-row items-center justify-between'>
          {/* <div> */}
            <Link className='sm:text-3xl md:text-3xl lg:text-4xl font-bold'>Mercy<span className='text-[#FF9B00]'>.code</span></Link>
          {/* </div> */}
          <div className='absolute right-8 top-[5%] lg:hidden' onClick={handleclick}>
            {
                open ?  <FaBars className='text-[#FF9B00] text-3xl'/> : <FaTimes className='text-[#FF9B00] text-3xl'/>
            }
          </div>
          <ul className={`sm:w-1/2 md:w-1/2 lg:w-auto sm:z-10 md:z-10 z-[-1] sm:absolute md:absolute lg:static sm:right-[1%] md:right-[1%] flex sm:flex-col md:flex-col lg:flex-row justify-between gap-8 sm:bg-[#FF9B00]/90 md:bg-[#FF9B00]/90 lg:bg-transparent sm:py-6 sm:px-6 sm:mb-6 sm:mt-6 md:py-6 md:px-6 md:mb-6 md:mt-6 ${open ? "top-[-1090px] text-black" : "top-[10%] text-white"}`}>
            {/* <div className='flex sm:flex-col md:flex-col lg:flex-row justify-between gap-8'> */}
              <li className=''>
                <a href="/data-science-portfolio" className='font-semibold hover:font-bold active:text-[#FF9B00] hover:transition-all hover:duration-500' target='_blank' rel='noreferrer'>Data Science Portfolio</a>
              </li>
              <li className=''>
                <a href="/react-developer-portfolio" className='font-semibold hover:font-bold active:text-[#FF9B00] hover:transition-all hover:duration-500' target='_blank' rel='noreferrer'>React Developer Portfolio</a>
              </li>
              <li className=''>
                <a href="" className='font-semibold hover:font-bold active:text-[#FF9B00] hover:transition-all hover:duration-500' target='_blank' rel='noreferrer'>Resume</a>
              </li>
            {/* </div> */}
            {/* <div className='flex sm:flex-col md:flex-col lg:flex-row justify-between gap-8'> */}
              <li className=''>
                <a href="#about" className='font-semibold hover:font-bold active:text-[#FF9B00]'>About</a>
              </li>
              <li className=''>
                <a href="#contact" className='font-semibold hover:font-bold active:text-[#FF9B00]'>Get in Touch</a>
              </li>
            {/* </div> */}
          </ul>
        </div>
    </div>
    </>
  )
}

export default LandingNavbar