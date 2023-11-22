import React from "react";
import Image from "next/image";

import puppy from "@/assets/puppy.png";

const Hero = () => {
  return (
    <>
      <div className="bg-[#fbd718] flex relative z-10 items-center overflow-hidden">
        <div className="container2 mx-auto px-6 flex items-center relative py-12">
          <div className="md:w-1/2 lg:w-2/5 px-6 flex flex-col relative z-20 text">
            <h1 className="font-bebas-neue uppercase text-3xl sm:text-5xl font-bold flex flex-col leading-none  text-gray-900">
              Corporate volunteering that employees love.
            </h1>
            <h3 className="text-2xl font-semibold flex flex-col py-4 leading-tight tracking-tight  text-[#1d4943]">
              Your all-in-one tool for corporate volunteering & sustainability
              action.
            </h3>

            <div className="flex mt-8">
              <a
                href="#"
                className=" py-2 px-4 rounded-2xl bg-[#073d30] text-white text-lg font-semibold mr-4 hover:opacity-90"
              >
                Get started
              </a>
            </div>
          </div>
          <div className="hidden sm:block md:w-1/2 lg:w-3/5 relative">
            <Image
              src={puppy}
              alt=""
              className="max-w-xs md:max-w-sm2 m-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
