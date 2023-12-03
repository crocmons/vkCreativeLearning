"use client"

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Parallax = () => {

  const ref = useRef()
  const {scrollYProgress} = useScroll({
    target:ref,
    offset:["start start", "end start"]
  })

  const yBg = useTransform(scrollYProgress, [0,1], ["0%", "500%"])
  const yText = useTransform(scrollYProgress, [0,1], ["0%", "100%"])

  return (
    <div className='parallax'
    ref={ref} 
    style={{background:"linear-gradient(180deg, #ac04b8, #0a1fa6)"}}>
        <motion.h1 style={{y: yText}}>Why Choose Us?</motion.h1>
       
        <motion.div className='stars' style={{y:yBg}}></motion.div>
    </div>
  )
}

export default Parallax