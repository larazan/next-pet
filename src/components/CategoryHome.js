import React from "react";
import Link from "next/link";
import Image from "next/image";

import card1 from "@/assets/card-kitty.png";
import card2 from "@/assets/card-dog.png";
import reptile from "@/assets/img/reptile.png";
import iguana from "@/assets/img/iguana.png";
import parrot from "@/assets/img/parrot.png";
import clown from "@/assets/img/clown.png";
import mini from "@/assets/img/mini.png";

const CategoryHome = () => {
  return (
    <>
      <div className="relative z-10 items-center overflow-hidden bg-[#073d30]">
        <div className="flex flex-col flex-1 space-y-1 justify-center pt-12 mx-auto w-11/12 md:w-4/5">
          <h1 className="text-2xl md:text-2xl font-bold text-white">
            Browse your most needed
          </h1>
          <span className="text-white font-semibold leading-tight">
            Want to go house sitting? Browse the latest house sits with pets
            around the world.
          </span>
        </div>
        <div className="w-full h-screen pt-8">
          <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-4 gap-4 h-5/6 w-11/12 md:w-4/5 mx-auto">
            <Link href={"/category"} className="bg-[#ff8dbd] flex justify-center row-span-1 md:row-span-2 rounded-lg hover:scale-105 cursor-pointer">
              <div className="flex flex-col justify-center items-center space-y-2">
                <Image src={card2} alt="" className="w-32 md:w-full" />
                <div className="flex justify-center">
                  <span className="text-lg md:text-2xl font-bold text-gray-900">Dog</span>
                </div>
              </div>
            </Link>
            <Link href={"/category"} className="bg-[#7ce993] flex justify-center items-center col-span-1 md:col-span-2 rounded-lg hover:scale-105 cursor-pointer">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-x-2">
                <Image className="w-[80%] md:w-[60%]" src={reptile} alt="" />
                <div className="flex justify-center">
                  <span className="text-lg md:text-2xl font-bold text-gray-900">
                    Reptile
                  </span>
                </div>
              </div>
            </Link>
            <Link href={"/category"}  className="bg-[#30ba99] flex justify-center items-center rounded-lg hover:scale-105 cursor-pointer">
              <div className="flex flex-col">
                <div className="flex justify-center">
                  <span className="text-lg md:text-2xl font-bold text-gray-900">Fish</span>
                </div>
                <Image className="w-32 md:w-40" src={clown} alt="" />
              </div>
            </Link>
            <Link href={"/category"}  className="bg-[#fbd718] flex justify-center items-center row-span-1 md:row-span-2 rounded-lg hover:scale-105 cursor-pointer">
              <div className="flex flex-col">
                <div className="flex justify-center">
                  <span className="text-lg md:text-2xl font-bold text-gray-900">Bird</span>
                </div>
                <Image className="w-20 md:w-40" src={parrot} alt="" />
              </div>
            </Link>
            <Link href={"/category"}  className="bg-[#ff862f] flex justify-center items-center row-span-1 md:row-span-2 col-span-1 md:col-span-2 rounded-lg  hover:scale-105 cursor-pointer">
              <div className="flex flex-col">
                <Image className="w-96" src={card1} alt="" />
                <div className="flex justify-center">
                  <span className="text-lg md:text-2xl font-bold text-gray-900">Cat</span>
                </div>
              </div>
            </Link>
            <Link href={"/category"} className="bg-[#b6e6db] flex justify-center items-center rounded-lg hover:scale-105 cursor-pointer">
              <div className="flex flex-col">
                <Image className="w-40" src={mini} alt="" />
                <div className="flex justify-center">
                  <span className="text-lg md:text-2xl font-bold text-gray-900">
                    Mini Animal
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryHome;
