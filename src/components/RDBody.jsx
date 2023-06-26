import React, { useEffect, useState } from 'react'

import data from '../../db.json'
import { FaGithub } from 'react-icons/fa'
import { BsBoxArrowUpRight } from 'react-icons/bs'

const RDBody = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
      fetch('./react-projects')
      .then((response) => response.json())
      .then(setProjects)
    }, [])
  return (
    <div>
        <div className='flex flex-col items-center'>
            <div className='h-[2px] bg-[#222CFD] w-3/4 mt-16 mb-16'></div>
            <div className='grid grid-cols-3 px-6 py-6'>
               {data.reactProjects.map((project) => (
                <div className='items-center relative rounded-lg'>
                    <div className='px-4 py-4 flex flex-col items-center'>
                        <div>
                            <img src={project.image} alt="" />
                            <div className='flex  flex-col  gap-5 items-center top-[40%] absolute bg-black/40 h-[80px] w-[377px]'>
                                <h1 className='text-white font-bold'>{project.title}</h1>
                                <div className='flex flex-row text-white justify-evenly gap-4 text-3xl'>
                                    <a href={project.code} target='_blank' rel='noreferrer'>
                                        <FaGithub/>
                                    </a>
                                    <a href={project.website} target='_blank' rel='noreferrer'>
                                        <BsBoxArrowUpRight/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               ))}
            </div>
        </div>       
    </div>
  )
}

export default RDBody