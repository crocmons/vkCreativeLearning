'use client';
"use client"
import React from 'react'

export default function DemoProject({index, title, manageModal}) {

    return (
        <div onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY)}} onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}} className="demoproject">
            <h2 className='text-[35px] md:text-[60px] m-0 font-[400] transition-all delay-[0.4s]'>{title}</h2>
            <p>Design & Development</p>
        </div>
    )
}