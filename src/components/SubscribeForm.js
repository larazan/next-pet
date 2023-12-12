import React from "react";
import Image from "next/image";

import img from "@/assets/logo-ruff-and-muss.svg";

const SubscribeForm = () => {
  return (
    <>
      <div className="relative flex bg-[#736ef7] py-8 ">
        <div className="hidden md:block absolute text-white bottom-0 right-0">
          <Image src={img} alt="" className="w-32" />
        </div>
        <div className="flex mx-auto w-11/12  ">
          <div className="flex flex-col md:flex-row md:py-8 space-y-5 md:space-y-0 md:space-x-10 ">
            <div className="w-full md:w-2/6 flex flex-col space-y-3 leading-tight">
              <h3 className="text-2xl leading-tight md:text-3xl font-bold text-white">
                New Pet? Everything you need to know
              </h3>
              <span className="text-md font-semibold leading-tight md:leading-snug text-white">
                Use our helpful new pet guides to learn more about what you need
                to prepare your home for your new family member, nutrition
                information, and training tips.
              </span>
            </div>
            <div className="w-full md:w-4/6">
              <div className="w-full px-4 py-6 md:p-8 bg-[#fbd718] rounded-3xl shadow">
                <div className="flex flex-col space-y-5">
                  <h3 className="md:text-lg font-semibold leading-tight">
                    Subscribe to our newsletter and receive 10$ off your first
                    subscription order.
                  </h3>

                  <div className="relative">
                    <input
                      className="w-full py-4 px-5 text-sm bg-white border-2 border-gray-900 rounded-3xl placeholder:text-lg placeholder:font-bold focus:outline-none outline-none focus:border-blue-400 text-gray-800 font-mabry"
                      type="email"
                      placeholder="your email"
                    />
                    <button className="absolute top-2 right-2 py-2 px-2 bg-[#14322e] hover:opacity-90  rounded-full text-md text-white transition duration-200 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscribeForm;
