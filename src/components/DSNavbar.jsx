import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { SlArrowLeft } from 'react-icons/sl'
import { Link } from 'react-router-dom'


const DSNavbar = () => {
    const [open, setOpen] = useState(true)
    const [isClicked, setIsClicked] = useState(false)
    
    const handleclick =() => {
      setOpen(!open)
    }

  return (
    <div className='bg-[#FF9B00] py-6 px-4'>
        <Link to='/' className='text-white'>
            <button className='rounded-full font-bold flex flex-row items-center gap-4'><SlArrowLeft className='bg-white rounded-full text-[#FF9B00] text-4xl px-2 py-2'/>Go Back</button>
        </Link>
        <div className='flex flex-row items-center justify-between bg-[#FF9B00] px-12 py-8'>
            <h1 className='text-white font-bold text-4xl uppercase'>Mercy N.K</h1>

            <div className='absolute right-8 top-[15%] lg:hidden' onClick={handleclick}>
            {
                open ?  <FaBars className='text-white text-3xl'/> : <FaTimes className='text-white text-3xl'/>
            }
            </div>

            <ul className={`sm:w-1/2 md:w-1/2 lg:w-auto sm:z-10 md:z-10 z-[-1] sm:absolute md:absolute lg:static sm:py-6 sm:px-6 sm:mb-6 sm:mt-6 md:py-6 md:px-6 md:mb-6 md:mt-6 sm:bg-[#FF9B00]/90 md:bg-[#FF9B00]/90 lg:bg-transparent flex sm:flex-col md:flex-col lg:flex-row gap-4 items-center sm:right-1 md:right-1 ${open ? "top-[-1090px]": "top-[167px]"}`}>
                <li className='sm:text-white md:text-white lg:text-white font-bold'>About</li>
                <li className='sm:text-white md:text-white lg:text-white font-bold'>Contact Me</li>
            </ul>
        </div>
    </div>
  )
}

export default DSNavbar