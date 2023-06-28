import React, { useEffect, useState } from 'react'

import data from '../../db.json'
import { BsEyeFill } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import LandingFooter from './LandingFooter'

const DSBody = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('./datascienceProjects')
    .then((response) => response.json())
    .then(setProjects)
  }, [])
  
  return (
  <div>
      <div className='flex flex-col items-center'>
          <div className='h-[1px] bg-[#FF9B00] w-3/4 mt-6'></div>
          <ul className='px-12  py-12 gap-8 flex flex-row flex-wrap justify-evenly  items-center list-disc marker:text-[#FF9B00]'>
              <li>Machine learning algorithms (retail location prediction, churn analysis, analysis of clicks on digital ads and others)</li>
              <li>Deep learning algorithms (image classifiers)</li>
              <li>Natural language processing applications (language models, sentiment analysis)</li>
              <li>Time series analysis</li>
          </ul>
      </div>
      <div className='gap-8 items-center justify-between px-12 py-6 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2'>
        {data.datascienceProjects.map((project) => (
          <div className='relative hover:shadow-xl hover:shadow-slate-500 hover:translate-y-2 '>
            <div className='items-center'>
              <img src={project.image} alt="" className='items-center'/>
            </div>
            <div className='w-full top-[40%] absolute bg-black/40 flex flex-col justify-evenly items-center '>
              <h1 className='text-white font-bold '>{project.title}</h1>
              <div className='gap-8 flex flex-row justify-evenly sm:text-2xl md:text-2xl lg:text-3xl text-white '>
                <a href={project.viz} target='_blank' rel='noreferrer'>
                    <BsEyeFill className='hover:transition-all hover:duration-500 hover:ease-in-out active:text-white sm:active:text-4xl md:active:text-4xl lg:active:text-5xl hover:cursor-pointer hover:text-[#FF9B00]'/>
                </a>
                <a href={project.code} target='_blank' rel='noreferrer'>
                    <FaGithub className='hover:transition-all hover:duration-500 hover:ease-in-out active:text-white sm:active:text-4xl md:active:text-4xl lg:active:text-5xl hover:cursor-pointer hover:text-[#FF9B00]'/>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <LandingFooter/>
  </div>
  )
}

export default DSBody