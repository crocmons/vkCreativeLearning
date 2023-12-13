"use client"

import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';

const slider1 = [
    {
        color: "#e3e5e7",
        src: "k12.png"
    },
    {
        color: "#d6d7dc",
        src: "elearn.png"
    },
    {
        color: "#e3e3e3",
        src: "k12.png"
    },
    {
        color: "#21242b",
        src: "elearn.png"
    }
]

const slider2 = [
    {
        color: "#d4e3ec",
        src: "corporatelearn.jpg"
    },
    {
        color: "#e5e0e1",
        src: "corporatelearn.jpg"
    },
    {
        color: "#d7d4cf",
        src: "corporatelearn.jpg"
    },
    {
        color: "#e1dad6",
        src: "corporatelearn.jpg"
    }
]

export default function SliderImage() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

    return (
        <div ref={container} className="slidingImages">
            <motion.div style={{x: x1}} className="motionslider">
                    {
                        slider1.map( (project, index) => {
                            return <div key={index} className="project" style={{backgroundColor: project.color}} >
                                <div className="imageContainer">
                                    <Image 
                                    alt={"image"}
                                    src={`/assets/${project.src}`}
                                    width={500}
                                    height={500}
                                    />
                                </div>
                            </div>
                        })
                    }
                </motion.div>
                <motion.div style={{x: x2}} className="motionslider">
                    {
                        slider2.map( (project, index) => {
                            return <div key={index} className="project" style={{backgroundColor: project.color}} >
                                <div key={index} className="imageContainer">
                                    <Image 
                                    alt={"image"}
                                    src={`/assets/${project.src}`}
                                    width={500}
                                    height={500}
                                    />
                                </div>
                            </div>
                        })
                    }
                </motion.div>
                <motion.div style={{height}} className="circleContainer">
                    <div className="circle"></div>
                </motion.div>
        </div>
    )
}