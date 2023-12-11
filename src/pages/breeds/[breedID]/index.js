import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import GoTop from "@/components/GoTop";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PopularBreed from "@/components/PopularBreed";
import DropItem from "@/components/DropItem";
import BreedNav from "@/components/BreedNav";

import scottish from "@/assets/breeds/scottish.png";
import ava1 from "@/assets/ava1.svg";
import ava2 from "@/assets/ava2.svg";

import blackHair from "@/assets/icons/black-hair.svg";
import blueHair from "@/assets/icons/blue-hair.svg";
import brownHair from "@/assets/icons/brown-hair.svg";
import creamHair from "@/assets/icons/cream-hair.svg";
import gingerHair from "@/assets/icons/ginger-hair.svg";
import whiteHair from "@/assets/icons/white-hair.svg";
import blueEye from "@/assets/icons/blue-eye.svg";
import brownEye from "@/assets/icons/brown-eye.svg";
import greenEye from "@/assets/icons/green-eye.svg";
import yellowEye from "@/assets/icons/yellow-eye.svg";
import wallEye from "@/assets/icons/wall_eyes-eye.svg";
import care from "@/assets/icons/care.svg";
import idea from "@/assets/icons/idea.svg";
import origins from "@/assets/icons/origins.svg";
import personality from "@/assets/icons/personality.svg";
import physic from "@/assets/icons/physic.svg";
import price from "@/assets/icons/price.svg";

import catAffectionate from "@/assets/icons/cat-affectionate.svg";
import catCalmness from "@/assets/icons/cat-calmness.svg";
import catCatSociability from "@/assets/icons/cat-cats-sociability.svg";
import catChildrenSociability from "@/assets/icons/cat-children-sociability.svg";
import catCleverness from "@/assets/icons/cat-cleverness.svg";
import catElderlyPersonsSociability from "@/assets/icons/cat-elderly-persons-sociability.svg";
import catGluttony from "@/assets/icons/cat-gluttony.svg";
import catIndependence from "@/assets/icons/cat-independence.svg";
import catPlayful from "@/assets/icons/cat-playful.svg";
import catRunaway from "@/assets/icons/cat-runaway.svg";
import catSporty from "@/assets/icons/cat-sporty.svg";
import catSociability from "@/assets/icons/cats-sociability.svg";
import catTalkative from "@/assets/icons/cat-talkative.svg";
import catWariness from "@/assets/icons/cat-wariness.svg";

