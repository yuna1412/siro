import React, {useState, useRef}  from 'react'
import navSheet from '../../styles/common/nav.module.scss'


export default function Nav() {
  return (
    <div className={navSheet.container}>
      <div className={navSheet.item}>
          <a href='/' className={navSheet.text}>
            all projects
          </a>
        </div>
    </div>
  )
}