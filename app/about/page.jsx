"use client"
import { skills } from "@/constants";
import Image from "next/image";
import { useState } from "react";
import CountUp from "react-countup";
import Scroll from "react-scroll-trigger";
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { motion } from 'framer-motion';
import { slideUpAbout } from "@/lib/utils/animation";
import Description from "@/components/Description";
import Projects from "@/components/Projects";
import SliderImage from "@/components/SliderImage";

import AboutInfo from "@/components/AboutInfo";
import AboutHero from "@/components/AboutHero";



const page = () => {
  const [counter, setCounter]  = useState(false)
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animate);
  }, [])

  const animate = () => {
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  }

  


  return (
    <>
    {/* <motion.main variants={slideUpAbout} initial="initial" animate="enter" className="mt-0 relative h-[100vh] overflow-hidden flex">
      <Image 
        src="/assets/abouthero.jpg"
        alt="background"
        fill={true}
        className=" object-cover"
      />
      <div className="sliderContainer">
        <div ref={slider} className="relative whitespace-nowrap">
          <p ref={firstText} className="relative m-0 text-slate-100 text-[230px] font-bold pr-[50px]">VK Creative Learning -</p>
          <p ref={secondText} className=" absolute left-[100%] top-0 m-0 text-slate-100 text-[230px] font-bold pr-[50px]">VK Creative Learning -</p>
        </div>
      </div>
      <div data-scroll data-scroll-speed={0.1} className="absolute top-[35%] left-[65%] text-white text-[24px] font-[300]">
        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg" className=" transform scale-[2] mb-[100px]">
          <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
        </svg>
        
      </div> 
     </motion.main> */}
     <AboutHero />

    <AboutInfo />

    {/* <Works /> */}
    <Description />
    <Projects />
    <SliderImage />

      <Scroll onEnter={()=> setCounter(true)} onExit={()=>setCounter(false)}>

      <div className="section-work countContainer grid grid-cols-3 mx-1 md:mx-auto md:grid-cols-6 mt-32 py-4 px-2 md:py-3 rounded-xl">
        <div>
          <h2 className="counter font-bold">
           {counter && <CountUp  start={0} end={10} duration={2} delay={0}/>}
            +

          </h2>
          <p className="text-xs">YEARS OF INDUSTRY EXPERIENCE</p>
        </div>
        <div>
          <h2  className="counter font-bold">
           {counter && <CountUp  start={0} end={20} duration={2} delay={0}/>}
            +</h2>
          <p className="text-xs">TECHNOLOGIES</p>
        </div>
        <div>
          <h2 className="counter font-bold">{counter && <CountUp  start={0} end={30} duration={2} delay={0}/>}+</h2>
          <p className="text-xs">IN – HOUSE RESOURCES</p>
        </div>
        <div>
          <h2 className="counter font-bold">{counter && <CountUp  start={0} end={50} duration={2} delay={0}/>}+</h2>
          <p className="text-xs">CLIENTS WORKED</p>
        </div>
        <div>
          <h2 className="counter font-bold">{counter && <CountUp  start={0} end={200} duration={2} delay={0}/>}+</h2>
          <p className="text-xs">HRS OF CONTENT DEVELOPED</p>
        </div>
        <div>
          <h2 className="counter font-bold">{counter && <CountUp  start={0} end={5} duration={2} delay={0}/>}+</h2>
          <p className="text-xs">DEVELOPMENT CENTERS</p>
        </div>
      </div>
      </Scroll>
      <div className='flex flex-col items-center text-center justify-center mx-auto max-w-5xl sm:p-16 pb-12 !pt-[126px] px-8 min-h-[calc(100vh-80px)]'>
      <h1 className='text-4xl md:text-5xl font-bold sm:leading-snug font-poppins'>
       Advanced
        <span className='bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent font-bold drop-shadow'>
          {" "}
          Tools
        </span>
      </h1>

      <div className='mt-5 py-2 flex flex-col gap-3 text-slate-700 tracking-wide'>
        <p>
        We employ the latest tools & technologies from the market to create an e-learning solution which is best suited for any organization. We constantly upgrade ourselves to deliver e-learning solutions across domains. The tools employed include are below:
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='font-semibold sm:text-3xl text-xl relative font-poppins'>Our Skills</h3>

        <div className='mt-16 flex flex-wrap justify-center items-center md:justify-start md:items-start gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl mx-auto flex justify-center items-center'>
                <Image
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                  width={100}
                  height={100}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

    
    </div>
    </>
  );
};

export default page;