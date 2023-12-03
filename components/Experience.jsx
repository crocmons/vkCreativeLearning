import Image from 'next/image'
import React from 'react'
import FadeIn from './FadeIn'

const Experience = () => {
  return (
    <>
        <FadeIn>
      <div className='flex flex-col justify-center text-center items-center mt-12 mb-0'>
      <h1 className='font-bold text-4xl text-center text-blue-500'>Our <span className=' text-fuchsia-500'>Experience</span></h1>
            <p className='text-md text-gray-500 py-4 tracking-wider text-center'>Our design approach is very organized to ensure satisfaction for our esteemed clients.</p>
      </div>
    <div className='timeline'>
       <div className='experience-container left-container'>
        <Image 
        src="/assets/rapidlearn2.png"
        alt='exp1'
        width={40}
        height={40}
        className='absolute rounded-full right-[-20px] top-32 z-10 left-[10px] sm:left-0'
        />
           <div className='text-box'>
                <h2 className='font-bold text-blue-700 text-xl py-2'>Hybrid Learning</h2>
                <p className='text-sm text-gray-600 tracking-wider'>With an extensive experience in software development simulation graphic designing, and instructional designing, we create visually interactive and engaging learning solution for modern workforce around the globe.</p>
                <span className='left-container-arrow'></span>
           </div>
       </div>
       <div className='experience-container right-container'>
       <Image 
        src="/assets/rapidlearn2.png"
        alt='exp1'
        width={40}
        height={40}
        className='absolute rounded-full right-[-20px] top-32 z-10 left-[10px] sm:left-[-20px]'
        />
           <div className='text-box'>
                <h2 className='font-bold text-blue-700 text-xl py-2'>Instruction Designing</h2>
                <p className='text-sm text-gray-600 tracking-wider'>Our instructional designing pivots around knowledge retention by incorporating appealing visuals story lines, game-based activities; assessment; performance aids, and other methodologies to ensure participation during the learning course.</p>
                <span className='right-container-arrow'></span>
           </div>
       </div>
       <div className='experience-container left-container'>
       <Image 
        src="/assets/rapidlearn2.png"
        alt='exp1'
        width={40}
        height={40}
        className='absolute rounded-full right-[-20px] top-32 z-10 left-[10px] sm:left-0'
        />
           <div className='text-box'>
                <h2 className='font-bold text-blue-700 text-xl py-2'>Content Conversion</h2>
                <p className='text-sm text-gray-600 tracking-wider'>We as a eLearning company in India understand our client's requirements in detail, and sit with Developers and SMEs to convert old text based content to a new e-learning solution or translate your e-learning content into an interactive learning solution familiar to the native learner.</p>
                <span className='left-container-arrow'></span>
           </div>
       </div>
    </div>
    </FadeIn>
    </>
  )
}

export default Experience