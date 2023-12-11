import React from "react";
import Image from "next/image";
import { Tabs, Tab } from "./Tabs";

import salmon from "@/assets/salmon.png"

const Ingredient = () => {
  return (
    <div className="flex relative z-10 items-center overflow-hidden bg-white">
      <div className="flex justify-between w-full py-6 md:py-10">
        <Tabs>
          <Tab label="Ingredients">
            <div className="flex w-full py-4">
              <div className="w-1/3">
                <Image src={salmon} alt="" className="w-60" />
              </div>
              <div className="w-1/3 flex flex-col space-y-2">
                <div className="text-center">
                  <h3 className="text-md md:text-lg font-semibold">Salmon</h3>
                  <p className="text-md md:text-lg">92%</p>
                </div>
                <div className="text-center">
                  <h3 className="text-md md:text-lg font-semibold">Bone Broth</h3>
                  <p className="text-md md:text-lg">3%</p>
                </div>
                <div className="text-center">
                  <h3 className="text-md md:text-lg font-semibold">Natural Preservatives</h3>
                  <p className="text-md md:text-lg">5%</p>
                </div>
              </div>
              <div className="w-1/3">
                <p className="text-md md:text-lg">
                Salmon, vegetable glycerin (a natural preservative), chicken bone broth, rosemary extract (a natural preservative).
                </p>
              </div>
            </div>
          </Tab>
          <Tab label="Feeding Guidelines">
            <div className="py-4">
              <div className="w-1/2">
                <p className="text-gray-700 text-md md:text-lg">
                  Cat Person’s Salmon Savory Chews are intended for intermittent
                  or supplemental feeding only. This product may be fed daily as
                  a treat or topper to Adult cats along with a complete and
                  balanced cat food. Do not feed to Kittens.
                </p>
              </div>
            </div>
          </Tab>
          <Tab label="Calorie Content">
            <div className="py-4 w-full">
              <div className="w-1/2">
                <h3 className="text-md md:text-lg font-bold">Calorie Content</h3>
                <p>This diet contains 4,203 kcal ME/kg; 2.5 kcal ME/treat.</p>
              </div>
            </div>
          </Tab>
          <Tab label="Guaranteed Analysis">
            <div className="flex py-4 w-full">
              <div className="w-1/2 flex flex-col space-y-3">
                <div>
                  <h3 className="text-md md:text-lg font-medium ">Protein</h3>
                  <p className="text-gray-700">(min.) 46.0%</p>
                </div>
                <div>
                  <h3 className="text-md md:text-lg font-medium">Fat</h3>
                  <p className="text-gray-700">(min.) 20.0%</p>
                </div>
              </div>
              <div className="w-1/2 flex flex-col space-y-3">
                <div>
                  <h3 className="text-md md:text-lg font-medium ">Fiber</h3>
                  <p className="text-gray-700">(min.) 1.5%</p>
                </div>
                <div>
                  <h3 className="text-md md:text-lg font-medium">Moisture</h3>
                  <p className="text-gray-700">(max.) 18.0%</p>
                </div>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Ingredient;
