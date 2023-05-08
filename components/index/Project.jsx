import React, {useState, useRef}  from 'react'
import projectSheet from '../../styles/index/project.module.scss'


export default function Project({img, text}) {
  return (
        <li className={projectSheet.item}>
          <a href='/' className={projectSheet.Url}>
            <img className={projectSheet.img} src={img}/>
          </a>
          <div className={projectSheet.textBox}>
            <p className={projectSheet.text}>{text}</p>
          </div>
        </li>
  )
}