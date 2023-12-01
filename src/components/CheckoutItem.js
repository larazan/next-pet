import React from 'react'
import Image from "next/image";
import Link from "next/link";

import product1 from "@/assets/product/produk1.png";
import product2 from "@/assets/product/produk2.png";
import product3 from "@/assets/product/produk3.png";
import product4 from "@/assets/product/produk4.png";

const CheckoutItem = () => {
  return (
    <div className="flex py-5 gap-3 md:gap-3 border-b">
      {/* IMAGE START */}
      <div className="shrink-0 aspect-square w-[60px] md:w-[90px] md:bg-[#f3f6f9] p-1">
        <Image src={product1} alt=""   />
      </div>
      {/* IMAGE END */}

      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          {/* PRODUCT TITLE */}
          <Link
            href="/shop/product-3"
            className="text-sm leading-tight hover:underline font-semibold text-black/[0.8]"
          >
            Frieskies Seafood Sensations Dry Cat Food
          </Link>
        </div>
        <div className="text-sm md:text-md font-bold tracking-tighter text-black/[0.5] mt-1">
            £ 91,00
        </div>
        
        <div className="flex items-center justify-end mt-3">
          <span className="cursor-pointer text-black/[0.5] hover:text-red-600 text-[16px] md:text-[18px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  )
}

export default CheckoutItem