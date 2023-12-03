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
    <div className="relative overflow-hidden">
      {/* Particle animation */}
      <div className="absolute right-0 top-0 h-full w-[80%] z-[3]">
        <Particle />
      </div>

      <div className="container mx-auto flex justify-between items-center gap-8 py-16 px-4 md:px-8">
        {/* Text content */}
        <FadeIn>
        <div className="max-w-md mx-auto md:mx-2 md:items-center py-2">
          <h1 className="text-3xl md:text-6xl font-bold mb-4 py-2">
            
              <Typewriter
                options={{
                  strings: headingStrings,
                  autoStart: true,
                  loop: true,
                  delay: 75,
                }}
              />
            
          </h1>
          <div className="text-lg text-gray-600 mb-8">
            
              
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
        <div className="flex md:flex-row flex-col justify-end items-end">
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
