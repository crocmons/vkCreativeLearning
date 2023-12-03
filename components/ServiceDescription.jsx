"use client"
import React from 'react'
import gsap from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger"
import { useLayoutEffect, useRef } from 'react'

const ServiceDescription = () => {
    const phrases = [
        "We offer complete 360° e-learning solutions.",
    ]

  return (
    <div className='relative z-[1] text-5xl text-white font-bold transform uppercase mt-[30vw] ml-[13vw]'>
      {
        phrases.map((phrase,index)=>(
            <AnimatedText key={index}>
                {phrase}
            </AnimatedText>
        ))
      }
    </div>
  )
}

const AnimatedText = ({children})=>{
    const textRef = useRef(null);

    useLayoutEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        gsap.from(textRef.current,{
            scrollTrigger:{
                trigger:textRef.current,
                start:"0px bottom",
                end:"bottom+=400px bottom",
                scrub:true
            },
            left:"-200px",
            opacity:0
        })
    },[])

    return(
        <p ref={textRef} className='m-0 relative'>
          {children}
        </p>
    )
}

export default ServiceDescription