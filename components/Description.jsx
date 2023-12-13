"use client"
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUpDescription, opacityDescription } from '@/lib/utils/animation';
import Rounded from './Rounded';
import Text from './Text';


function Description() {

    const paragraph = "VK Creative Learning Fastest growing edutech organization."

    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div ref={description} className="px-3 md:px-[200px] mt-[1200px] mx-2 md:mx-auto md:mt-5 flex md:flex-row flex-col justify-center">
            <div className="max-w-[1400px] flex md:flex-row flex-col gap-10 relative">

            <Text paragraphText={paragraph} />
                {/* <p className="stylesp">
                {
                    phrase.map( (word, index) => {
                        return <span key={index} className="mx-auto text-center relative overflow-hidden inline-flex justify-start text-sm text-gray-600"><motion.span variants={slideUpDescription}  custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
                </p> */}
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