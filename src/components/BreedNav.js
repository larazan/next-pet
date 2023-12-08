import React from 'react'
import {Link} from "react-scroll";
import Image from 'next/image';

import care from "@/assets/icons/care.svg"
import idea from "@/assets/icons/idea.svg"
import origins from "@/assets/icons/origins.svg"
import personality from "@/assets/icons/personality.svg"
import physic from "@/assets/icons/physic.svg"
import price from "@/assets/icons/price.svg"

const BreedNav = () => {
  return (
    <>
        <div className="shadow-lg bg-[#FFE5DD] mb-5 sticky top-0 z-20">
          <div className='mx-auto w-full md:w-10/12'>
          <ul className="flex overflow-x-auto overflow-hidden items-center md:justify-center2 space-x-1 md:space-x-3  tracking-tight font-semibold text-sm text-[#b6cce2] shadow2">
            <li className="nav-item md:-mt-px">
              <Link  className="flex items-center md:space-x-2  p-3 cursor-pointer" activeClass="active" to="origin" spy={true} smooth={true} offset={-80} duration={500} >
                <Image src={origins} alt='' className='hidden md:flex' />
                <span className="text-xs md:text-base md:inline text-gray-800 font-semibold">
                  Origins & History
                </span>
              </Link>
            </li>
            <li className="nav-item   md:-mt-px">
              <Link className="flex items-center space-x-2 p-3 cursor-pointer" activeClass="active" to="physical" spy={true} smooth={true} offset={-80} duration={500}>
                <Image src={physic} alt='' className='hidden md:flex' />
                <span className="text-xs md:text-base md:inline text-gray-800 font-semibold">
                  Physical character
                </span>
              </Link>
            </li>
            <li className="nav-item  md:-mt-px">
              <Link className="flex items-center space-x-2 p-3 cursor-pointer" activeClass="active" to="temperament" spy={true} smooth={true} offset={-80} duration={500}>
              <Image src={personality} alt='' className='hidden md:flex' />
                <span className="text-xs md:text-base md:inline text-gray-800 font-semibold">
                  Temperament
                </span>
              </Link>
            </li>
            <li className="nav-item   md:-mt-px">
              <Link className="flex items-center space-x-2 p-3 cursor-pointer" activeClass="active" to="price" spy={true} smooth={true} offset={-80} duration={500}>
              <Image src={price} alt='' className='hidden md:flex' />
                <span className="text-xs md:text-base md:inline text-gray-800 font-semibold">
                  Price
                </span>
              </Link>
            </li>
            <li className="nav-item   md:-mt-px">
              <Link className="flex items-center space-x-2 p-3 cursor-pointer" activeClass="active" to="health" spy={true} smooth={true} offset={-80} duration={500}>
              <Image src={care} alt='' className='hidden md:flex' />
                <span className="text-xs md:text-base md:inline text-gray-800 font-semibold">
                  Health
                </span>
              </Link>
            </li>
            
          </ul>
        </div>
        </div>
    </>
  )
}

export default BreedNav