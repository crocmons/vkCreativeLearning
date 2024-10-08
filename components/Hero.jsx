"use client"
import React, { useEffect, useState } from 'react';
import Particle from './Particle';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import FadeIn from './FadeIn';

const Hero = () => {
  const [headingStrings, setHeadingStrings] = useState([
    'E-Learning Company in India',
    'AR/VR E-Learning in India',
    'E-Learning Development Company in Delhi and Noida',
  ]);

  const [paragraphStrings, setParagraphStrings] = useState([
    'Empowering Learning Technology Solutions',
    'Creating Virtual Experiences for the Real World',
    'Our solutions encompass a host of different solutions to cater to the requirements of each customer.',
  ]);

  // Set initial strings for server rendering
  useEffect(() => {
    setHeadingStrings([
      'E-Learning Company in India',
      'AR/VR E-Learning in India',
      'E-Learning Development Company in Delhi and Noida',
    ]);

    setParagraphStrings([
      'Empowering Learning Technology Solutions',
      'Creating Virtual Experiences for the Real World',
      'Our solutions encompass a host of different solutions to cater to the requirements of each customer.',
    ]);
  }, []);

  // Update strings dynamically on the client side
  useEffect(() => {
    const interval = setInterval(() => {
      setHeadingStrings((prevStrings) => [...prevStrings.reverse()]);
      setParagraphStrings((prevStrings) => [...prevStrings.reverse()]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative  overflow-hidden">
      {/* Particle animation */}
      <div className="absolute right-0 top-0 h-full w-[100%] z-10">
        <Particle />
      </div>

      <div className="container mx-auto flex md:flex-row flex-col justify-between items-center gap-16 md:gap-8 py-16 px-4 md:px-8">

        {/* Text content */}
        <FadeIn>
        <div className="max-w-md mx-auto  text-center md:text-start items-center md:items-start py-2">
          <h1 className="text-4xl md:text-6xl tracking-wider font-bold mb-4 mx-auto py-2 ">
            
              <Typewriter
                options={{
                  strings: headingStrings,
                  autoStart: true,
                  loop: true,
                  delay: 75,
                }}
              />
            
          </h1>
          <div className="text-xl text-slate-600 mb-8">
            
              
              <Typewriter
                options={{
                  strings: paragraphStrings,
                  autoStart: true,
                  loop: true,
                  delay: 75,
                }}
              />
           
          </div>
        </div>
        </FadeIn>

        {/* Image */}
        <FadeIn>
        <div className="flex my-5 md:my-0 mx-auto justify-center items-center md:justify-end md:items-end">
        <div className="absolute right-0 top-0 h-full w-[100%] z-[3] md:hidden">
        <Particle />
      </div>
          <Image
            src="/assets/heroimg.png"
            className="object-cover"
            width={560}
            height={560}
            alt="hero-img"
          />

        </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Hero;
