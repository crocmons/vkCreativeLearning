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
                start: "-=100px",
                end: "+=300px",
                pin:true
            
        })

    },[])

    

  return (
    <div className='flex flex-col mt-[25vh] text-black md:p-[10%]'>
      <div className="flex md:flex-row flex-col h-[700px] gap-2 md:gap-[5%] w-[100%] justify-between">
        <div className="mt-28 mx-3 py-3 tracking-wider w-[100%] flex text-4xl md:hidden">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, ipsa ipsum aspernatur nostrum consequatur blanditiis!</p>
        </div>
        <div className="py-5 mx-3 tracking-wider w-[100%] flex md:hidden text-medium ">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae sunt ex dolorum nemo consequatur aut eveniet corrupti necessitatibus ipsum nesciunt vitae, quia eum.</p>
        </div>
        <div ref={imgContainerRef} className="relative mt-5 md:mt-0 mx-3 md:mx-0 h-[100%] w-[45%] md:w-[40%]">
            <Image 
            src={`${project[selectedProject].src}`}
            fill={true}
            alt="serviceImg"
            className="w-full h-full rounded object-cover"
            />
          
        </div>

        <div className="hidden w-[20%] md:flex text-4xl">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, ipsa ipsum aspernatur nostrum consequatur blanditiis!</p>
        </div>
        <div className="hidden w-[10%] md:flex text-medium items-end">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae sunt ex dolorum nemo consequatur aut eveniet corrupti necessitatibus ipsum nesciunt vitae, quia eum.</p>
        </div>
      </div>

      <div className='mt-[50px] md:mt-[200px] flex flex-col'>
        {
            project.map((pj, index)=>{
                return (
                <div onMouseOver={()=>{
                    setSelectedProject(index)
                }} className='projectEl flex justify-end border-b border-transparent  border-spacing-2 md:border-spacing-3 text-blue-800 text-md md:text-3xl transform uppercase  font-bold md:font-semibold' key={index}>
                  <p className='tracking-wide mx-0 mt-[40px] mb-[20px] cursor-pointer'>{pj.title}</p>
                 </div>
            )})
        }
      </div>
    </div>
  )
}

export default ServiceProject