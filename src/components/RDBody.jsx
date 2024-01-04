import React, { useEffect, useState } from 'react'

import data from '../../db.json'
import { FaGithub } from 'react-icons/fa'
import { BsBoxArrowUpRight, BsEyeFill } from 'react-icons/bs'
import LandingFooter from './LandingFooter'

const RDBody = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
      fetch('./react-projects')
      .then((response) => response.json())
      .then(setProjects)
    }, [])
  return (
    <div>
        <div className='flex flex-col items-center gap-8'>
            <div className='h-[2px] bg-[#222CFD] w-3/4 '></div>
            <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-6 py-6 gap-8 mb-16'>
               {data.reactProjects.map((project) => (
                <div className='hover:shadow-xl hover:shadow-slate-500 hover:translate-y-2 flex relative items-center rounded-lg'>
                    <div>
                        <img src={project.image} alt="" />
                    </div>
                    <div className='w-full top-[40%] absolute bg-[#222FCD]/40 flex flex-col justify-evenly items-center gap-2'>
                        <h1 className='text-white font-bold text-xl'>{project.title}</h1>
                        <div className='gap-8 flex flex-row justify-evenly sm:text-3xl md:text-3xl lg:text-4xl text-white '>
                            <a href={project.website} target='_blank' rel='noreferrer'>
                                <BsEyeFill className='hover:transition-all hover:duration-500 hover:ease-in-out active:text-white sm:active:text-4xl md:active:text-4xl lg:active:text-5xl hover:cursor-pointer hover:text-[#222FCD]'/>
                            </a>
                            <a href={project.code} target='_blank' rel='noreferrer'>
                                <FaGithub className='hover:transition-all hover:duration-500 hover:ease-in-out active:text-white sm:active:text-4xl md:active:text-4xl lg:active:text-5xl hover:cursor-pointer hover:text-[#222FCD]'/>
                            </a>
                        </div>
                    </div>
                </div>
               ))}
            </div>
        </div> 
        <LandingFooter/>      
    </div>
  )
}

export default RDBody