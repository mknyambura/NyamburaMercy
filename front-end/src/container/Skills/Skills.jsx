import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ReactTooltip } from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import './Skills.scss';

const Skills = () => {

  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query)
      .then((data) => {
        setExperiences(data);
    });

    client.fetch(skillsQuery)
      .then((data) => {
        setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>
      <div className="skills-container">
        <motion.div className="skills-list">
            {skills?.map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="skills-item flex"
                key={skill.name}
              >
                <div className="flex" style={{ backgroundColor: skill.bgColor }}>
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p className="p-text">{skill.name}</p>
              </motion.div>
            ))}
        </motion.div>
        <motion.div className='skills-experience'>
          {experiences?.works?.map((work) => (
            <>
              <motion.div 
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="skills-experience flex"
                data-tip
                data-for = {work.name}
                key={work.name}
              >
                <h4 className="bold-text">{work.name}</h4>
                <p className="p-text">{work.company}</p>
              </motion.div>
              <ReactTooltip
                id={work.name}
                effect="solid"
                className="skills-tooltip"
                arrowColor="#fff"
              >
                {work.desc}
              </ReactTooltip>
            </>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default Skills