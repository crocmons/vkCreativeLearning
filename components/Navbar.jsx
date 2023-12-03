"use client"
import React, { useState } from "react";
import Link from "next/link";
import { IoMenuOutline } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";


const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = ()=>{
      setClick(!click)
  }

  const navContent = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-50 transition z-50">
        <ul className="text-center text-xl p-20">
          <Link href="/">
            <li className="my-4 py-4 border-b font-semibold border-blue-500 hover:text-white hover:text-2xl hover:bg-fuchsia-600 hover:rounded">Home</li>
          </Link>
          <Link href="/about">
            <li className="my-4 py-4 border-b font-semibold border-blue-500 hover:text-white hover:text-2xl hover:bg-fuchsia-600 hover:rounded">About Us</li>
          </Link>
          <Link href="/services">
            <li className="my-4 py-4 border-b font-semibold border-blue-500 hover:text-white hover:text-2xl hover:bg-fuchsia-600 hover:rounded">Services</li>
          </Link>
          {/* <Link href="/partners">
            <li className="my-4 py-4 border-b font-semibold border-slate-400 hover:text-white hover:text-2xl hover:bg-slate-400 hover:rounded">Partners</li>
          </Link> */}
          <Link href="/contact">
            <li className="my-4 py-4 border-b font-semibold border-blue-500 hover:text-white hover:text-2xl hover:bg-fuchsia-600 hover:rounded">Contact Us</li>
          </Link>
        </ul>
      </div>
    </>
  );
  return (
    <div className="bg-slate-50">
      <div className="h-10vh flex justify-between z-50 text-gray-600 lg:py-5 px-20 py-4">
        <Link href="/" className="flex items-center flex-1">
          <span className="text-3xl font-bold">logo</span>
        </Link>
        <div className="md:flex lg:flex-1 items-center justify-center font-medium mx-auto hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link href="/">
                <li className="hover:text-fuchsia-500 transition hover:border-b hover:border-blue-500 cursor-pointer">Home</li>
              </Link>
              <Link href="/about">
                <li className="hover:text-fuchsia-500 transition hover:border-b hover:border-blue-500 cursor-pointer">About Us</li>
              </Link>
              <Link href="/services">
                <li className="hover:text-fuchsia-500 transition hover:border-b hover:border-blue-500 cursor-pointer">Services</li>
              </Link>
              {/* <Link href="/partners">
                <li className="hover:text-green-500 transition hover:border-b hover:border-green-500 cursor-pointer">Partners</li>
              </Link> */}
              <Link href="/contact">
                <li className="hover:text-fuchsia-500 transition hover:border-b hover:border-blue-500 cursor-pointer">Contact Us</li>
              </Link>
            </ul>
          </div>
        </div>
            <Link href="/contact">
            <button className="hidden md:flex py-2.5 px-5 bg-[#0077B6] text-white uppercase text-sm font-semibold rounded-lg hover:bg-fuchsia-500">Get in touch</button>
              </Link>
        <div>
          {click && navContent}
        </div>
        <button className="block text-3xl font-bold md:hidden transition" onClick={handleClick}>
          {click ? <IoCloseSharp /> : <IoMenuOutline />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
