import React, {useState, useRef}  from 'react'
import footerSheet from '../../styles/common/footer.module.scss'


export default function Footer() {
  return (
    <div className={footerSheet.container}>
        <a href='/' className={footerSheet.Url}>facebook</a>
        <a href='/' className={footerSheet.Url}>instagram</a>
    </div>
  )
}