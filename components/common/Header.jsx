import React, {useState, useRef}  from 'react'
import headerSheet from '../../styles/common/header.module.scss'
import Modal from './Modal'


export default function Header({Open, show}) {
  return (
    <div className={headerSheet.container}>
        <a href='/' className={headerSheet.logo}>siro</a>
        <ul className={headerSheet.textMenu}>
            <li className={headerSheet.textItem}>
                <a href='/' className={headerSheet.text}>projects</a>
            </li>
            <li className={headerSheet.textItem}>
                <a href='/' className={headerSheet.text}>about</a>
            </li>
            <li className={headerSheet.textItem}>
                <a href='/' className={headerSheet.text}>note</a>
            </li>
        </ul>
        <div className={headerSheet.burgerMenu}>
            <div className={headerSheet.burgerItem}>
                <a href='#' className={`${headerSheet.burger} ${show && headerSheet.move}`} onClick={Open}>
                <span></span>
                <span></span>
                <span></span>
                </a>
            </div>
        </div>
    </div>
  )
}