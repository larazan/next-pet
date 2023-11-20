// "use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import icon1 from "@/assets/menu_icon_generate.svg";
import icon2 from "@/assets/menu_icon_explore.svg";
import icon3 from "@/assets/menu_icon_contrast_checker.svg";
import icon4 from "@/assets/menu_icon_image_picker.svg";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <>
      
        <div className="z-30">
          <div className="px-0 text-left  group ">
            <h1
              className="py-7  flex cursor-pointer justify-between items-center md:pr-0 pr-5 group text-md font-semibold font-mabrybold text-gray-900"
              onClick={() => {
                setHeading("");
                setSubHeading("");
              }}
            >
              Menu
            </h1>
            
              <div>
                <div className="w-[550px] absolute top-12 right-5 shadow-md border rounded-2xl hidden group-hover:md:block hover:md:block">
                  <div className="w-full bg-white rounded-2xl flex  flex-row space-x-2">
                    <div className="w-2/3 bg-white rounded-2xl">
                      <div className="flex flex-col space-y-2 p-5">
                        <Link href={"/category"} className="flex p-2 rounded-lg hover:bg-green-200 items-center space-x-3 cursor-pointer">
                          <div className="w-14">
                            <Image src={icon1} alt="" className="" />
                          </div>
                          <div className="flex flex-col">
                            <h3 className="text-2xl font-bold text-gray-900">
                              Recipients
                            </h3>
                            <span className="text-sm text-gray-500 ">
                              Create your pallete in seconds
                            </span>
                          </div>
                        </Link>
                        <Link href={"/reviews"} className="flex p-2 rounded-lg hover:bg-pink-200 items-center space-x-3 cursor-pointer">
                          <div className="w-14">
                            <Image src={icon2} alt="" className="" />
                          </div>
                          <div className="flex flex-col">
                            <h3 className="text-2xl font-bold text-gray-900">
                              Occasions
                            </h3>
                            <span className="text-sm text-gray-500 ">
                              Create your pallete in seconds
                            </span>
                          </div>
                        </Link>
                        <Link href={"/detail"} className="flex p-2 rounded-lg hover:bg-yellow-200 items-center space-x-3 cursor-pointer">
                          <div className="w-14">
                            <Image src={icon3} alt="" className="" />
                          </div>
                          <div className="flex flex-col">
                            <h3 className="text-2xl font-bold text-gray-900">
                              Interests
                            </h3>
                            <span className="text-sm text-gray-500 ">
                              Create your pallete in seconds
                            </span>
                          </div>
                        </Link>
                        <div className="flex p-2 rounded-lg hover:bg-blue-200 items-center space-x-3 cursor-pointer">
                          <div className="w-14">
                            <Image src={icon4} alt="" className="" />
                          </div>
                          <div className="flex flex-col">
                            <h3 className="text-2xl font-bold text-gray-900">
                              Popular
                            </h3>
                            <span className="text-sm text-gray-500 ">
                              Create your pallete in seconds
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/3 bg-gray-100 rounded-r-2xl">
                      <div className="flex flex-col space-y-1.5 p-5">
                        <Link
                          href={""}
                          className="capitalize text-[15px] text-gray-900 hover:text-indigo-600"
                        >
                          electronic
                        </Link>
                        <Link
                          href={""}
                          className="capitalize text-[15px] text-gray-900 hover:text-indigo-600"
                        >
                          kitchen
                        </Link>
                        <Link
                          href={""}
                          className="capitalize text-[15px] text-gray-900 hover:text-indigo-600"
                        >
                          home & garden
                        </Link>
                        <Link
                          href={""}
                          className="capitalize text-[15px] text-gray-900 hover:text-indigo-600"
                        >
                          health & leisure
                        </Link>
                        <Link
                          href={""}
                          className="capitalize text-[15px] text-gray-900 hover:text-indigo-600"
                        >
                          tech
                        </Link>
                        <Link
                          href={""}
                          className="capitalize text-[15px] text-gray-900 hover:text-indigo-600"
                        >
                          baby & kid
                        </Link>
                        <Link
                          href={""}
                          className="capitalize text-[15px] text-gray-900 hover:text-indigo-600"
                        >
                          style
                        </Link>
                        <Link
                          href={""}
                          className="capitalize text-[15px] text-gray-900 hover:text-indigo-600"
                        >
                          deals
                        </Link>
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

export default NavLinks;
