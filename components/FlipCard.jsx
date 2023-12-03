"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ar8 from "@/public/assets/ar8.png";
import ar10 from "@/public/assets/ar10.png";
import Image from "next/image";
import ScrollCount from "./ScrollCount";

const FlipCard = () => {
  const [isFliped, setIsFlipped] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  function handleFlip() {
    if (!isAnimated) {
      setIsFlipped(!isFliped);
      setIsAnimated(true);
    }
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center text-center">
        <h2 className=" font-semibold text-blue-500 my-2">OUR SUCCESS</h2>
        <p className="font-bold mb-3 py-1 text-fuchsia-500 tracking-wider text-3xl">We have a proven track record of success.</p>
      </div>
      <div className="flex mt-10 items-center justify-center cursor-pointer">
      <div
        className="flip-card w-[600px] h-[360px] rounded-md"
        onClick={handleFlip}
      >
        <motion.div
          className="flip-card-inner w-[100%] h-[100%] gap-4"
          initial={false}
          animate={{ rotateY: isFliped ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimated(false)}
        >
          <div className="flip-card-front bg-cover">
            <Image src={ar8} alt="ar8" width={380} height={380} />
          </div>

          <div className="flip-card-back bg-cover">
            <Image src={ar10} alt="ar10" width={380} height={380} />
          </div>
        </motion.div>
      </div>
      <div>
        <ScrollCount />
      </div>
    </div>
    </>
  );
};

export default FlipCard;
