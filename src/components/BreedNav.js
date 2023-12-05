import React from 'react'
import Link from "next/link";
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
            <li className="border-b-4 border-pink-500  md:-mt-px">
              <Link className="flex items-center md:space-x-2  p-3" href="/account/show">
                <Image src={origins} alt='' className='hidden md:flex' />
                <span className="text-xs md:text-base md:inline text-gray-800 font-semibold">
                  Origins & History
                </span>
              </Link>
            </li>
            <li className="border-b-4 border-[#FFE5DD]  md:-mt-px">
              <Link className="flex items-center space-x-2 p-3" href="/account/profile">
                <Image src={physic} alt='' className='hidden md:flex' />
                <span className="text-xs md:text-base md:inline text-gray-800 font-semibold">
                  Physical character
                </span>
              </Link>
            </li>
            <li className="border-b-4 border-[#FFE5DD] md:-mt-px">
              <Link className="flex items-center space-x-2 p-3" href="/account/preferences">
              <Image src={personality} alt='' className='hidden md:flex' />
                <span className="text-xs md:text-base md:inline text-gray-800 font-semibold">
                  Temperament
                </span>
              </Link>
            </li>
            <li className="border-b-4 border-[#FFE5DD]  md:-mt-px">
              <Link className="flex items-center space-x-2 p-3" href="/account/orders">
              <Image src={price} alt='' className='hidden md:flex' />
                <span className="text-xs md:text-base md:inline text-gray-800 font-semibold">
                  Price
                </span>
              </Link>
            </li>
            <li className="border-b-4 border-[#FFE5DD]  md:-mt-px">
              <Link className="flex items-center space-x-2 p-3" href="/account/password">
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