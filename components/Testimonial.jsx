"use client"
import React from "react";
import { motion } from "framer-motion";

import { styles } from "@/lib/utils/styles";
import { SectionWrapper } from "@/lib/hoc/index";
import { fadeIn, textVariant } from "@/lib/utils/motion";
import { testimonials } from "@/constants";
import Image from "next/image";

const TestimonialCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
    <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-gradient-to-l from-fuchsia-600 to-blue-600 p-10 rounded-3xl flex flex-col md:flex-1 w-full h-auto mx-auto text-center justify-center items-center'
  >
    <p className='text-white font-black text-[48px]'>“</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-white text-[12px]'>
            {designation} of {company}
          </p>
        </div>

        <Image
          src={image}
          alt={`feedback_by-${name}`}
          className='rounded-full object-cover'
          width={50}
          height={60}
        />
      </div>
    </div>
  </motion.div>
);

const Testimonial = () => {
  return (
    <div className={`bg-gradient-to-r from-fuchsia-400 to-blue-400 mt-12 rounded-[20px] text-center justify-center items-center mx-auto`}>
      <div
        className={`bg-gradient-to-r from-fuchsia-400 to-blue-400 rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className="text-blue-700 font-semibold text-center text-2xl py-2">What others say</p>
          <h2 className="text-slate-50 font-semibold text-center text-2xl md:text-5xl py-2">Testimonials</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center items-center mx-auto text-center`}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Testimonial, "");