import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import product1 from "@/assets/product/pro1.png";

const ProductItem = () => {
  const [count, setCount] = useState(0);

  const handleSubtractOne = () => {
    setCount(count - 1);
 }

 const handleAddOne = () => {
  setCount(count + 1);
}

  return (
    <>
      <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
        <div className="w-full min-h-[110px] flex items-center gap-x-4">
          <Link
            href={"/shop/product-4"}
            className="border rounded-sm bg-gray-100 p-1"
          >
            <Image src={product1} alt="" className="max-w-[80px]" />
          </Link>
          <div className="w-full flex flex-col">
            <div className="flex justify-between mb-2">
              <div className="flex flex-col max-w-[240px]">
                <span className="text-xs font-semibold uppercase">
                  Savory Chews
                </span>
                <Link
                  href={"/shop/product-4"}
                  className="text-xs font-medium  hover:underline"
                >
                  Salmon Savory Chews
                </Link>
              </div>

              <div className="text-xl cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 hover:text-red-500 transition"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
            <div className="flex gap-x-2 h-[36px] text-sm">
              <div className="custom-number-input h-0 w-[70px]">
                <div className="flex  flex-row h-8 w-full rounded-lg relative bg-transparent mt-1">
                  <button
                    data-action="decrement"
                    onClick={handleSubtractOne}
                    className="flex items-center bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-200 h-full w-20 rounded-l cursor-pointer outline-none"
                  >
                    <span className="m-auto text-2xl font-thin">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 12H6"
                        />
                      </svg>
                    </span>
                  </button>
                  <input
                    type="number"
                    className=" text-center w-full bg-gray-100 font-semibold text-sm hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                    name="custom-input-number"
                    value={count}
                    readOnly
                  />
                  <button
                    data-action="increment"
                    onClick={handleAddOne}
                    className="flex items-center bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-200 h-full w-20 rounded-r cursor-pointer"
                  >
                    <span className="m-auto text-2xl font-thin">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v12m6-6H6"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
              {/* <div className="flex-1 flex justify-around items-center">
                $ 99,00
              </div> */}
              <div className="flex-1 flex justify-end items-center font-medium">
                $ 99,00
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
