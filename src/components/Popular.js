import React, { useState, useRef } from 'react'
import Link from "next/link";
import Image from "next/image";

import product1 from "@/assets/product/produk1.png"
import product2 from "@/assets/product/produk2.png"
import product3 from "@/assets/product/produk3.png"
import product4 from "@/assets/product/produk4.png"
import product5 from "@/assets/product/produk5.png"
import product6 from "@/assets/product/produk6.png"
import product7 from "@/assets/product/produk7.png"

const Popular = () => {
    let scrl = useRef(null);
    const shiftN = 230;
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
          title: "Manchester City Home Jersey 2023/24 with DE BRUYNE 17 printing",
          price: "91,00",
          img: product1,
          discount: "20",
        },
        {
            title: "Manchester City Home Jersey 2023/24 with DE BRUYNE 17 printing",
            price: "91,00",
            img: product2,
            discount: "20",
          },
          {
            title: "Manchester City Home Jersey 2023/24 with DE BRUYNE 17 printing",
            price: "91,00",
            img: product3,
            discount: "20",
          },
          {
            title: "Manchester City Home Jersey 2023/24 with DE BRUYNE 17 printing",
            price: "91,00",
            img: product4,
            discount: "20",
          },
          {
            title: "Manchester City Home Jersey 2023/24 with DE BRUYNE 17 printing",
            price: "91,00",
            img: product5,
            discount: "20",
          },
          {
            title: "Manchester City Home Jersey 2023/24 with DE BRUYNE 17 printing",
            price: "91,00",
            img: product6,
            discount: "20",
          },
          {
            title: "Manchester City Home Jersey 2023/24 with DE BRUYNE 17 printing",
            price: "91,00",
            img: product7,
            discount: "20",
          },
    ]
  return (
    <>
        <div className="h-max mx-auto w-full lg:w-1/2 flex flex-col space-y-3 px-3 md:px-6 lg:px-0 py-0 md:py-4 justify-center2 items-center2 bg-[#f5f7f9]">
        <div className="flex flex-row justify-between mx-auto w-full md:w-12/12 space-x-6 items-center">
          <div
            
            className="flex space-x-1 items-center hover:opacity-80"
          >
            <span className="text-lg tracking-tighter uppercase md:text-2xl font-bold text-[#002f6c]">
              You Might Also Like
            </span>
          </div>
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
          {scrollX !== 0 && (
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
          )}
          {/*  */}
          <div
            className="mb-[1em] flex flex-row overflow-x-auto scroll-smooth"
            ref={scrl}
            onScroll={scrollCheck}
          >
            {productData.map((data, index) => {
              return (
                <div
                  className="transition-all duration-150 flex mr-[1em] "
                  key={index}
                >
                  <div className="flex flex-col space-y-2 w-[130px] md:w-[230px]  justify-center bg-white2 border2 shadow2 hover:shadow-lg">
                    <div className="relative w-full bg-gray-200  flex ">
                      <Link
                        href="/shop/product-2"
                        className="flex p-2 space-y-3 justify-center items-center"
                      >
                        <div className="flex space-x-3">
                          <Image src={data.img} alt="" className="w-26 " />
                        </div>
                      </Link>{" "}
                      <div className="absolute top-1 right-1">
                        <div className="border-2 border-slate-700 px-1 ">
                          <span className="text-sm font-semibold tracking-tighter text-gray-700 uppercase">-{data.discount}%</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center2 items-center2">
                      <div className="flex text-center2 leading-tight">
                        <Link href={"/shop/product-2"}>
                        <span className="font-bold text-[10px] md:text-xs text-[#002f6c]  hover:underline">
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
              );
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Popular