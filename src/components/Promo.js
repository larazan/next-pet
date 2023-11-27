import React, { useEffect, useState } from "react";
import Image from "next/image";

import promo from "@/assets/promo3.jpeg";

const Promo = () => {
  const [isShow, setIsShow] = useState(false);
  const [isClose, setIsClose] = useState(false);

  const handleClick = () => {
    setIsShow(!isShow);
  };

  const handleClose = () => {
    setIsClose(!isClose);
  };

  return (
    <>
    {!isClose ? (
      <>
      <div className="fixed left-0 top-[35%] z-30 cursor-pointer" onClick={handleClick}>
        <div className="relative bg-[#e8fafe] shadow-lg rounded w-[50px] h-[190px] ">
          <button
            className="absolute flex -top-2 -right-2 border-2 border-white rounded-full bg-black text-white px-0.5 py-0.5 hover:opacity-80 cursor-pointer"
            onClick={handleClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className=" flex justify-center items-center w-full h-full ">
            <span className="[writing-mode:vertical-rl] text-gray-900 font-semibold text-lg scale-[-1]">Get up to 35% off</span>
          </div>
        </div>
      </div>
      </>
      ) : (
        <></>
      )}
      {isShow ? (
        <>
          <div className="fixed inset-0 z-50 overflow-hidden flex items-start top-[25%] md:top-1/4 mb-4 justify-center transform px-4 sm:px-6 ">
            <div className="relative bg-white overflow-auto max-w-3xl w-full max-h-full rounded2 shadow-lg">
              {/* Search form */}
              <section className="overflow-hidden  shadow-2xl md:grid md:grid-cols-3">
                <Image
                  alt="Trainer"
                  src={promo}
                  className="h-32 w-full object-cover md:h-full"
                />

                <button
                  className="absolute flex top-1 right-1  px-1 py-1 cursor-pointer"
                  onClick={handleClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="w-5 h-5 text-[#1d494e]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
                  <p className="text-2xl font-bold uppercase tracking-widest">
                    THE BIGGEST DEAL OF THE YEAR
                  </p>

                  <h2 className="mt-6 font-black ">
                    <span className="text-4xl text-[#02574d]   sm:text-5xl lg:text-6xl">
                      25% OFF Only Natural Pet products
                    </span>

                    {/* <span className="mt-2 block text-sm">
                  On your next order over $50
                </span> */}
                  </h2>

                  <a
                    className="mt-8 inline-block w-full bg-[#f8e71c] hover:opacity-80 shadow py-4 text-md font-bold uppercase tracking-widest text-gray-900"
                    href=""
                  >
                    Get Discount
                  </a>

                  <p className="mt-8 text-xs font-medium uppercase text-gray-400">
                    Offer valid until 24th March, 2021 *
                  </p>
                </div>
              </section>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Promo;
