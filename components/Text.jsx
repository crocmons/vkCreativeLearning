"use client"
import { useScroll, useTransform, motion } from 'framer-motion'
import React, {useRef} from 'react'

const Text = ({paragraphText}) => {
    const container = useRef(null);
    const { scrollYProgress} = useScroll({
        target:container,
        offset:["start 0.9", "start 0.25"]
    })
    
    const words = paragraphText.split(" ")

  return (
    <p
    ref={container}
    className='flex text-[30px] md:text-[60px] tracking-wide md:p-[40px] max-w-[500px] md:max-w-[1280px] font-medium md:font-light text-black mx-auto flex-wrap'
    >
     {
        words.map((word, i)=>{
            const start = i / word.length;
            const end = start + (1 / word.length)
            return <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
            </Word>
        })
     }
    </p>
  )
}

const Word = ({children, progress, range})=>{
   const amount = range[1] - range[0]
   const step = amount / children.length;
   return(
    <span className='relative mr-[12px] mt-[12px]'>
     {
        children.split("").map((char, i)=>{
            const start = range[0] + (i * step)
            const end = range[0] + ((i + 1) * step)
            return <Char key={`c_${i}`} progress={progress} range={[start, end]}>
                {char}
            </Char>
        })
     }
    </span>
   )
} 

const Char =({children, progress, range})=>{
    const opacity = useTransform(progress, range, [0, 1])
    return(
        <span>
            <span className='absolute opacity-[20%]'>
                {children}
            </span>
            <motion.span style={{opacity:opacity}}>
                {children}
            </motion.span>
        </span>
    )
}

export default Text