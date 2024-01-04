import {useState, useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Projects.scss'
import data from '../Projects/projects.json'

function Projects() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
      fetch('./allprojects')
        .then((response) => response.json())
        .then(setProjects)
    }, [])
    
  return (
    <div className='page'>
        <div className='w-1/2 pt-[50px]'>
            <Navbar/>
            <div className='pt-[50px]'>
                <div className='flex flex-col gap-8'>
                    <h1 className='font-bold text-4xl'>Projects</h1>
                    <h1 className='text-[20px]'>Programming is like unraveling a puzzle, and sometimes the most efficient way to tackle it is to take a step back and consider the broader view. - Mercy Kariuki</h1>

                </div>
                <div>
                     <div>
                        {data.allprojects.map((project) => (
                            <div key={project.id} className='scale-100 hover:transition-all hover:duration-500 hover:ease-in-out hover:shadow-xl hover:shadow-slate-400 hover:scale-110 m-[20px] p-[20px] gap-4 rounded-xl' >
                                <div className='flex flex-row justify-between gap-8 mb-[10px]'>
                                    <h1 className='font-semibold text-[25px]'>{project.title}</h1>
                                    <h1><a href={project.code} className='hover:transition-all hover:duration-500 text-[#a6a8ab] hover:text-[#333333] hover:text-xl hover:underline'>Code</a></h1>
                                </div>
                                <div className='mb-[10px]'>
                                    <p className='text-[20px]'>{project.description}</p>
                                </div>
                                <ul className='mb-[10px] flex flex-col list-disc marker:text-[#FF9B00] gap-1'>
                                    <li>{project.tool1}</li>
                                    <li>{project.tool2}</li>
                                    {/* <li>{project.tool3}</li> */}
                                    {/* <li>{project.tool4}</li> */}
                                </ul>
                                <hr className='text-[#a6a8ab] bg-[#a6a8ab] h-[2px] mt-[2px]'/>
                            </div>
                        ))}
                     </div>
                </div>
            </div>
            <Footer/>
        </div>
    </div>
  )
}

export default Projects