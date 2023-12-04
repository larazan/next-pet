import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "@/assets/logo.png";
import NavLinks from "./NavLinks";
import Autocomplete from "./Autocomplete";
import MiniCart from "./MiniCart";
import UserMenu from "./UserMenu";
import Menu from "./Menu";

const Header = () => {
  const totalQTY = useState(12);
  const [show, setShow] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const clickMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <header className="fixed2 z-20 flex h-14 md:h-16 w-full top-0 md:m-0 px-4 md:px-6 py-6 md:py-3  items-center justify-between bg-[#fbd718] shadow2">
        <div className="flex w-full md:w-1/5 justify-between ">
          <div className="flex justify-between w-full md:w-[100px]">
            <section className="w-1/6">
              <button className=" h-8 w-8 md:hidden" onClick={clickMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </button>
              
            </section>
            <div className="w-4/6 md:w-full flex justify-center items-center">
              <Link href={"/"}>
                <Image src={logo} alt="" className="w-28 md:w-40" />
              </Link>
            </div>
            <div className="w-1/6 flex space-x-1 items-center justify-end md:hidden">
            <div className="">
        <button className="flex relative" onClick={() => setIsOpen(!isOpen)} >
              <svg
                aria-hidden="true"
                className="icon icon-cart"
                focusable="false"
                viewBox="0 0 24 24"
                role="img"
                width="28px"
                height="28px"
                fill="none"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="1.5"
                  d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"
                ></path>
              </svg>
              <div className="absolute text-center top-2 right-[20%] w-4 h-4 text-[0.70rem] leading-tight tracking-tighter font-bold flex items-center justify-center cursor-pointer text-slate-900 " >
                <span className="font-bold">{totalQTY}</span>
              </div>
            </button>
        </div>
              <div
                id="search-toggle"
                className="flex items-center cursor-pointer"
                onClick={handleClick}
              >
                <svg
                  className="fill-current text-gray-700 w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="heroicon-ui"
                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="w-3/5 hidden  md:flex items-center bg-[#ebebeb] rounded-lg">
        <div className="pl-2">
          <svg
            className="fill-current text-gray-500 w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              className="heroicon-ui"
              d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
            />
          </svg>
        </div>
        <input
          className="w-full rounded-2xl bg-[#ebebeb] text-gray-700 leading-tight focus:outline-none py-2 px-2"
          id="search"
          type="text"
          placeholder="Search something"
        />
      </div> */}

        
        <Autocomplete />
        
        <div className="w-1/5 hidden md:flex justify-end">
          <div className="flex space-x-3 items-center">
            <UserMenu />
            <button className="flex relative" onClick={() => setIsOpen(!isOpen)} >
              <svg
                aria-hidden="true"
                className="icon icon-cart"
                focusable="false"
                viewBox="0 0 24 24"
                role="img"
                width="28px"
                height="28px"
                fill="none"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="1.5"
                  d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"
                ></path>
              </svg>
              <div className="absolute text-center top-2 right-[20%] w-4 h-4 text-[0.70rem] leading-tight tracking-tighter font-bold flex items-center justify-center cursor-pointer text-slate-900 " >
                <span className="font-bold">{totalQTY}</span>
              </div>
            </button>
            <NavLinks />

            {/* <Notification /> */}

            {/* <UserMenu /> */}
          </div>
        </div>
      </header>

      {show ? (
        <div
          className="relative w-full md:hidden bg-white shadow-xl"
          id="search-content"
        >
          <div className="container mx-auto py-2 px-2 text-black">
            <input
              id="searchfield"
              type="search"
              placeholder="Search..."
              autofocus="autofocus"
              className="w-full text-grey-800 transition focus:outline-none focus:border-transparent p-2 appearance-none leading-normal text-xl lg:text-2xl"
            />
          </div>
        </div>
      ) : (
        <></>
      )}
      
      <MiniCart isOpen={isOpen} handleClose={handleClose} setIsOpen={setIsOpen} />
      <Menu openMenu={openMenu} clickMenu={clickMenu} setOpenMenu={setOpenMenu} />
    </>
  );
};

export default Header;
