"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { useRef } from 'react'
import gsap from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger"
import { useLayoutEffect} from 'react'


const ServiceProject = () => {
    const [ selectedProject, setSelectedProject] = useState(0)
    
    const imgContainerRef = useRef(null)

    const project = [
        {
            title: "K-12 Elearning Solutions",
            src:"/assets/p1.png"
        },
        {
            title: "Custom Elearning Solution",
            src:"/assets/p2.jpg"
        },
        {
            title: "VR / AR Elearning Solutions",
            src:"/assets/ar3.png"
        },
        {
            title: "Rapid Authoring Solutions",
            src:"/assets/ar4.png"
        },
        {
            title: "Corporate Elearning Solution",
            src:"/assets/elearn.png"
        },
        {
            title: "Content Conversion & Localization",
            src:"/assets/ar3.png"
        },
        {
            title: "Flash to HTML Conversion",
            src:"/assets/ar2.png"
        },
    ]


    useLayoutEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        ScrollTrigger.create({
                trigger: imgContainerRef.current,
                start: "-=50px",
                end: "+=350px",
                pin:true
            
        })

    },[])

    

  return (
    <div className='flex flex-col mt-[25vh] text-black p-[10%]'>
      <div className="flex h-[700px] gap-[5%] w-[100%] justify-between">
        <div ref={imgContainerRef} className="relative h-[100%] w-[40%]">
            <Image 
            src={`${project[selectedProject].src}`}
            fill={true}
            alt="serviceImg"
            className="object-cover"
            />

        </div>

        <div className="w-[20%] flex text-3xl">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, ipsa ipsum aspernatur nostrum consequatur blanditiis!</p>
        </div>
        <div className="w-[10%] flex text-medium items-end">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae sunt ex dolorum nemo consequatur aut eveniet corrupti necessitatibus ipsum nesciunt vitae, quia eum.</p>
        </div>
      </div>

      <div className='mt-[200px] flex flex-col'>
        {
            project.map((pj, index)=>{
                return (
                <div onMouseOver={()=>{
                    setSelectedProject(index)
                }} className='projectEl flex justify-end border-b border-transparent border-spacing-3 text-blue-800 text-3xl transform uppercase font-semibold' key={index}>
                  <p className='mx-0 mt-[40px] mb-[20px] cursor-pointer'>{pj.title}</p>
                 </div>
            )})
        }
      </div>
    </div>
  )
}

export default ServiceProject