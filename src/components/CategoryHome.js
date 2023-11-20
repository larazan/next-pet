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
      <div className="flex relative z-10 items-center overflow-hidden bg-[#073d30]">
        <div class="w-full h-screen py-8">
          <div class="grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-4 gap-4 h-5/6 w-4/5 mx-auto">
            <div class="bg-[#ff8dbd] row-span-1 md:row-span-2 rounded-lg hover:scale-105 cursor-pointer">
              <div>
                <Image src={card2} alt="" />
              </div>
            </div>
            <div class="bg-[#7ce993] col-span-1 md:col-span-2 rounded-lg hover:scale-105 cursor-pointer">
              <div>
                <Image src={reptile} alt="" />
              </div>
            </div>
            <div class="bg-[#30ba99] rounded-lg hover:scale-105 cursor-pointer">
              <div>
                <Image src={clown} alt="" />
              </div>
            </div>
            <div class="bg-[#fbd718] row-span-1 md:row-span-2 rounded-lg hover:scale-105 cursor-pointer">
              <div>
                <Image src={parrot} alt="" />
              </div>
            </div>
            <div class="bg-[#ff862f] row-span-1 md:row-span-2 col-span-1 md:col-span-2 rounded-lg  hover:scale-105 cursor-pointer">
              <div>
                <Image src={card1} alt="" />
              </div>
            </div>
            <div class="bg-[#b6e6db] rounded-lg hover:scale-105 cursor-pointer">
              <div>
                <Image src={mini} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryHome;
