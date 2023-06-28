import React from 'react'
import { Link } from 'react-router-dom'

import LandingNavbar from './LandingNavbar'
import profilePic from '../assets/dp.jpg'
import dsImage from '../assets/ds-image.png'
import rdImage from '../assets/rd-image.png'

import { BsBoxArrowUpRight, BsEmojiWink } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn, FaMapMarkedAlt } from 'react-icons/fa'
import { TfiEmail } from 'react-icons/tfi'

import data from '../../db.json'
import { useState } from 'react'
import { useEffect } from 'react'
import LandingFooter from './LandingFooter'

const Landing = () => {
  const [skills, setSkills] = useState([])

  useEffect(() => {
    fetch('./react')
    .then((response) => response.json())
    .then(setSkills)
  }, [])
  
  

  return (
    <div>
        <LandingNavbar/>
        <div className='bg-[#E1E2E2]/40 flex flex-row items-center justify-between px-12 py-12'>
          <div className='flex flex-col justify-between gap-8'>
            <h1 className='flex flex-col justify-between gap-8 sm:text-xl md:text-xl lg:text-2xl'><span className='text-4xl text-[#FF9B00] font-bold'>Hi! I'm Mercy.</span> Great seeing you here! I'm a Data Scientist and a Front-End React Developer based in UK and Kenya</h1>
            <div className='flex flex-row gap-8'>
              <a href='https://www.linkedin.com/in/mercy-nyambura-kariuki/' target='_blank' rel='noreferrer'>
                <FaLinkedinIn className='sm:text-3xl md:text-3xl lg:text-5xl hover:text-[#FF9B00] hover:transition-all hover:duration-300 hover:ease-in-out'/>
              </a>
              <a href='https://github.com/mknyambura' target='_blank' rel='noreferrer'>
                <FaGithub className='sm:text-3xl md:text-3xl lg:text-5xl hover:text-[#FF9B00] hover:transition-all hover:duration-300 hover:ease-in-out'/>
              </a>
            </div>
          </div>
          <div className='rounded-full sm:w-3/4 md:w-3/4 lg:w-3/4'>
            <img src={profilePic} alt="" className='rounded-full'/>
          </div>
        </div>
        {/* About Me */}
        <div className='mt-16 mb-16 flex sm:flex-col md:flex-col lg:flex-row justify-evenly items-center'>
          <div className='lg:w-[40%] flex flex-row px-6 py-6'>
            <div className='hover:text-2xl relative flex items-center justify-center bg-[#FF9B00]/10 h-[30vh] w-[calc(50%-40px)] hover:w-[calc(50%+500px)] transition-all ease-in-out duration-700'>
                <img src={dsImage} alt=""  width={600}/>
                <a href='/data-science-portfolio' target='_blank' rel='noreferrer' className='absolute text-center items-center justify-center font-bold text-sm hover:text-2xl text-[#fff]'>Data Scientist</a>
            </div>
            <div className='relative flex items-center justify-center bg-[#FF9B00]/10 h-[30vh] w-[calc(50%+50px)] hover:w-[calc(50%+800px)] transition-all ease-in-out duration-700 border-l-[50px] border-l-[#FF9B00]/5 border-b-[188px] border-b-transparent box-border'>
                <img src={rdImage} alt="" className='absolute sm:top-[15px] lg:top-[30px]' width={600}/>
                <a href='/react-developer-portfolio' target='_blank' rel='noreferrer' className='absolute top-[70px] text-center items-center justify-center font-bold text-sm hover:text-2xl text-[#fff]'>Front-End React Developer</a>
            </div>
          </div>
          <div className='lg:w-1/2 flex flex-col items-center gap-8'>
            <h1 className='text-[#FF9B00] font-bold text-2xl uppercase'>About Me</h1>
            <div id='about' className='flex flex-row sm:gap-8 lg:gap-16 sm:px-6 sm:py-6 lg:px-12 lg:py-6 justify-between'>
              {/* Data Science */}
              <div className='sm:w-1/2 md:w-1/2 lg:w-1/2 flex flex-col lg:items-center gap-8'>
                <h1 className='font-bold text-2xl'>Data Scientist</h1>
                <div className='flex flex-row flex-wrap gap-8'>
                  {/* <ul className='list-disc marker:text-[#FF9B00]'> */}
                    {data.dataScience.map((dataScienceSkills) => (
                      // <div key={reactSkills.id}>
                        <img src={dataScienceSkills.image} alt="" className='rounded-full sm:w-[20%] md:w-[20%] lg:w-[15%] gap-8' />
                      // </div>
                    ))}
                  {/* </ul> */}
                </div>
              </div>
              {/* React Developer */}
              <div className='sm:w-1/2 md:w-1/2 lg:w-[40%] flex flex-col lg:items-center gap-8'>
                <h1 className='font-bold text-2xl'>React Developer</h1>
                <div className='flex flex-row flex-wrap gap-8'>
                  {/* <ul className='list-disc marker:text-[#FF9B00]'> */}
                    {data.react.map((reactSkills) => (
                      // <div key={reactSkills.id}>
                        <img src={reactSkills.image} alt="" className='rounded-full w-[15%] gap-8' />
                      // </div>
                    ))}
                  {/* </ul> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-[#E1E2E2]/40 flex flex-col gap-8 px-36 py-36 items-center'>
          <h1 className='font-bold text-3xl'>Check out my respective projects</h1>
          <ul className='list-disc marker:text-[#FF9B00] flex flex-col gap-4 px-4 py-4'>
            <li className='text-xl hover:font-bold hover:text-[#FF9B00] hover:transition hover:transition-all hover:duration-500 hover:ease-in-out'>
              <a className=' gap-4 flex flex-row items-center' href='/data-science-portfolio' target='_blank' rel='noreferrer'>
                Data Science Projects
                <BsBoxArrowUpRight className='text-sm'/>
              </a>
            </li>
            <li className='text-xl hover:font-bold hover:text-[#FF9B00] hover:transition hover:transition-all hover:duration-500 hover:ease-in-out'>
              <a className=' gap-4 flex flex-row items-center' href='/react-developer-portfolio' target='_blank' rel='noreferrer'>
                React Developer Projects
                <BsBoxArrowUpRight className='text-sm'/>
              </a>
            </li>
          </ul>
        </div>
        {/* Get in touch */}
        <div id='contact' className='flex flex-col items-start gap-8 py-36 px-48'>
          <h1 className='text-[#FF9B00] uppercase text-2xl font-bold'>Get in touch</h1>
          <div className=' flex flex-row gap-8 items-center'>
            <h1 className='font-bold text-3xl'>Don't be shy! Let's talk more</h1>
            <BsEmojiWink className='sm:text-7xl md:text-6xl lg:text-5xl text-[#FF9B00]'/>
          </div>
          <div className='flex sm:flex-col md:flex-col lg:flex-row justify-evenly items-center gap-12'>
            <div className='flex flex-row items-center gap-8'>
              <button className='px-6 py-6 bg-white shadow-xl shadow-slate-400 rounded-full' disabled="disabled">
                <FaMapMarkedAlt className='text-[#FF9B00] font-bold text-5xl'/>
              </button>
              <div>
                <h1 className='font-bold text-2xl'>Location</h1>
                <h1 className='text-black/30 text-xl font-light'>United Kingdom || Kenya</h1>
              </div>
            </div>
            <div className='flex flex-row items-center gap-8'>
              <button className='px-6 py-6 bg-white shadow-xl shadow-slate-400 rounded-full' disabled="disabled">
                <TfiEmail className='text-[#FF9B00] font-bold text-5xl'/>
              </button>
              <div>
                <h1 className='font-bold text-2xl'>Mail</h1>
                <a href="mailto:kariuki.mercie@gmail.com" className='text-black/30 text-xl font-light'>kariuki.mercie@gmail.com</a> 
              </div>
            </div>
          </div>
        </div>
        <LandingFooter/>
    </div>
  )
}

export default Landing