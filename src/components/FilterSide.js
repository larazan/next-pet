import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import Accordion from "./Accordion";

const FilterSide = ({ isOpen, handleClose, setIsOpen }) => {
  let autoRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!autoRef.current.contains(e.target)) {
        setIsOpen(false);
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
          isOpen ? "left-0" : "-left-full"
        } flex flex-col w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] transition-all duration-300 z-50 px-4 lg:px-[35px]`}
        ref={autoRef}
      >
        <div className="flex w-full items-center justify-between py-4 border-b">
          <div className="w-1/2">
            <span className="uppercase font-semibold">Filters</span>
          </div>

          <div className="flex justify-end w-1/2">
            <div
              onClick={handleClose}
              className="cursor-pointer w-8 h-8 flex justify-center items-center rounded-full bg-pink-200 hover:bg-pink-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-gray-900"
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
          <Accordion title="Brand">
            <div className="overflow-hidden pb-2">
              <div class="duration-300 px-4">
                <div class="flex items-start mb-0 py-2">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                      required=""
                    />
                  </div>
                  <div class="text-sm ml-2">
                    <label for="remember" class=" text-gray-900">
                      Vetri-Science
                    </label>
                  </div>
                </div>
                <div class="flex items-start mb-0 py-2">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                      required=""
                    />
                  </div>
                  <div class="text-sm ml-2">
                    <label for="remember" class=" text-gray-900">
                      Only Natural Pet
                    </label>
                  </div>
                </div>
                <div class="flex items-start mb-0 py-2">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                      required=""
                    />
                  </div>
                  <div class="text-sm ml-2">
                    <label for="remember" class=" text-gray-900">
                      Pet Naturals
                    </label>
                  </div>
                </div>
                <div class="flex items-start mb-0 py-2">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                      required=""
                    />
                  </div>
                  <div class="text-sm ml-2">
                    <label for="remember" class=" text-gray-900">
                      Thorne Vet
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </Accordion>
          <Accordion title="Features">
            <div className="overflow-hidden pb-2">
              <div class="duration-300 px-4">
                <div class="flex items-start mb-0 py-2">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                      required=""
                    />
                  </div>
                  <div class="text-sm ml-2">
                    <label for="remember" class=" text-gray-900">
                      Made in the US
                    </label>
                  </div>
                </div>
                <div class="flex items-start mb-0 py-2">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                      required=""
                    />
                  </div>
                  <div class="text-sm ml-2">
                    <label for="remember" class=" text-gray-900">
                      Eco Friendly
                    </label>
                  </div>
                </div>
                <div class="flex items-start mb-0 py-2">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                      required=""
                    />
                  </div>
                  <div class="text-sm ml-2">
                    <label for="remember" class=" text-gray-900">
                      Organic
                    </label>
                  </div>
                </div>
                <div class="flex items-start mb-0 py-2">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                      required=""
                    />
                  </div>
                  <div class="text-sm ml-2">
                    <label for="remember" class=" text-gray-900">
                      Best Sellers
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </Accordion>
          <Accordion title="Supplements">
            <div className="overflow-hidden pb-2">
              <div class="duration-300 px-4">
                <a class="flex items-center h-8 text-sm " href="#">
                  Natural Food
                </a>
                <a class="flex items-center h-8 text-sm " href="#">
                  Treats
                </a>
                <a class="flex items-center h-8 text-sm " href="#">
                  Toys
                </a>
                <a class="flex items-center h-8 text-sm " href="#">
                  Accessories
                </a>
                <a class="flex items-center h-8 text-sm " href="#">
                  Apparel
                </a>
                <a class="flex items-center h-8 text-sm " href="#">
                  Shop All
                </a>
              </div>
            </div>
          </Accordion>
          <Accordion title="Price">
            <div className="overflow-hidden pb-2">
              <div class="duration-300 px-4">
                <div class="flex items-start mb-0 py-2">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                      required=""
                    />
                  </div>
                  <div class="text-sm ml-2">
                    <label for="remember" class=" text-gray-900">
                      Under $10.00
                    </label>
                  </div>
                </div>
                <div class="flex items-start mb-0 py-2">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                      required=""
                    />
                  </div>
                  <div class="text-sm ml-2">
                    <label for="remember" class=" text-gray-900">
                      $10.00 - $25.00
                    </label>
                  </div>
                </div>
                <div class="flex items-start mb-0 py-2">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                      required=""
                    />
                  </div>
                  <div class="text-sm ml-2">
                    <label for="remember" class=" text-gray-900">
                      $25.00 - $45.00
                    </label>
                  </div>
                </div>
                <div class="flex items-start mb-0 py-2">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                      required=""
                    />
                  </div>
                  <div class="text-sm ml-2">
                    <label for="remember" class=" text-gray-900">
                      $45.00 - Up
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </Accordion>
          <div>
          <div
            className="bg-[#073d30] hover:opacity-80 uppercase  rounded text-white border border-[#073d30] flex p-3 justify-center items-center w-full font-semibold cursor-pointer"
          >
            Filter
          </div>
          </div>
        </div>
      </div>
      {isOpen ? (
        <div className="opacity-50 fixed inset-0 z-30 bg-black"></div>
      ) : (
        <></>
      )}
    </>
  );
};

export default FilterSide;
