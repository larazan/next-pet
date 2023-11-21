import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "@/assets/logo.png";
import NavLinks from "./NavLinks";
import Autocomplete from "./Autocomplete";

const Header = () => {
  const [show, setShow] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  const clickMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <header className="fixed2 z-20 flex h-10 md:h-14 w-full top-0 md:m-0 px-4 md:px-6 py-6 md:py-3  items-center justify-between bg-[#fbd718] shadow2">
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
              <div
                className={` ${
                  openMenu === false ? "hidden" : "flex flex-col"
                }   z-30 fixed top-0 left-0 text-white text-4xl font-bold  flex-1 flex-col justify-between`}
              >
                <aside className="bg-white w-[300px] h-[100vh] py-6 z-50">
                  <button
                    className="absolute flex top-1 right-1 rounded text-gray-800 px-1 py-1 cursor-pointer"
                    onClick={clickMenu}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                      />
                    </svg>
                  </button>
                  <nav className="mt-3 space-y-7 text-sm">
                    <div className="px-2 space-y-2">
                      <div className="flex flex-col space-y-1 text-[20px]">
                        <Link
                          rel="noopener noreferrer"
                          href="/category"
                          className="px-3 py-1 rounded text-green-500 hover:bg-green-500 hover:text-white"
                        >
                          Recipients
                        </Link>
                        <Link
                          rel="noopener noreferrer"
                          href="/detail"
                          className="px-3 py-1 rounded text-pink-500 hover:bg-pink-500 hover:text-white"
                        >
                          Occasions
                        </Link>
                        <Link
                          rel="noopener noreferrer"
                          href="reviews"
                          className="px-3 py-1 rounded text-blue-500 hover:bg-blue-500 hover:text-white"
                        >
                          Interests
                        </Link>
                        <a
                          rel="noopener noreferrer"
                          href="#"
                          className="px-3 py-1 rounded text-indigo-500 hover:bg-indigo-500 hover:text-white"
                        >
                          Popular
                        </a>
                      </div>
                    </div>
                    <div className="px-6 space-y-4">
                      <h2 className="text-[18px] font-semibold text-gray-400">
                        Review
                      </h2>
                      <div className="flex flex-col space-y-3 text-[14px] text-gray-600 capitalize">
                        <a
                          rel="noopener noreferrer"
                          href="#"
                          className="hover:text-indigo-500"
                        >
                          electronic
                        </a>
                        <a
                          rel="noopener noreferrer"
                          href="#"
                          className="hover:text-indigo-500"
                        >
                          kitchen
                        </a>
                        <a
                          rel="noopener noreferrer"
                          href="#"
                          className="hover:text-indigo-500"
                        >
                          home & garden
                        </a>
                        <a
                          rel="noopener noreferrer"
                          href="#"
                          className="hover:text-indigo-500"
                        >
                          health & leisure
                        </a>
                        <a
                          rel="noopener noreferrer"
                          href="#"
                          className="hover:text-indigo-500"
                        >
                          tech
                        </a>
                        <a
                          rel="noopener noreferrer"
                          href="#"
                          className="hover:text-indigo-500"
                        >
                          baby & kid
                        </a>
                        <a
                          rel="noopener noreferrer"
                          href="#"
                          className="hover:text-indigo-500"
                        >
                          style
                        </a>
                      </div>
                    </div>

                    <div className="px-6 space-y-4">
                      <Link
                        href={""}
                        className="text-[18px] font-semibold text-gray-800 hover:text-indigo-600"
                      >
                        Deals
                      </Link>
                    </div>
                  </nav>
                </aside>
                <div className="opacity-50 fixed inset-0 z-30 bg-black"></div>
              </div>
            </section>
            <div className="w-4/6 md:w-full flex justify-center items-center">
              <Link href={"/"}>
                <Image src={logo} alt="" />
              </Link>
            </div>
            <div className="w-1/6 flex justify-end md:hidden">
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
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-user-hexagon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z" />
                <path d="M6.201 18.744a4 4 0 0 1 3.799 -2.744h4a4 4 0 0 1 3.798 2.741" />
                <path d="M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
              </svg>
            </button>
            <button>
              <svg
                aria-hidden="true"
                class="icon icon-cart"
                focusable="false"
                viewBox="0 0 24 24"
                role="img"
                width="24px"
                height="24px"
                fill="none"
              >
                <path
                  stroke="currentColor"
                  stroke-width="1.5"
                  d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"
                ></path>
              </svg>
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
    </>
  );
};

export default Header;
