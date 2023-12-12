import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import product1 from "@/assets/product/produk1.png"
import product2 from "@/assets/product/produk2.png"
import product3 from "@/assets/product/produk3.png"
import product4 from "@/assets/product/produk4.png"
import product5 from "@/assets/product/produk5.png"
import product6 from "@/assets/product/produk6.png"
import product7 from "@/assets/product/produk7.png"
import product8 from "@/assets/product/produk8.png"
import product9 from "@/assets/product/produk9.png"
import pro1 from "@/assets/product/pro1.png"

const ProductList = () => {
    const [open, setOpen] = useState('');
    const [isHovered, setIsHovered] = useState(false)

    const handleHover = () => {
        setIsHovered(!isHovered);
    }

    const unhover = () => {
        setOpen('')
      }

    const productData = [
        {
            id:1,
          title: "Frieskies Seafood Sensations Dry Cat Food",
          slug: "product-1",
          price: "8.00",
          img: product1,
        },
        {
            id:2,
          title: "Frieskies Seafood Sensations Dry Cat Food",
          slug: "product-1",
          price: "8.00",
          img: product2,
        },
        {
            id:3,
          title: "Frieskies Seafood Sensations Dry Cat Food",
          slug: "product-1",
          price: "8.00",
          img: product3,
        },
        {
            id:4,
          title: "Frieskies Seafood Sensations Dry Cat Food",
          slug: "product-1",
          price: "8.00",
          img: product4,
        },
        {
            id:5,
          title: "Frieskies Seafood Sensations Dry Cat Food",
          slug: "product-1",
          price: "8.00",
          img: product5,
        },
        {
            id:6,
          title: "Frieskies Seafood Sensations Dry Cat Food",
          slug: "product-1",
          price: "8.00",
          img: product6,
        },
        {
            id:7,
          title: "Frieskies Seafood Sensations Dry Cat Food",
          slug: "product-1",
          price: "8.00",
          img: product7,
        },
        {
            id:8,
          title: "Frieskies Seafood Sensations Dry Cat Food",
          slug: "product-1",
          price: "8.00",
          img: product8,
        },
        {
            id:9,
          title: "Frieskies Seafood Sensations Dry Cat Food",
          slug: "product-1",
          price: "8.00",
          img: product9,
        },
      ];

  return (
    <>
        <div className={`w-full max-w-[1280px] px-5 py-1 md:px-10 mx-auto bg-white`}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 py-5 md:my-14 px-0 md:px-0">
          {productData.map((data, index) => {
            return (
              <Link
                href={`/detail`}
                className="transform overflow-hidden bg-transparent duration-200 hover:scale-105 cursor-pointer"
                key={index}
              >
                <div className="bg-[#f4f4f4] p-2 rounded-md" onMouseOver={() => setOpen(data.id)} onMouseOut={unhover}>
                <Image
                  width={500}
                  height={500}
                  src={ open === data.id ? pro1 : data.img}
                  alt={data.title}
                  onMouseOver={e => console.log(e)}
                />
                </div>
                <div className="p-2 flex flex-col justify-center items-center space-y-1 text-black/[0.9]">
                  <h2 className="text-base text-center font-medium leading-tight">{data.title}</h2>
                  <div className="flex items-center text-black/[0.5]">
                    <p className="mr-2 text-lg text-gray-950 font-semibold">
                      ${data.price}
                    </p>

                    {data.price && (
                      <>
                        <p className="text-base  font-medium line-through">
                          ${data.price}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default ProductList