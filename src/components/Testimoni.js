import React from "react";
import Link from "next/link";
import Image from "next/image";

import ava5 from "@/assets/ava5.png";
import ava6 from "@/assets/ava6.png";
import ava7 from "@/assets/ava7.png";
import ava8 from "@/assets/ava8.png";
import ava9 from "@/assets/ava9.png";
import ava10 from "@/assets/ava10.png";

const Testimoni = () => {
  const shout = [
    {
      name: "Flean W.",
      location: "New york",
      img: ava5,
      testimoni:
        "I've been trying to work on my Common App for a while now, and felt like my ECs were lacking a little. IvyStat helped me into volunteership that then transitioned into an internship. This was the first time I got to work alongside other peers at an actual company. My experience was very valuable and helped me build a really good college application❤️",
    },
    {
      name: "Sharon Blackwell",
      location: "New york",
      img: ava6,
      testimoni:
        "Ivy Stat made it really easy for me to apply to other freelance gig sites like Upwork. It was very hard to get into video editing without them since I didn't possess the necessary experience to showcase on these platforms.",
    },
    {
      name: "Cole A.",
      location: "New york",
      img: ava7,
      testimoni:
        "After a couple unpaid internships, it was super clear that companies just wanted to exploit child labour and look good on paper to show that they're hiring interns. Ivy Stat didn't just teach us a lot, but actually helped me start my own SEO service and even get customers connected to me. I will one day return the favour 🙏",
    },
    {
      name: "Kartik S. Kapoor",
      location: "New york",
      img: ava8,
      testimoni:
        "I was always looking to learn coding and all, but had no idea how to actually apply my skills into a real world scenario. With Ivy Stat, I could finally get a sense of direction and even got to work on a Chrome plug-in that helped me get my first ever internship ever!",
    },
    {
      name: "Tim Zhou",
      location: "New york",
      img: ava9,
      testimoni:
        "I've been working as a Target cashier for a couple months now, and this experience with Ivy Stat has really shown me a much better way to utilise my free time to make money. I'm thankful for all the tips and especially the resume I got from the program.",
    },
    {
      name: "Cerila Smith",
      location: "New york",
      img: ava10,
      testimoni:
        "Wow! This was an incredible program! From the evening calls with other students across the world to the incredible resume building activity, this program was a total success. I will greatly miss everyone at Ivy Stat and am looking forward to keep on having more internships and paving me name in the industry!!!",
    },
  ];
  return (
    <>
      <div className="relative z-10 items-center overflow-hidden bg-[#ff8dbd]">
        <div className="flex flex-col space-y-3 justify-center text-center items-center pt-8 mx-auto w-3/5 ">
          <h1 className="font-bold text-3xl text-[#1d4943]">
          The Wall of Love ❤️
          </h1>
          <span className="text-gray-900">Let's turn the spotlight on where it should be — Ivy Stat members and their experience interning with companies</span>
        </div>
        <div className="columns-1 md:columns-3 lg:columns-3 gap-6 mt-8 mb-8 mx-auto py-6 w-full px-3 md:px-0 md:w-10/12 ">
          {shout.map((data, index) => {
            return (
              <div className="mb-4 rounded-lg flex justify-center  flex-col space-y-2 px-0 py-6 bg-[#f2f6f6]" key={index}>
                <div className="flex space-x-3 px-3 w-full">
                  <div className="flex justify-center items-center">
                    <Image
                      src={data.img}
                      alt=""
                      className="rounded-full w-14"
                    />
                  </div>
                  <div className="flex flex-col leading-tight">
                    <h3 className="text-lg font-bold">{data.name}</h3>
                    <span>{data.location}</span>
                  </div>
                </div>
                <div className="flex px-3">
                  <span className="">{data.testimoni}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Testimoni;
