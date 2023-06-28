import React, { useEffect, useState } from 'react'

import data from '../../db.json'

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
        <div className='gap-8 items-center justify-between px-12 py-6 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
          {data.datascienceProjects.map((project) => (
            <div className='relative items-center'>
              <div className='hover:bg-black/30 w-[400px] h-[300px]'></div>
              <img src={project.image} alt="" className='z-10 absolute top-[10%] items-center'/>
            </div>
          ))}
        </div>
    </div>
  )
}

export default DSBody