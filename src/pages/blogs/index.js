import React from 'react'
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
// import { Tweet } from "react-tweet";

import blog1 from "@/assets/blogs/blog1.png";
import blog2 from "@/assets/blogs/blog2.png";
import blog3 from "@/assets/blogs/blog3.png";
import blog4 from "@/assets/blogs/blog4.jpg";
import blog5 from "@/assets/blogs/blog5.png";
import blog6 from "@/assets/blogs/blog6.png";
import blog7 from "@/assets/blogs/blog7.png";
import blog8 from "@/assets/blogs/blog8.png";


import GoTop from '@/components/GoTop'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Blogs() {
  const blogs = [
    {
      title: "The Apple Watch Is the Best Smartwatch for iPhone Owners",
      url: "best-smartwatch-iphone",
      image: blog1,
    },
    {
      title: "The 32 Best Gifts for Frequent Travelers",
      url: "best-smartwatch-iphone",
      image: blog2,
    },
    {
      title: "The Gadgets We Bring on Every Trip",
      url: "best-smartwatch-iphone",
      image: blog3,
    },
    {
      title: "The best Earbuds under $50",
      url: "best-smartwatch-iphone",
      image: blog4,
    },
    {
      title: "The Apple Watch Is the Best Smartwatch for iPhone Owners",
      url: "best-smartwatch-iphone",
      image: blog5,
    },
    {
      title: "How to choose the Best running shoes for you",
      url: "best-smartwatch-iphone",
      image: blog6,
    },
    {
      title: "The Apple Watch Is the Best Smartwatch for iPhone Owners",
      url: "best-smartwatch-iphone",
      image: blog7,
    },
    {
      title: "The 16 best tech gifts for any gadget lovers",
      url: "best-smartwatch-iphone",
      image: blog8,
    },
   
  ];

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />  
      <GoTop />

      <div className="flex bg-[#f8f3e7] min-h-screen pt-5 pb-10 md:pt-[10px]">
        <div className="flex flex-row w-full">
          <div className="flex flex-1 flex-col items-center justify-center relative">
            <div className="flex flex-1 flex-col pb-18 max-w-md md:max-w-2xl ">
              
              <section className="w-full mx-auto  mt-10 md:mt-10 px-5 ">
                <Link
                  href={""}
                  className="text-3xl font-bold tracking-tighter md:text-5xl lg:text-7xl text-black hover:text-indigo-600"
                >
                  Apples New MacBook Air Is $200 More — and Probably Worth It
                </Link>
                <p className="max-w-3xl mt-6 text-lg font-medium md:text-xl lg:text-2xl text-black leading-snug">
                  Say goodbye to Canva! Create a template, integrate it into
                  your site once, and focus on creating great content.
                </p>

                <div>
                  <div className="py-6">
                    <Image src={blog8} alt="" />
                  </div>
                  {/* tweet */}
                  {/* <div className="flex min-w-0 flex-1 flex-col py-2">
                    <div className="w-full rounded p-4 bg-[##14ada8]">
                      <div className="flex flex-col space-y-1 md:space-y-2">
                        <Link
                          href={""}
                          className="my-[0.25em] mx-[0em] overflow-hidden break-words text-md md:text-lg leading-tight md:leading-tight font-semibold text-gray-900 hover:text-indigo-600"
                        >
                          Apple&apos;s iPhone 15 Event Recap: New Phones, New
                          Watches, and USB-C
                        </Link>
                        <span className="text-sm md:text-lg leading-tight md:leading-tight break-words text-justify">
                          Apple&apos;s annual fall product-launch event brought
                          few surprises but still delivered big news: The
                          company unveiled four iPhone 15 models
                        </span>
                      </div>
                      <div className="pt-2 ">
                        <Tweet
                          id="1724501306109579518"
                          className="w-1/2 md:w-full"
                        />
                      </div>
                    </div>
                    <div className="h-px bg-mercury"></div>
                  </div> */}
                  <div className="flex w-full space-x-4">
                    <div>
                      {blogs.map((data, index) => {
                        return (
                          <Link
                            className="text-tundora no-underline"
                            href="/"
                            key={index}
                          >
                            <div className="my-[1em] mx-[0em] flex md:items-center w-full bg-transparent leading-[1.25em]">
                              <Link
                                href={
                                  ""
                                }
                                className="m-0 mr-2 md:mr-5 flex aspect-[16/9] md:aspect-[16/9] h-fit flex-1 items-center justify-center"
                              >
                                <Image
                                  alt=""
                                  src={data.image}
                                  className="h-full w-full rounded object-cover"
                                  style={{ color: "transparent" }}
                                />
                              </Link>
                              <div className="flex w-2/3 md:max-w-[55%] flex-1 flex-col space-y-1 md:space-y-2">
                                <Link
                                  href={
                                    ""
                                  }
                                  className="text-gray-900 hover:text-indigo-600"
                                >
                                  <span className="my-[0.25em] mx-[0em] overflow-hidden break-words text-md md:text-lg leading-tight md:leading-tight font-semibold">
                                    {data.title}
                                  </span>
                                </Link>
                                <span className="hidden md:block text-sm md:text-lg leading-tight md:leading-tight tracking-tight break-words text-justify">
                                  Whether you&apos;re waiting for the weekend or
                                  commiserating about your job, these funny work
                                  memes will help you cope
                                </span>
                              </div>
                            </div>
                            <div className="h-px bg-mercury"></div>
                          </Link>
                        );
                      })}

                     
                    </div>
                  </div>
                </div>
                {/* load more */}
                <div className="mt-5 w-full rounded-2xl py-3 text-center bg-[#073d30] hover:opacity-80 cursor-pointer">
                  <span className="font-semibold text-white">Load more</span>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
