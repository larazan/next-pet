import React from "react";
import Image from "next/image";

import inf from "@/assets/info.png";

const Info = () => {
  const setData = [
    {
      title: "Simple, healthy recipes",
      body: "Our food is great for cats with allergies. With only 1-to-2 animal proteins in each recipe, it’s easy to avoid allergens and find options your cat will love.",
    },
    {
      title: "Grain-free & low-carb",
      body: "Cats require a very low-carb diet. That’s why our food has no fillers, grains, soy, or corn.",
    },
    {
      title: "The highest protein",
      body: "Cats are obligate carnivores, which means they need to eat plenty of meat to thrive. That’s why our recipes are packed with as much protein as possible.",
    },
    {
      title: "Variety made easy",
      body: "Choose from 16 delicious and easy-to-serve wet recipes and 3 dry recipes.",
    },
    {
      title: "For cats of all ages",
      body: "Our food is designed to nourish your cat throughout their full life, from kitten to grandcat.",
    },
  ];
  return (
    <>
      <div className="flex relative z-10 items-center overflow-hidden bg-[#f1f1f3]">
        <div className="flex w-full">
          <div className="w-1/2">
            <div className="flex flex-col space-y-4 px-10 py-8">
              {setData.map((data, index) => {
                return (
                  <div className="flex flex-col space-y-1" key={index}>
                    <div className="text-2xl font-semibold">{data.title}</div>
                    <span className="text-[17px]">{data.body}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-1/2">
            <Image src={inf} alt="" className="h-full object-cover" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
