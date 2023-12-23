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
      <div className="relative shrink-0 aspect-square w-[60px] md:w-[90px] md:bg-[#f3f6f9] p-1">
        <Image src={product1} alt="" className='border rounded'   />
        <div className='absolute rounded-full bg-gray-400 px-2 py-[2px] top-0 right-0 text-[12px] font-semibold text-white'>1</div>
      </div>
      {/* IMAGE END */}

      <div className="w-full flex flex-col">
        <div className=" flex flex-col md:flex-row justify-between">
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
        
        
      </div>
    </div>
  )
}

export default CheckoutItem