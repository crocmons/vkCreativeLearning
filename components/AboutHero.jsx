'use client'
import Image from 'next/image'
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

export default function AboutHero() {

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animate);
  }, [])

  const animate = () => {
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  }

  return (
    <main className='relative flex h-[50vh] md:h-[100vh] mb-5 overflow-hidden'>
       <Image 
        src="/assets/abouthero.jpg"
        alt="background"
        fill={true}
        className="w-[100%] object-cover"
      />
      <div className="aboutsliderContainer hidden md:flex absolute ">
        <div ref={slider} className="relative whitespace-nowrap">
          <p ref={firstText} className='relative m-0 text-white text-[100px] md:text-[230px] font-bold pr-[50px]'>VK Creative Learning -</p>
          <p ref={secondText} className='absolute left-[100%] top-0 m-0 text-white text-[100px] md:text-[230px] font-bold pr-[50px]'>VK Creative Learning -</p>
        </div>
      </div>
    </main>
  )
}