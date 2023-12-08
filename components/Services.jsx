"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineSwipeRight } from "react-icons/md";

const ServicesCard = ({ image, heading, description, link }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-center items-center text-center mx-auto mt-12">
            <Image
                src={image}
                alt={heading}
                className="rounded-[12px] mb-4"
                width={350}
                height={350}
            />
            <h2 className="text-xl font-semibold mb-2">{heading}</h2>
            <p>{description}</p>
            {link && (
                <div className="mt-4">
                    {link}
                </div>
            )}
        </div>
    );
};

const Services = () => {
    const [positionIndex, setPositionIndex] = useState([0, 1, 2, 3, 4, 5, 6, 7]);

    const handleNext = () => {
        setPositionIndex((prevIndex) => {
            const updatedIndexes = prevIndex.map((index) => (index + 1) % 8);
            return updatedIndexes;
        });
    };

    const servicesData = [
        {
            image: '/assets/k12.png',
            heading: 'K-12 eLearning Solution',
            description: 'We provide end-to-end implementation of advanced digital environment needed for establishing next-generation K-12 educational system.',
            link: <Link href="#" className='text-blue-500'>
            See more
            </Link>
        },
       
        {
            image: '/assets/ar1.webp',
            heading: 'AR-VR eLearning Solutions',
            description: 'We offer one of the best in the class AR and VR technology solutions. Being a top E Learning Company in India, our dedicated team makes use of the latest technology.',
            link: <Link href="#" className='text-blue-500'>
            See more
            </Link>
        },
        {
            image: '/assets/elearn.png',
            heading: 'Custom eLearning Solution',
            description: 'We incorporate cutting edge technologies to offer end-to-end tailor made learning solutions and provide best customised e learning content development services.',
            link: <Link href="#" className='text-blue-500'>
            See more
            </Link>
        },
        {
            image: '/assets/rapidlearn.png',
            heading: 'Rapid eLearning Solutions',
            description: 'Get the e-learning courseware transformed or developed swiftly at your timeline and budget with our company VK Creative Learning Rapid e-learning solutions.',
            link: <Link href="#" className='text-blue-500'>
            See more
            </Link>

        },
        {
            image: '/assets/corporate.jpeg',
            heading: 'Corporate eLearning Solution',
            description: 'Our corporate learning solution is contextual, studded with real life examples; engaging; on par with global standards.',
            link: <Link href="#" className='text-blue-500'>
            See more
            </Link>
        },
        {
            image: '/assets/content.png',
            heading: 'Content Conversion and Localization',
            description: 'We as a E learning company in Delhi and Noida use the latest technologies such as SCROM, Flash, HTML, CANVAS, and 3D to develop interactive material.',
            link: <Link href="#" className='text-blue-500'>
            See more
            </Link>
        },
        {
            image: '/assets/fl.webp',
            heading: 'Flash to HTML5 Conversion',
            description: 'HTML5 used for structuring and presenting web pages in various appealing ways. HTML, CSS and JavaScript are parts of HTML5 coding.',
            link: <Link href="#" className='text-blue-500'>
            See more
            </Link>
        },
        {
            image: '/assets/lms.jpg',
            heading: 'Corporate LMS',
            description: 'Learning management systems (LMS) is a digital platform for learning, and training students or corporate professionals.',
            link: <Link href="#" className='text-blue-500'>
            See more
            </Link>
        },
        // Add more services as needed
    ];

    const positions = ['center', 'left1','left2','left3', 'left', 'right', 'right1', 'right2', 'right3'];

    const imageVariants = {
        center: { x: '0%', scale: 1, zIndex: 5 },
        left1: { x: '-70%', scale: 0.7, zIndex: 2 },
        left2: { x: '-50%', scale: 0.7, zIndex: 2 },
        left3: { x: '-30%', scale: 0.7, zIndex: 2 },
        left: { x: '-100%', scale: 0.5, zIndex: 1 },
        right: { x: '100%', scale: 0.5, zIndex: 1 },
        right1: { x: '80%', scale: 0.7, zIndex: 2 },
        right2: { x: '60%', scale: 0.7, zIndex: 2 },
        right3: { x: '30%', scale: 0.7, zIndex: 2 },
    };

    return (
        <div className="my-12 py-2 flex items-center justify-center flex-col h-screen">
            <h1 className='font-bold text-4xl text-center text-blue-500'>Our Key <span className=' text-fuchsia-500'>Services</span></h1>
            <p className='text-md text-gray-500 py-4 tracking-wide text-center'>Looking for the best E-learning development company in Delhi and Noida ? Don't hesitate, view our industry samples and make your best decision</p>
            {servicesData.map((service, i) => (
                <motion.div
                    key={i}
                    className="relative items-center mt-2 w-[100%] md:w-[25%]"
                    initial="center"
                    animate={positions[positionIndex[i]]}
                    variants={imageVariants}
                    transition={{ duration: 0.5 }}
                    style={{  position: 'absolute' }}
                >
                    <ServicesCard
                        image={service.image}
                        heading={service.heading}
                        description={service.description}
                        link={service.link}
                    />
                    
                </motion.div>
            ))}
            <button
                className="text-white mt-[500px] text-center justify-center items-center mx-auto bg-blue-500 mb-5 rounded-md py-2 px-4"
                onClick={handleNext}
            >
                <span className='flex gap-2 text-center justify-center text-sm md:text-xl font-bold'>
                <MdOutlineSwipeRight className='w-8 h-8 '/>
                Swipe Our Latest Services</span>
            </button>
        </div>
    );
};

export default Services;
