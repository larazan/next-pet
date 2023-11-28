import React from 'react'
import Link from "next/link";

const FilterSide = ({ isOpen, handleClose }) => {
  return (
    <>
      <div
        className={`${
          isOpen ? "left-0" : "-left-full"
        } flex flex-col w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] transition-all duration-300 z-50 px-4 lg:px-[35px]`}
      >
        <div className="flex w-full items-center justify-between py-4 border-b">
          <div className="w-1/6">
            <div
              onClick={handleClose}
              className="cursor-pointer w-8 h-8 flex justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-slate-900"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </div>
          <div className="w-4/6 flex justify-center  uppercase text-sm md:text-lg tracking-tight font-semibold text-[#001838]">
            Your cart
          </div>
          <div className="w-1/6"></div>
        </div>
        
        
      </div>
      {isOpen ? (
        <div className="opacity-50 fixed inset-0 z-30 bg-black"></div>
      ) : (
        <></>
      )}  
    </>
  )
}

export default FilterSide