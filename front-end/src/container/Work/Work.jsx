import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import './Work.scss'

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1})
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query)
      .then((data) => {
        setWorks(data);
        setFilterWork(data);
      });
  }, []);
  
  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{y:100, opacity: 0}]);

    setTimeout(() => {
      setAnimateCard([{y:0, opacity:1}]);

      if(item === 'All'){
        setFilterWork(works)
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  }

  return (
    <>
     <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>
     <div className="work-filter">
     {['UI/UX', 'Web App', 'Full Stack', 'React JS', 'All'].map((item, index) => (
      <div 
        className={`work-filter-item flex p-text ${activeFilter === item ? 'item-active' : ''}`}
        key={index}
        onClick={() => handleWorkFilter(item)}
        >
          {item}
        </div>
     ))}
     </div>

     <motion.div 
      animate={animateCard}
      transition={{duration: 0.5, delayChildren: 0.5}}
      className='work-portfolio'
      >
        {filterWork.map((work, index) => (
          <div className="work-item flex" key={index}>
            <div className="work-image flex">
              <img src={urlFor(work.imgUrl)} alt={work.name} />
              <motion.div
                whileHover={{opacity: [0, 1]}}
                transition={{duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
                className='work-hover flex'
              >
                <a href={work.projectLink} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileInView={{scale: [0, 1]}}
                    whileHover={{ scale: [1, 0.90]}}
                    transition={{duration: 0.25}}
                    className='flex'
                  >
                    <AiFillEye/>
                  </motion.div>
                </a>
                <a href={work.codeLink} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileInView={{scale: [0, 1]}}
                    whileHover={{ scale: [1, 0.90]}}
                    transition={{duration: 0.25}}
                    className='flex'
                  >
                    <AiFillGithub/>
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="work-content flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{marginTop: 10}}>{work.description}</p>

              <div className="work-tag flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
     </motion.div>
    </>
  )
}

export default AppWrap(Work, 'works')