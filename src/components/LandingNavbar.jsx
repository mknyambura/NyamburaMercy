import React from 'react'

const LandingNavbar = () => {
  return (
    <div className='flex flex-row justify-between bg-white shadow-xl px-6 py-6'>
        <h1 className='text-4xl font-bold'>Mercy<span className='text-[#FF9B00]'>.code</span></h1>
        <div className='flex flex-row justify-between gap-8'>
          <a href="/data-science-portfolio" className='font-semibold hover:text-[#FF9B00] active:text-white hover:transition-all hover:duration-500'>Data Science Portfolio</a>
          <a href="/react-developer-porfolio" className='font-semibold hover:text-[#FF9B00] active:text-white hover:transition-all hover:duration-500'>React Developer Portfolio</a>
          <a href="" className='font-semibold hover:text-[#FF9B00] active:text-white hover:transition-all hover:duration-500'>Resume</a>
        </div>
        <div className='flex flex-row justify-between gap-8'>
          <a href="#about" className='font-semibold hover:text-[#FF9B00] active:text-white'>About</a>
          <a href="#contact" className='font-semibold hover:text-[#FF9B00] active:text-white'>Get in Touch</a>
        </div>
    </div>
  )
}

export default LandingNavbar