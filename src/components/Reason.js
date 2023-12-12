import Link from "next/link";
import React from "react";
import Image from "next/image";

import icon1 from "@/assets/img/graphics_icon-frilled-clean.png";
import icon2 from "@/assets/img/graphics_icon-frilled-coins.png";
import icon3 from "@/assets/img/graphics_icon-frilled-cup.png";
import icon4 from "@/assets/img/graphics_icon-frilled-vest.png";

const Reason = () => {
  return (
    <>
      <div className="flex relative z-10 items-center overflow-hidden bg-[#f8f3e7]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 mb-8 mx-auto py-6 w-full px-3 md:px-0 md:w-10/12 ">
          <div className="relative rounded-lg flex justify-center text-center flex-col space-y-2 px-0 py-8 md:py-16 bg-[#ff8dbd]">
            <div className="absolute w-full -top-8">
              <div className="flex justify-center items-center">
                <Image src={icon3} alt="" className="w-16" />
              </div>
            </div>
            <div className="flex flex-col space-y-2 px-4">
              <div className="text-[20px] md:text-2xl font-semibold leading-tight">
                Employee engagement
              </div>
              <span className="leading-tight md:leading-normal">Engage, attract & retain talent</span>
              <Link
                href={""}
                className="font-semibold text-[16px] md:text-[18px] underline underline-offset-4"
              >
                Learn more
              </Link>
            </div>
          </div>
          <div className="relative rounded-lg flex justify-center text-center flex-col space-y-2 px-0 py-8 md:py-16 bg-[#7ce993]">
            <div className="absolute w-full -top-8">
              <div className="flex justify-center items-center">
                <Image src={icon4} alt="" className="w-16" />
              </div>
            </div>
            <div className="flex flex-col space-y-2 px-4">
              <div className="ttext-[20px] md:text-2xl font-semibold leading-tight">
                Community investment
              </div>
              <span className="leading-tight md:leading-normal">Create impact & measure social value</span>
              <Link
                href={""}
                className="font-semibold text-[18px] underline underline-offset-4"
              >
                Learn more
              </Link>
            </div>
          </div>
          <div className="relative rounded-lg flex justify-center text-center flex-col space-y-2 px-0 py-8 md:py-16 bg-[#30ba99]">
            <div className="absolute w-full -top-8">
              <div className="flex justify-center items-center">
                <Image src={icon1} alt="" className="w-16" />
              </div>
            </div>
            <div className="flex flex-col space-y-2 px-4">
              <div className="text-[20px] md:text-2xl font-semibold leading-tight">
                Sustainability action
              </div>
              <span className="leading-tight md:leading-normal">Track CO2e reductions & plant trees</span>
              <Link
                href={""}
                className="font-semibold text-[18px] underline underline-offset-4"
              >
                Learn more
              </Link>
            </div>
          </div>
          <div className="relative rounded-lg flex justify-center text-center flex-col space-y-2 px-0 py-8 md:py-16 bg-[#fbd718]">
            <div className="absolute w-full -top-8">
              <div className="flex justify-center items-center">
                <Image src={icon2} alt="" className="w-16" />
              </div>
            </div>
            <div className="flex flex-col space-y-2 px-4">
              <div className="text-[20px] md:text-2xl font-semibold leading-tight">
                Employee giving & donations
              </div>
              <span className="leading-tight md:leading-normal">
                Give to charities that matter the most to you
              </span>
              <Link
                href={""}
                className="font-semibold text-[18px] underline underline-offset-4"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reason;
