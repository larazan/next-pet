import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import Accordion from "./Accordion";

import logo from "@/assets/logo.png";

const Menu = ({ 
  openMenu,
  clickMenu,
  setOpenMenu }) => {
  let autoRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!autoRef.current.contains(e.target)) {
        setOpenMenu(false);
        console.log(autoRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <>
      <div
        className={`${
          openMenu ? "left-0" : "-left-full"
        } flex flex-col w-full bg-[#fbd718] fixed top-0 h-full shadow-2xl md:w-[35vw] transition-all duration-300 z-50 px-4 lg:px-[35px]`}
        ref={autoRef}
      >
        <div className="flex w-full items-center justify-between py-4 border-b border-black">
          <div className="w-1/2">
            <Link href={"/"}>
                <Image src={logo} alt="" className="w-28 md:w-40" />
              </Link>
          </div>

          <div className="flex justify-end w-1/2">
            <div
              onClick={clickMenu}
              className="cursor-pointer w-8 h-8 flex justify-center items-center rounded-full bg-[#073d30] hover:opacity-80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="divide-y">
          <Accordion title="Supplements" bg="fbd718">
            <div className="overflow-hidden pb-2">
              <div class="duration-300 px-4">
                <a class="flex items-center h-8 text-sm text-gray-900 " href="#">
                  Natural Food
                </a>
                <a class="flex items-center h-8 text-sm text-gray-900 " href="#">
                  Treats
                </a>
                <a class="flex items-center h-8 text-sm text-gray-900 " href="#">
                  Toys
                </a>
                <a class="flex items-center h-8 text-sm text-gray-900 " href="#">
                  Accessories
                </a>
                <a class="flex items-center h-8 text-sm text-gray-900 " href="#">
                  Apparel
                </a>
                <a class="flex items-center h-8 text-sm text-gray-900 " href="#">
                  Shop All
                </a>
              </div>
            </div>
          </Accordion>
          
        </div>
      </div>
      {openMenu ? (
        <div className="opacity-50 fixed inset-0 z-30 bg-black"></div>
      ) : (
        <></>
      )}
    </>
  )
}

export default Menu