export default function Detail() {
  const [open, setOpen] = useState(false);
  const [openBehaviour, setOpenBehaviour] = useState(false);
  const [openCompatibility, setOpenCompatibility] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }

    setOpen(index);
  };

  const toggleBehaviour = (index) => {
    if (openBehaviour === index) {
      return setOpenBehaviour(null);
    }

    setOpenBehaviour(index);
  };

  const toggleCompatibility = (index) => {
    if (openCompatibility === index) {
      return setOpenCompatibility(null);
    }

    setOpenCompatibility(index);
  };

  const temperaments = [
    {
      title: "Affectionate",
      desc: "The American Bobtail will seek to bond with all members of the family and can be very affectionate.",
      image: catAffectionate,
      score: 100,
      rate: "high",
    },
    {
      title: "Playful",
      desc: "This little house cat loves to play hide and seek or fetch with their human. They won’t hesitate to chase insects that venture into the house either, or play pretend with their own.",
      image: catPlayful,
      score: 66,
      rate: "medium",
    },
    {
      title: "Calm",
      desc: "Although playful when they feel like it, they also enjoy the sofa and the warmth of the fireplace.",
      image: catCalmness,
      score: 66,
      rate: "medium",
    },
    {
      title: "Intelligent",
      desc: "As a breed that first appeared in the wild, they have all the cognitive skills to survive and fend for themself. They love learning and can even surprise their humans.",
      image: catCleverness,
      score: 100,
      rate: "high",
    },
    {
      title: "Fearful / wary of strangers",
      desc: "Although this varies from one individual to another, the American Bobtail tends to be the first to show up at the door when someone rings the bell, to find out who has come to the house.",
      image: catWariness,
      score: 33,
      rate: "low",
    },
    {
      title: "Independent",
      desc: "These cats prefer to have the company of their humans.",
      image: catIndependence,
      score: 33,
      rate: "low",
    },
  ];

  const behaviours = [
    {
      title: "Chatty",
      desc: "This cat prefers to chirp, click and coo rather than miaow.",
      image: catTalkative,
      score: 33,
      rate: "low",
    },
    {
      title: "Need for exercise / Sporty",
      desc: "The American Bobtail only requires moderate excercise, but they will want to play every day.",
      image: catSporty,
      score: 66,
      rate: "medium",
    },
    {
      title: "Tendency to run away",
      desc: "This cat tends not to run away.",
      image: catRunaway,
      score: 66,
      rate: "medium",
    },
    {
      title: "Greedy / Gluttony",
      desc: "These is not greedy cats, but the use of an interactive bowl will only do them good.",
      image: catGluttony,
      score: 66,
      rate: "medium",
    },
  ];

  const compability = [
    {
      title: "American Bobtail and cats",
      desc: "They have a good temperament and adapts rather well with other cats, but a good introduction is still necessary.",
      image: catCatSociability,
      score: 66,
      rate: "medium",
    },
    {
      title: "American Bobtail and dogs",
      desc: "Often nicknamed “dog-cat”, they will get along well with dogs, as long as they have been properly introduced to one another.",
      image: catSociability,
      score: 100,
      rate: "high",
    },
    {
      title: "American Bobtail and children",
      desc: "Despite appearances, this cat is very gentle and appreciates the presence of children, as long as there is supervision to ensure playing doesn’t get too intense.",
      image: catChildrenSociability,
      score: 100,
      rate: "high",
    },
    {
      title: "American Bobtail and the elderly",
      desc: "If good care is taken to select an individual whose character is suited to the elderly person in question, some American Bobtails can become their perfect companion.",
      image: catElderlyPersonsSociability,
      score: 66,
      rate: "medium",
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

      <div className="flex flex-col bg-[#f8f3e7] min-h-screen relative2">
        <div className="bg-[#FFE5DD] py-5 mb-0">
          <h1 className="relative mx-3 md:mx-auto text-3xl md:text-5xl md:leading-[60px] max-w-3xl m-auto font-semibold text-center mt-4 sm:mt-6 mb-5 sm:mb-0">
            Scottish Fold
          </h1>

          <a href="" className="flex items-center justify-center sm:hidden">
            <div>
              <div className="border-white rounded-full border-3 w-10 h-10 roundedShadow">
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: "0px",
                    margin: "0px",
                    padding: "0px",
                    position: "relative",
                    maxWidth: "100%",
                  }}
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: "0px",
                      margin: "0px",
                      padding: "0px",
                      maxWidth: "100%",
                    }}
                  >
                    <Image
                      alt=""
                      aria-hidden="true"
                      src={ava1}
                      className="rounded-full "
                      style={{
                        display: "block",
                        maxWidth: "100%",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: "0px",
                        margin: "0px",
                        padding: "0px",
                      }}
                    />
                  </span>
                </span>
              </div>
            </div>
            <p className="text-sm font-semibold text-[#404040] ml-2">
              Annanya Chaturvedi
            </p>
          </a>
          <div className="mt-4 sm:mt-6 text-center text-[#565656] flex justify-center items-center sm:divide-x relative sm:space-x-3 divide-[#CACACA]">
            <a
              href=""
              className="items-center justify-center hidden font-medium sm:flex"
            >
              <div>
                <div className="border-white rounded-full border-3 hidden text-[20px] leading-9 text-center w-11 h-11 left-11 -top-6 roundedShadow sm:block">
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: "0px",
                      margin: "0px",
                      padding: "0px",
                      position: "relative",
                      maxWidth: "100%",
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: "0px",
                        margin: "0px",
                        padding: "0px",
                        maxWidth: "100%",
                      }}
                    >
                      <Image
                        alt=""
                        aria-hidden="true"
                        src={ava1}
                        className="rounded-full "
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: "0px",
                          margin: "0px",
                          padding: "0px",
                        }}
                      />
                    </span>
                  </span>
                </div>
              </div>
              <p className="text-sm font-semibold text-[#404040] sm:ml-5 hidden sm:block">
                Annanya Chaturvedi
              </p>
            </a>
            <div className="flex items-center pl-0 sm:pl-3 border-r pr-3 sm:pr-0 border-[#CACACA]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_238_253)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.08333 0.666626C6.08333 0.252412 5.74754 -0.083374 5.33333 -0.083374C4.91912 -0.083374 4.58333 0.252412 4.58333 0.666626V1.1679C2.39564 2.1441 0.827616 4.24638 0.609016 6.74499C0.5833 7.03892 0.583311 7.37848 0.583329 7.95321L0.58333 7.99996L0.583329 8.04671C0.583311 8.62144 0.5833 8.961 0.609016 9.25493C0.894515 12.5182 3.48176 15.1054 6.74503 15.3909C7.03896 15.4167 7.37853 15.4166 7.95327 15.4166L8 15.4166L8.04673 15.4166C8.62147 15.4166 8.96103 15.4167 9.25497 15.3909C12.5182 15.1054 15.1055 12.5182 15.391 9.25493C15.4167 8.96099 15.4167 8.62143 15.4167 8.04669V7.99996V7.95323C15.4167 7.37849 15.4167 7.03892 15.391 6.74499C15.1724 4.24638 13.6043 2.1441 11.4167 1.1679V0.666626C11.4167 0.252412 11.0809 -0.083374 10.6667 -0.083374C10.2524 -0.083374 9.91666 0.252412 9.91666 0.666626V0.69974C9.69963 0.658998 9.47889 0.628569 9.25497 0.608979C8.96104 0.583263 8.62148 0.583274 8.04675 0.583292L8 0.583293L7.95325 0.583292C7.37852 0.583274 7.03896 0.583263 6.74503 0.608979C6.5211 0.628569 6.30036 0.658998 6.08333 0.69974V0.666626ZM9.91666 2.66663V2.23383C9.65952 2.17098 9.39487 2.12695 9.12423 2.10327C8.90411 2.08401 8.63494 2.08329 8 2.08329C7.36505 2.08329 7.09589 2.08401 6.87576 2.10327C6.60513 2.12695 6.34047 2.17098 6.08333 2.23383V2.66663C6.08333 3.08084 5.74754 3.41663 5.33333 3.41663C4.98139 3.41663 4.68606 3.17421 4.60522 2.84725C3.21603 3.69303 2.25298 5.16494 2.10331 6.87572C2.08405 7.09585 2.08333 7.36502 2.08333 7.99996C2.08333 8.6349 2.08405 8.90407 2.10331 9.12419C2.32536 11.6623 4.33767 13.6746 6.87576 13.8966C7.09589 13.9159 7.36505 13.9166 8 13.9166C8.63494 13.9166 8.90411 13.9159 9.12423 13.8966C11.6623 13.6746 13.6746 11.6623 13.8967 9.12419C13.9159 8.90407 13.9167 8.6349 13.9167 7.99996C13.9167 7.36502 13.9159 7.09585 13.8967 6.87572C13.747 5.16493 12.784 3.69303 11.3948 2.84724C11.3139 3.17421 11.0186 3.41663 10.6667 3.41663C10.2524 3.41663 9.91666 3.08084 9.91666 2.66663ZM4.66666 4.58329C4.25245 4.58329 3.91666 4.91908 3.91666 5.33329C3.91666 5.74751 4.25245 6.08329 4.66666 6.08329H11.3333C11.7475 6.08329 12.0833 5.74751 12.0833 5.33329C12.0833 4.91908 11.7475 4.58329 11.3333 4.58329H4.66666ZM6 8.66663C6 9.03481 5.70152 9.33329 5.33333 9.33329C4.96514 9.33329 4.66666 9.03481 4.66666 8.66663C4.66666 8.29844 4.96514 7.99996 5.33333 7.99996C5.70152 7.99996 6 8.29844 6 8.66663ZM5.33333 12C5.70152 12 6 11.7015 6 11.3333C6 10.9651 5.70152 10.6666 5.33333 10.6666C4.96514 10.6666 4.66666 10.9651 4.66666 11.3333C4.66666 11.7015 4.96514 12 5.33333 12ZM8.66666 11.3333C8.66666 11.7015 8.36819 12 8 12C7.63181 12 7.33333 11.7015 7.33333 11.3333C7.33333 10.9651 7.63181 10.6666 8 10.6666C8.36819 10.6666 8.66666 10.9651 8.66666 11.3333ZM10.6667 12C11.0349 12 11.3333 11.7015 11.3333 11.3333C11.3333 10.9651 11.0349 10.6666 10.6667 10.6666C10.2985 10.6666 10 10.9651 10 11.3333C10 11.7015 10.2985 12 10.6667 12ZM8.66666 8.66663C8.66666 9.03481 8.36819 9.33329 8 9.33329C7.63181 9.33329 7.33333 9.03481 7.33333 8.66663C7.33333 8.29844 7.63181 7.99996 8 7.99996C8.36819 7.99996 8.66666 8.29844 8.66666 8.66663ZM10.6667 9.33329C11.0349 9.33329 11.3333 9.03481 11.3333 8.66663C11.3333 8.29844 11.0349 7.99996 10.6667 7.99996C10.2985 7.99996 10 8.29844 10 8.66663C10 9.03481 10.2985 9.33329 10.6667 9.33329Z"
                    fill="#22272F"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_238_253">
                    <rect width="16" height="16" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              <p className="text-xs text-[#404040] leading-5 pl-2">
                12 June 2023
              </p>
            </div>
            <div className="flex items-center pl-3">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.00001 0.583374C3.9039 0.583374 0.583344 3.90393 0.583344 8.00004C0.583344 12.0962 3.9039 15.4167 8.00001 15.4167C12.0961 15.4167 15.4167 12.0962 15.4167 8.00004C15.4167 3.90393 12.0961 0.583374 8.00001 0.583374ZM2.08334 8.00004C2.08334 4.73236 4.73233 2.08337 8.00001 2.08337C11.2677 2.08337 13.9167 4.73236 13.9167 8.00004C13.9167 11.2677 11.2677 13.9167 8.00001 13.9167C4.73233 13.9167 2.08334 11.2677 2.08334 8.00004ZM8.75001 5.33337C8.75001 4.91916 8.41422 4.58337 8.00001 4.58337C7.5858 4.58337 7.25001 4.91916 7.25001 5.33337V8.00004C7.25001 8.2508 7.37533 8.48498 7.58398 8.62408L9.58398 9.95741C9.92863 10.1872 10.3943 10.094 10.624 9.7494C10.8538 9.40475 10.7607 8.9391 10.416 8.70934L8.75001 7.59865V5.33337Z"
                  fill="#404040"
                ></path>
              </svg>
              <p className="text-xs text-[#404040] leading-5 pl-2">11 Mins</p>
            </div>
          </div>
        </div>
        <BreedNav />

        <div className="flex flex-row w-full">
          <div className="flex flex-1 flex-col items-center justify-center relative">
            <div className="flex flex-1 flex-col pb-18 max-w-md md:max-w-2xl ">
              <section className="w-full mx-auto  mt-0 md:mt-4 px-5 markdown-blog">
                <div className="flex flex-col md:flex-row w-full items-center pb-4">
                  
                  <nav className="w-full md:w-1/2  flex text-sm my-1 " aria-label="Breadcrumb">
                    <ol className="list-none p-0 inline-flex">
                      <li className="flex items-center">
                        <a
                          href="#"
                          className="uppercase text-gray-900 font-bold"
                        >
                          CAT BREEDS
                        </a>
                        <svg
                          className="fill-current text-gray-900 w-2 h-2 mx-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                        >
                          <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
                        </svg>
                      </li>
                      <li>
                        <span className="text-gray-900 uppercase font-semibold">
                          Scottish Fold
                        </span>
                        
                      </li>
                      
                    </ol>
                  </nav>

                  <div className="w-full md:w-1/2 md:justify-end flex font-mabry">
                    <div className=" flex justify-between items-center text-base md:text-sm text-green-500 font-bold">
                      <div className="flex justify-end space-x-2">
                        <button>
                          <div className="flex rounded-full border py-1.5 px-1.5 shadow-menu border-gray-800 bg-[#1877f2] hover:bg-[#1877f2]  fill-[#1877f2] hover:fill-white  items-center justify-between md:space-x-1 hover:shadow-blue-500/50 ">
                            <svg
                              className="w-5 h-5 md:w-4 md:h-4 text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </div>
                        </button>
                        <button>
                          <div className="flex rounded-full border py-1.5 px-1.5 shadow-menu border-gray-800 bg-[#1d9bf0] hover:bg-[#1d9bf0] fill-[#1d9bf0] hover:fill-white  items-center justify-between md:space-x-1 hover:shadow-sky-500/50">
                            <svg
                              className="w-5 h-5 md:w-4 md:h-4 text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                            </svg>
                          </div>
                        </button>

                        <button>
                          <div className="flex rounded-full border py-1.5 px-1.5 shadow-menu border-gray-800 bg-white hover:bg-white text-black hover:fill-white  items-center justify-between space-x-1 hover:shadow-sky-500/50">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-5 h-5 md:w-4 md:h-4 "
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                              />
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <Image
                    src={scottish}
                    alt=""
                    className="w-full border object-cover shadow"
                  />
                </div>
                <article>
                  <p>
                    The American Bobtail is the result of a genetic mutation.
                    The breed appeared spontaneously, with no human
                    intervention. They are by no means a crossbreed, and have no
                    relation to the Japanese Bobtail. Humans simply selected
                    individuals with the same characteristically shorter tail,
                    in order to define the features of the breed and grant it a
                    pedigree. So while this Lynx-like cat may look like a wild
                    feline, this is only in appearance: they are purely domestic
                    cats at heart.
                  </p>
                </article>

                <article>
                  <section name="origin">
                    <div className="flex items-center space-x-2">
                      <Image src={origins} alt="" />
                      <span className="text-2xl font-semibold">
                        Origins & history
                      </span>
                    </div>
                    <p>
                      The American Bobtail is a very recent natural breed.
                      Legend has it that the patriarch of the breed is a brown
                      tabby kitten with a tiny tail that was wandering around a
                      reserve in Arizona in the late sixties. A young American
                      couple on holiday, the Sanders, fell under his spell. They
                      named him Yodi and brought him home with them in Iowa.
                      Yodi wooed the family&apos;s cat, a colour-pointed kitten
                      without a pedigree, who then gave birth to a litter of
                      short-tailed kittens. A friend of the Sanders was
                      intrigued by these peculiar kittens and decided to turn
                      them into an official breed. Domestic cats with the
                      characteristic short tail were found throughout the United
                      States and Canada, and their breeders simply helped nature
                      along by breeding these cats together. Along the way, a
                      long-haired cat was introduced into the lineage, which led
                      to the appearance of a variant of the American Bobtail
                      with mid-length hair.
                    </p>
                    <p>
                      It can improve your overall mood and help you feel happier
                      and more positive. Plus, taking care of yourself can help
                      you be more productive and focused, leading to better
                      relationships with the people around you. Self-care is
                      truly the gift that keeps on giving!
                    </p>
                  </section>
                  <section name="physical">
                    <div className="flex items-center space-x-2">
                      <Image src={physic} alt="" />
                      <span className="text-2xl font-semibold">
                        Physical characteristics
                      </span>
                    </div>
                    <div className="flex py-3 flex-col space-y-1">
                      <div>
                        <span className="text-[18px] font-bold">
                          Coat colour
                        </span>
                      </div>
                      <div className="flex flex-wrap space-x-2">
                        <div className="w-16 flex flex-col space-y-1 items-center justify-center">
                          <Image src={blackHair} alt="" />
                          <span>Black</span>
                        </div>
                        <div className="w-16 flex flex-col space-y-1 items-center justify-center">
                          <Image src={blueHair} alt="" />
                          <span>Blue</span>
                        </div>
                        <div className="w-16 flex flex-col space-y-1 items-center justify-center">
                          <Image src={brownHair} alt="" />
                          <span>Brown</span>
                        </div>
                        <div className="w-16 flex flex-col space-y-1 items-center justify-center">
                          <Image src={creamHair} alt="" />
                          <span>Cream</span>
                        </div>
                        <div className="w-16 flex flex-col space-y-1 items-center justify-center">
                          <Image src={gingerHair} alt="" />
                          <span>Red</span>
                        </div>
                        <div className="w-16 flex flex-col space-y-1 items-center justify-center">
                          <Image src={whiteHair} alt="" />
                          <span>White</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex py-3 flex-col space-y-1">
                      <div>
                        <span className="text-[18px] font-bold">
                          Eye colour
                        </span>
                      </div>
                      <div className="flex flex-wrap space-x-2">
                        <div className="w-16 flex flex-col space-y-1 items-center justify-center">
                          <Image src={blueEye} alt="" />
                          <span>Blue</span>
                        </div>
                        <div className="w-16 flex flex-col space-y-1 items-center justify-center">
                          <Image src={greenEye} alt="" />
                          <span>Green</span>
                        </div>
                        <div className="w-16 flex flex-col space-y-1 items-center justify-center">
                          <Image src={yellowEye} alt="" />
                          <span>Yellow</span>
                        </div>
                        <div className="w-16 flex flex-col space-y-1 items-center justify-center">
                          <Image src={brownEye} alt="" />
                          <span>Brown</span>
                        </div>
                        <div className="w-16 flex flex-col space-y-1 items-center justify-center">
                          <Image src={wallEye} alt="" />
                          <span>Odd</span>
                        </div>
                      </div>
                    </div>
                    <h3>Description</h3>
                    <p>
                      The American Bobtail is a medium to large, semi-cobby cat.
                      Their sturdy bone structure and well-developed
                      musculature, along with their broad chest and slightly
                      arched back (due to longer hind than front legs), give
                      them the appearance of a small Lynx. Their head is broad
                      with prominent cheeks and a strong chin, and a
                      triangular-shaped muzzle a little wider than it is long.
                      Their eyes are big and slightly almond-shaped. Their ears,
                      which are average sized and sit quite low on the skull,
                      each have a small tuft of fur at the end known as “Lynx
                      tips”. The variety with mid-length fur also have tufts of
                      fur between the toes.
                    </p>
                    <p>
                      But the main feature of this cat is of course their tail!
                      Never absent, but always short, the maximum length is
                      generally towards the tip of the tarsus (the hock). It is
                      covered with fairly long, thick and shaggy fur. It is also
                      extremely expressive, and will hide nothing about the
                      emotional state of its owner.
                    </p>
                  </section>

                  <section name="temperament">
                    <div className="mb-10">
                      <div className="flex items-center space-x-2">
                        <Image src={personality} alt="" />
                        <span className="text-2xl font-semibold">
                          Temperament
                        </span>
                      </div>

                      <dl className="w-full mt-2 space-y-3 divide-y divide-gray-300">
                        {temperaments.map((data, index) => {
                          return (
                            <DropItem
                              key={index}
                              open={index === open}
                              title={data.title}
                              desc={data.desc}
                              image={data.image}
                              score={data.score}
                              rate={data.rate}
                              toggle={() => toggle(index)}
                            />
                          );
                        })}
                      </dl>

                      <h3>Behaviour of the American Bobtail</h3>
                      <dl className="w-full mt-2 space-y-3 divide-y divide-gray-300">
                        {behaviours.map((data, index) => {
                          return (
                            <DropItem
                              key={index}
                              open={index === openBehaviour}
                              title={data.title}
                              desc={data.desc}
                              image={data.image}
                              score={data.score}
                              rate={data.rate}
                              toggle={() => toggleBehaviour(index)}
                            />
                          );
                        })}
                      </dl>

                      <h3>Compatibility</h3>
                      <dl className="w-full mt-2 space-y-3 divide-y divide-gray-300">
                        {compability.map((data, index) => {
                          return (
                            <DropItem
                              key={index}
                              open={index === openCompatibility}
                              title={data.title}
                              desc={data.desc}
                              image={data.image}
                              score={data.score}
                              rate={data.rate}
                              toggle={() => toggleCompatibility(index)}
                            />
                          );
                        })}
                      </dl>
                    </div>
                  </section>

                  <section name="price" className="px-5 py-4 rounded-lg bg-[#7ce993]">
                    <div className="flex items-center space-x-2">
                      <Image src={price} alt="" />
                      <span className="text-2xl font-semibold">Price</span>
                    </div>

                    <p>
                      The average purchase price varies between £450 and £750.
                      Lineage, age, sex, color, etc. are all factors that can
                      change the price. For the monthly budget, the required
                      spend will be around £25 to £35 per month.
                    </p>
                  </section>

                  <section name="health">
                    <div className="flex items-center space-x-2">
                      <Image src={care} alt="" />
                      <span className="text-2xl font-semibold">
                        Health of the American Bobtail
                      </span>
                    </div>
                    <h3>Life expectancy</h3>
                    <p>They live on average 15 years or more.</p>
                    <h3>Strong / robust</h3>
                    <p>
                      A true North American cat, they are robust and resistant.
                    </p>

                    <h3>Tendency to put on weight</h3>
                    <p>
                      Being a little on the lazy side, they can be more prone to
                      chubbiness.
                    </p>

                    <h3>Common illnesses</h3>
                    <p>
                      Reputed for their iron constitution, American Bobtails are
                      rarely sick. They are not, however, immune to the health
                      problems found in all cats. They have a certain
                      vulnerability to periodontal disease (gingivitis and
                      tartar), so preventative measures and dental care are
                      recommended. There are also certain illnesses associated
                      with this particular breed:
                    </p>

                    <ul className="list-disc ml-4">
                      <li>
                        Hip dysplasia, which causes a lameness of one or more
                        hind legs.
                      </li>
                      <li>
                        There is also a slightly higher risk of spine problems
                        due to the genetic mutation that shortened the tail.
                      </li>
                    </ul>

                    <h3>Reproduction</h3>
                    <p>
                      There are no unique characteristics about the reproduction
                      of this breed.
                    </p>
                  </section>
                </article>
              </section>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full">
        <div className="flex flex-1 flex-col items-center justify-center relative">
        <div className="flex pb-18 max-w-sm md:max-w-2xl ">
        <PopularBreed />
        </div>
        </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
