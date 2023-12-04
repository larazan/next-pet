import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import bengal from "@/assets/breeds/bengal.png"
import british from "@/assets/breeds/british.png"
import angora from "@/assets/breeds/angora.png"
import himalaya from "@/assets/breeds/himalaya.png"
import norwegia from "@/assets/breeds/norwegia.png"
import persia from "@/assets/breeds/persia.png"
import scottish from "@/assets/breeds/scottish.png"

const PopularBreed = () => {
    let scrl = useRef(null);
  const shiftN = 230;
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const breeds = [
    {
        title: "bengal",
        url: "bengal",
        image: bengal,
    },
    {
        title: "british",
        url: "british",
        image: british,
    },
    {
        title: "angora",
        url: "angora",
        image: angora,
    },
    {
        title: "himalaya",
        url: "himalaya",
        image: himalaya,
    },
    {
        title: "norwegia",
        url: "norwegia",
        image: norwegia,
    },
    {
        title: "persia",
        url: "persia",
        image: persia,
    },
    {
        title: "scottish",
        url: "scottish",
        image: scottish,
    },
  ]

  
  return (
    <>
      <div className="flex w-full py-6 px-5 bg-[#f8f3e7]">
        <div className="flex flex-col space-y-3 w-full">
          <div className="flex flex-row justify-between  items-center">
            <p className=" text-lg font-bold md:text-xl lg:text-2xl text-black">
            Popular Cat Breeds
            </p>
            <div className="flex space-x-1">
              <div
                onClick={() => slide(-shiftN)}
                className={`p-1 rounded-full  shadow-md text-black  ${
                  scrollX !== 0
                    ? "bg-[#fd9c0c] cursor-pointer"
                    : "bg-orange-300 opacity-50 cursor-default"
                } border-2 border-gray-800 shadow-menu`}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </span>
              </div>
              <div
                onClick={() => slide(+shiftN)}
                className={`p-1 rounded-full  shadow-md text-black  ${
                  !scrolEnd
                    ? "bg-[#fd9c0c] cursor-pointer"
                    : "bg-orange-300 opacity-50 cursor-default"
                } border-2 border-gray-800 shadow-menu`}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          <div className="relative flex flex-row w-12/12 justify-between items-center">
            <div
              className="mb-[1em] flex flex-row overflow-x-auto scroll-smooth no-scrollbar"
              ref={scrl}
              onScroll={scrollCheck}
            >
              {breeds.map((data, index) => {
                return (
                  <div
                    className="transition-all duration-150 flex mr-[1em] mb-[1em] "
                    key={index}
                  >
                    <div className="flex w-[260px] ">
                      <div className="rounded bg-transparent border border-gray-800 shadow-stack-sm group flex flex-col overflow-hidden  ">
                        <Link href="/" className="relative">
                          <Image
                            src={data.image}
                            alt=""
                            className="w-full object-cover"
                          />{" "}
                          <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
                        </Link>{" "}
                        <div className="px-3 py-2 flex flex-col justify-between leading-tight">
                          <h3 className="my-[0.25em] mx-[0em] overflow-hidden break-words text-md md:text-lg leading-tight md:leading-tight font-semibold capitalize">
                            <Link href="/">{data.title}</Link>
                          </h3>{" "}
                          <div className="font-mabry text-xs">
                            May 9th, 2023
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          
        </div>
      </div>  
    </>
  )
}

export default PopularBreed