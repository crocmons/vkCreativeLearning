"use client"
import ServiceDescription from '@/components/ServiceDescription'
import ServiceIntro from '@/components/ServiceIntro'
import ServiceProject from '@/components/ServiceProject'
import { projects } from '@/constants/data'
import Lenis from '@studio-freight/lenis'
import ServiceCard from '@/components/ServiceCard'
import React, { useEffect, useRef } from 'react'
import { useScroll } from 'framer-motion'


const page = () => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  useEffect(()=>{
    async ()=>{
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    }
  },[])
  return (
    <>
    <div >

    <ServiceIntro />
    <ServiceDescription />
    <ServiceProject />
    </div>
    <div ref={container} className="relative my-28 md:my-6">
      {
        projects.map( (project, i) => {
          const targetScale = 1 - ( (projects.length - i) * 0.05);
          return <ServiceCard key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
        })
      }
    </div>
    </>
  )
}

export default page