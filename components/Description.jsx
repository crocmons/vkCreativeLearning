"use client"
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUpDescription, opacityDescription } from '@/lib/utils/animation';
import Rounded from './Rounded';


function Description() {

    const phrase = "Serving for a vast number of years, we have championed the art of creating pedagogical, effectual, and cost effective e-learning solutions."

    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div ref={description} className="px-[200px] mt-2 flex justify-center">
            <div className="max-w-[1400px] flex gap-10 relative">
                <p className="stylesp">
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span key={index} className="mx-auto text-center relative overflow-hidden inline-flex text-sm text-gray-600"><motion.span variants={slideUpDescription}  custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
                </p>
                <motion.p variants={opacityDescription} animate={isInView ? "open" : "closed"}>The combination of my passion for design, code & interaction positions me in a unique place in the web design world.</motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <Rounded className="roundedbtnAbout">
                        <p className='roundedpAbout'>About me</p>
                    </Rounded>
                </div>
            </div>
        </div>
    )
}

export default Description;