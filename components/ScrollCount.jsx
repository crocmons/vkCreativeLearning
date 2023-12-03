"use client"
import React, { useState } from "react";
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from "react-countup";

const ScrollCount = () => {
  
    const [counter, setCounter] = useState(false); // Initialize to false


  return (
    <ScrollTrigger
          onEnter={() => setCounter(true)} // Set counter to true when entering the trigger
          onExit={() => setCounter(false)} // Set counter to false when exiting the trigger
        >
          <div className="grid grid-cols-2 justify-evenly gap-6 mx-auto">
            <div className="bg-cover border-[1px] text-black rounded-lg p-4">

            <h1 className="font-bold text-5xl mx-3 justify-end items-end top-10 py-2 my-3">
              {counter && <CountUp start={0} end={60} duration={2} delay={0} />}+
              <p className="text-xl text-gray-400 flex justify-center items-center py-4">Finished Projects</p>
            </h1>
            </div>

            <div className="bg-cover border-[1px] text-black rounded-lg p-4">
            <h1 className="font-bold text-4xl mx-3 justify-end items-end top-10 py-2 my-3">
              {counter && <CountUp start={0} end={100} duration={2} delay={0} />}+
              <p className="text-xl text-gray-400 flex justify-center items-center py-4">Happy Customers</p>
            </h1>
            </div>

            <div className="bg-cover border-[1px] text-black rounded-lg p-4">
            <h1 className="font-bold text-4xl mx-3 justify-end items-end top-10 py-2 my-3">
              {counter && <CountUp start={0} end={200} duration={2} delay={0} />}+
              <p className="text-xl text-gray-400 flex justify-center items-center py-4">Hrs Content</p>
            </h1>
           </div>
            <div className="bg-cover border-[1px] text-black rounded-lg p-4">
            <h1 className="font-bold text-4xl mx-3 justify-end items-end top-10 py-2 my-3">
              {counter && <CountUp start={0} end={5} duration={2} delay={0} />}+
              <p className="text-xl text-gray-400 flex justify-center items-center py-4">Awards</p>
            </h1>
           </div>
            

            </div>
           
        </ScrollTrigger>
  )
}

export default ScrollCount