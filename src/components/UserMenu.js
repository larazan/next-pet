import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function UserMenu() {
  return (
    <>
        <div className="z-30">
        <div className="px-0 text-left2  group ">
          <h1
            className="md:py-7  flex cursor-pointer justify-between items-center md:pr-0 pr-0 group text-md font-bold "
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-user-hexagon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z" />
                <path d="M6.201 18.744a4 4 0 0 1 3.799 -2.744h4a4 4 0 0 1 3.798 2.741" />
                <path d="M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
              </svg>
          </h1>
         
          <div>
            <div className="w-[200px] absolute top-12 right-3 shadow border rounded-2xl hidden group-hover:md:block hover:md:block">
              <div className="w-full bg-white rounded flex">
                <div className="w-full bg-white rounded">
                  <div className="flex flex-col space-y-1 p-2">
                    <Link
                      href={"/login"}
                      className="flex px-3 py-1 rounded hover:bg-gray-200 items-center space-x-3 cursor-pointer"
                    >      
                        <span className="text-sm font-semibold text-gray-500 ">
                          Login
                        </span>
                    </Link>
                    <Link
                      href={"/register"}
                      className="flex px-3 py-1 rounded hover:bg-gray-200 items-center space-x-3 cursor-pointer"
                    >      
                        <span className="text-sm font-semibold text-gray-500 ">
                          Register
                        </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
