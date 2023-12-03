"use client"
import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'
import { SectionWrapper} from "@/lib/hoc"
import { blogs} from "@/constants/index"
import { fadeIn, textVariant } from "@/lib/utils/motion"
import Image from 'next/image'


const BlogCard = ({index, name, description, image, link})=>{
     return(
        <motion.div
         variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        >
            <Tilt
            options={{
               max:45,
               scale:1,
               speed:450
            }}
            className="bg-transparent border border-fuchsia-500 p-5 rounded-2xl sm:w-[360px] w-full"
            >
              <div className='relative w-full h-[230px]'>
                 <Image 
                  src={image}
                  alt={name}
                  className='object-cover rounded-md'
                  width={650}
                  height={650}
                 />

                 <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                   <div
                   onClick={()=>window.open(link, "_blank")}
                   className='black_gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                   >
                    <Image 
                    src=""
                    alt=''
                    height={100}
                    width={100}
                    className='object-contain'
                    />
                   </div>
                 </div>
              </div>

              <div className='mt-2'>
                 <h3 className='text-blue-700 font-bold text-[24px]'>{name}</h3>
                 <p className=' text-gray-600 text-[14px]'>{description}</p>
              </div>

              <div className='mt-4 flex flex-wrap gap-2'>
                  <p className="text-[14px] text-fuchsia-500 font-bold">
                      #E-Learning
                  </p>
              </div>
            </Tilt>

        </motion.div>
     )
}

const Blogs = () => {
  return (
    <>
      <motion.div variants={textVariant()} className='text-center justify-center items-center mx-auto flex'>
        <p className="text-blue-600 text-3xl font-bold">
            Latest 
        </p>
        <h2 className="p-2 text-3xl text-fuchsia-500 font-bold">Blogs</h2>
      </motion.div>

      <div className='w-full flex justify-center text-center items-center mx-auto'>
         <motion.p
         variants={fadeIn("", "", 0.1, 1)}
         className='mt-4 text-slate-500 text-[17px] max-w-3xl leading-[30px]'
         >
            Check out our blog sections that contains a plethora of articles on Custom elearning, AR/VR elearning, Rapid Authoring, Corporate elearning solutions and many more. Articles in this section contains statistics, actionable strategies, latest pedagogical and technical methodologies and multitude of information on elearning industry.

         </motion.p>
      </div>

      <div className='mt-12 flex flex-wrap gap-7 justify-center items-center mx-auto'>
          {blogs.map((blog, idx)=>{
            return(
              <BlogCard 
              key={`blog-${idx}`}  
              index={idx} 
              {...blog}
              />
          )})}
      </div>
    </>
  )
}

export default SectionWrapper(Blogs, "")