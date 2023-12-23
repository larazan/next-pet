import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import ProductItem from "./ProductItem";

const MiniCart = ({ isOpen, handleClose, setIsOpen }) => {
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
          isOpen ? "right-0" : "-right-full"
        } flex flex-col w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] transition-all duration-300 z-50 px-4 lg:px-[35px]`}
        ref={autoRef}
      >
        <div className="flex w-full items-center justify-between py-4 border-b">
          <div className="w-1/6">
            <div
              onClick={handleClose}
              className="cursor-pointer w-8 h-8 flex justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-slate-900"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </div>
          <div className="w-4/6 flex justify-center  uppercase text-sm md:text-lg tracking-tight font-semibold text-[#001838]">
            Your cart
          </div>
          <div className="w-1/6"></div>
        </div>
        <div className="flex h-4/6 flex-col gap-y-2 h-[520px]] overflow-y-auto overflow-x-hidden border-b2">
          <ProductItem />
        </div>
        <div className="flex h-2/6 items-end justify-end flex-col gap-y-3 py-8 mt-0">
          <div className="flex w-full justify-between items-center">
            <div className=" font-semibold text-slate-900">
              <span className="mr-2">Subtotal:</span>
            </div>
            <div className="uppercase font-medium">$ 200.00</div>
          </div>
          {/* <Link
            href={"/cart"}
            className="bg-[#001838] hover:opacity-80 uppercase tracking-tight text-white rounded flex p-3 justify-center items-center w-full font-semibold"
          >
            View Cart
          </Link> */}
           <Link href={"/checkout"} className="w-full py-2 md:py-3 rounded uppercase tracking-tight bg-[#073d30] text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-80 flex items-center gap-2 justify-center">
                Checkout
                
              </Link>
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

export default MiniCart;
