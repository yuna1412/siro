import Head from 'next/head'
import React, {useState,useEffect, useRef}  from 'react'
import { gsap }  from 'gsap';
import Modal from '../components/common/Modal'
import Header from '../components/common/Header'
import Nav from '../components/common/Nav'
import Projects from '../components/index/Projects'
import Footer from '../components/common/Footer'


export default function index() {
  const [show, setShow]= useState(false)
  const fadeRef = useRef();
  const Open = () => {
    // const modal = document.getElementById("modal");
    if(show==false){
      setShow(true)
      // modal.style.visibility="visible"
      // modal.style.transitionDuration="0s"
      fadeRef.current.start()
    }else{
      setShow(false)
      // modal.style.visibility="hidden"
      // modal.style.transitionDuration="2s"
      fadeRef.current.end()
    }
  }
  return (
    <>
    <Head>
      <meta charset='UTF-8'/>
      <meta name="description" content="Generated by create next app" />
    </Head>
    
    <Modal ref={fadeRef} />
    <Header Open={Open} show={show}/>
    <Nav/>
    <Projects/>
    <Footer/>
    </>
  )
}
