import React, {useState, useRef}  from 'react'
import Project from './Project'
import projectsSheet from '../../styles/index/projects.module.scss'
import {ProjectsData} from '../../assets/ProjectsData'

export default function Projects() {
    return (
      <div className={projectsSheet.container}>
        <ul className={projectsSheet.items}>
          {ProjectsData.map((data, i) => {
            return (
              <Project
                img={data.img}
                text={data.text}
                key={i}
              />
            );
          })}
        </ul>
      </div>
  );
}