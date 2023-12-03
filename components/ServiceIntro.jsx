"use client"
import Image from 'next/image'
import React from 'react'
import gsap from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger"
import { useLayoutEffect, useRef } from 'react'

const ServiceIntro = () => {

    const bgImg = useRef(null);
    const IntroImg = useRef(null)

    useLayoutEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)

        const timeline = gsap.timeline({
            scrollTrigger:{
                trigger:document.documentElement,
                start:"top",
                end:"+=500px",
                scrub:true,
                
            }
        })

        timeline
           .from(bgImg.current, {clipPath:"inset(8%)"})
           .to(IntroImg.current, {height:"200px"},0)
    },[])
  return (
    <div className=''>
      <div ref={bgImg} className=" absolute h-[140vh] w-[100%] top-0 filter brightness-[60%]">
        <Image 
        src={'/assets/vrbg.jpg'}
        fill={true}
        alt='bgImg'  
        className=' object-cover' 
        />
      </div>

      <div className="mt-[35vh] flex items-center justify-center">
        <div ref={IntroImg} data-scroll data-scroll-speed="0.3" className="absolute w-[350px] h-[475px] filter brightness-[70%]">
         <Image 
         src={'/assets/vrbg.jpg'}
         fill={true}
         alt='bgImg'
         className=' object-cover object-top'
         />
        </div>
        <h1 data-scroll data-scroll-speed="0.7" className=' z-[3] text-white text-6xl tracking-wider font-bold transform uppercase'>Our Services</h1>
      </div>
    </div>
  )
}

export default ServiceIntro