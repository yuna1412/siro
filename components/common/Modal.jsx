import React, {useState,useEffect, useRef, forwardRef, useImperativeHandle}  from 'react'
import { gsap }  from 'gsap';
import modalSheet from '../../styles/common/modal.module.scss'


const _Modal = ({}, ref ) => {
  const text1 = useRef();
  const text2 = useRef();
  const text3 = useRef();
  const text4 = useRef();
  const text5 = useRef();

  let timeline
  // const refs = [text1, text2, text3, text4, text5]

  
  useImperativeHandle(ref, () => ({
    start () {
      const modal = document.getElementById("modal");
      modal.style.display="block"
      // const elements = document.getElementsByClassName(modalSheet.text) //要素の配列が返却
      // for(let i = 0 ; i < elements.length; i++){
      // }
      gsap.set(text1.current, {
        y:200,
        opacity: 0,
      })
      gsap.set(text2.current, {
        y:200,
        opacity: 0,
      })
      gsap.set(text3.current, {
        y:200,
        opacity: 0,
      })
      gsap.set(text4.current, {
        y:200,
        opacity: 0,
      })
      gsap.set(text5.current, {
        y:200,
        opacity: 0,
      })

      if(this.timeline) this.timeline.kill()
      this.timeline = gsap.timeline()
      this.timeline.to(text1.current, {
        opacity: 1,
        y: 0,
        duration: 0.2,
      }, 0)
      this.timeline.to(text2.current, {
        opacity: 1,
        duration: 0.2,
        delay: 0.3,
        y: 0,
      }, 0)
      this.timeline.to(text3.current, {
        opacity: 1,
        duration: 0.2,
        delay: 0.6,
        y: 0,
      }, 0)
      this.timeline.to(text4.current, {
        opacity: 1,
        duration: 0.2,
        delay: 0.9,
        y: 0,
      }, 0)
      this.timeline.to(text5.current, {
        opacity: 1,
        duration: 0.2,
        delay: 1.2,
        y: 0,
      }, 0)
    },
    end () {
      gsap.set(text1.current, {
        y:0,
      })
      gsap.set(text2.current, {
        y:0,
      })
      gsap.set(text3.current, {
        y:0,
      })
      gsap.set(text4.current, {
        y:0,
      })
      gsap.set(text5.current, {
        y:0,
      })

      if(this.timeline) this.timeline.kill()
      this.timeline = gsap.timeline()
      this.timeline.to(text1.current, {
        opacity: 0,
        duration: 0.2,
        delay: 1.2,
        y: 200,
        onComplete: ()=>{
          setTimeout(()=>{
            modal.style.display="none"
          }, 200)
        }
      },0)
      this.timeline.to(text2.current, {
        opacity: 0,
        duration: 0.2,
        delay: 0.9,
        y: 200,
      },0)
      this.timeline.to(text3.current, {
        opacity: 0,
        duration: 0.2,
        delay: 0.6,
        y: 200,
      },0)
      this.timeline.to(text4.current, {
        opacity: 0,
        duration: 0.2,
        delay: 0.3,
        y: 200,
      },0)
      this.timeline.to(text5.current, {
        opacity: 0,
        duration: 0.2,
        y: 200,
      },0)
    }
  }))


  return (
    <div className={modalSheet.modal} id="modal">
        <div className={modalSheet.container}>
          <ul className={modalSheet.items}>
            <li className={modalSheet.item}><a href='/' className={modalSheet.text} ref={text1}>projects</a></li>
            <li className={modalSheet.item}><a href='/' className={modalSheet.text} ref={text2}>about</a></li>
            <li className={modalSheet.item}><a href='/' className={modalSheet.text} ref={text3}>note</a></li>
          </ul>
          <ul className={modalSheet.items}>
            <li className={modalSheet.item}><a href='/' className={modalSheet.sns} ref={text4}>facebook</a></li>
            <li className={modalSheet.item}><a href='/' className={modalSheet.sns} ref={text5}>instagram</a></li>
          </ul>
        </div>
    </div>
  )
}
const Modal = forwardRef(_Modal);
export default Modal