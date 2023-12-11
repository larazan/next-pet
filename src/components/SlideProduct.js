import React, { useState, useRef } from 'react'
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

const SlideProduct = () => {
    let scrl = useRef(null);
    const shiftN = 730;
    const [scrollX, setscrollX] = useState(0);
    const [scrolEnd, setscrolEnd] = useState(false);
  
    const slide = (shift) => {
      scrl.current.scrollLeft += shift;
      setscrollX(scrollX + shift);
  
      if (
        Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
        scrl.current.offsetWidth
      ) {
        setscrolEnd(true);
      } else {
        setscrolEnd(false);
      }
    };
  
    const scrollCheck = () => {
      setscrollX(scrl.current.scrollLeft);
      if (
        Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
        scrl.current.offsetWidth
      ) {
        setscrolEnd(true);
      } else {
        setscrolEnd(false);
      }
    };

    const productData = [
        {
          title: "Soulistic Moist & Tender Kitten Chicken & Pumpkin Formula in Gravy Wet Cat Food",
          price: "19.58",
          img: product1,
          discount: "20",
        },
        {
            title: "Soulistic Moist & Tender Kitten Chicken & Pumpkin Formula in Gravy Wet Cat Food",
            price: "19.58",
            img: product2,
            discount: "20",
          },
          {
            title: "Soulistic Moist & Tender Kitten Chicken & Pumpkin Formula in Gravy Wet Cat Food",
            price: "19.58",
            img: product3,
            discount: "20",
          },
          {
            title: "Soulistic Moist & Tender Kitten Chicken & Pumpkin Formula in Gravy Wet Cat Food",
            price: "19.58",
            img: product4,
            discount: "20",
          },
          {
            title: "Soulistic Moist & Tender Kitten Chicken & Pumpkin Formula in Gravy Wet Cat Food",
            price: "19.58",
            img: product5,
            discount: "20",
          },
          {
            title: "Soulistic Moist & Tender Kitten Chicken & Pumpkin Formula in Gravy Wet Cat Food",
            price: "19.58",
            img: product6,
            discount: "20",
          },
          {
            title: "Soulistic Moist & Tender Kitten Chicken & Pumpkin Formula in Gravy Wet Cat Food",
            price: "19.58",
            img: product7,
            discount: "20",
          },
    ]

  return (
    <>
      <div className="h-max mx-auto w-full lg:w-1/2 flex flex-col space-y-3 px-3 md:px-0 lg:px-0 py-0 md:py-4 justify-center2 items-center2 bg-white border-b-2">
        <div className="flex flex-row justify-between mx-auto w-full md:w-12/12 space-x-6 items-center">
          
          {/* <div className="flex space-x-1">
            <div
              onClick={() => slide(-shiftN)}
              className={`p-1 rounded-full  shadow-md text-black  ${scrollX !== 0 ? 'bg-[#fd9c0c] cursor-pointer' : 'bg-orange-300 opacity-50 cursor-default'} border-2 border-gray-800 shadow-menu`}
            >
              <span>
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
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </span>
            </div>
            <div
              onClick={() => slide(+shiftN)}
              className={`p-1 rounded-full  shadow-md text-black  ${!scrolEnd ? 'bg-[#fd9c0c] cursor-pointer' : 'bg-orange-300 opacity-50 cursor-default'} border-2 border-gray-800 shadow-menu`}
            >
              <span>
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
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
            </div>
          </div> */}
        </div>

        <div className="relative flex flex-row mx-auto w-full md:w-12/12 justify-between items-center">
          {/* {scrollX !== 0 && (
            <div className="top-[40%] left-0">
              <button
                onClick={() => slide(-shiftN)}
                className="none absolute top-[35%] -left-0 md:-left-5 z-10 cursor-pointer rounded-full px-2 py-2 bg-[#002f6c] border-2 border-gray-800 shadow text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
            </div>
          )}
          {!scrolEnd && (
            <div className="top-[40%] right-0">
              <button
                onClick={() => slide(+shiftN)}
                className="none absolute top-[35%] -right-0 md:-right-5 z-10 cursor-pointer rounded-full px-2 py-2 bg-[#002f6c] border-2 border-gray-800 shadow text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          )} */}
          {/*  */}
          <div className='flex justify-center items-center w-1/12 '>
          <button
                onClick={() => slide(-shiftN)}
                className=" z-10 cursor-pointer rounded-full px-2 py-2 bg-[#002f6c] border-2 border-gray-800 shadow text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
          </div>
          <div
            className="mb-[1em] w-10/12 bg-white flex flex-row overflow-x-auto no-scrollbar scroll-smooth"
            ref={scrl}
            onScroll={scrollCheck}
          >
            {productData.map((data, index) => {
              return (
                <div
                  className="transition-all duration-150 flex mr-[1em] w-full h-28"
                  key={index}
                >
                  <div className="flex mx-auto w-[310px] md:w-[725px]  bg-white p-2 border2 ">
                    <div className=' mx-auto min-w-[200px] flex justify-center items-center'>
                    <div className="flex w-2/6 md:w-1/6">
                      <Link
                        href="/shop/product-2"
                        className="flex p-2"
                      >
                        <div className="flex justify-center items-center">
                          <Image src={data.img} alt="" className="w-20 object-cover" />
                        </div>
                      </Link>{" "}
                    </div>
                    <div className="flex flex-col w-4/6 md:w-5/6  ">
                      <div className="flex text-center2 leading-tight">
                        <Link href={"/shop/product-2"}>
                          <span className="font-bold text-[10px] md:text-[13px] leading-tight text-gray-900  hover:underline">
                            {data.title}
                          </span>
                        </Link>
                      </div>
                      <div>
                        <span className="font-bold text-xs md:text-sm text-[#002f6c] tracking-tighter">
                          £ {data.price}
                        </span>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              );
            })} 
          </div>
          <div className='flex justify-center items-center w-1/12 '>
          <button
                onClick={() => slide(+shiftN)}
                className=" z-10 cursor-pointer rounded-full px-2 py-2 bg-[#002f6c] border-2 border-gray-800 shadow text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
          </div>
        </div>
      </div>  
    </>
  )
}

export default SlideProduct