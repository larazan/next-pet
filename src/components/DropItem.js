import React from "react";
import Image from "next/image";

const DropItem = ({ open, toggle, title, desc, image, score, rate }) => {
  return (
    <div className="w-full pt-4">
      <dt className="w-full text-[16px]">
        <button
          className="flex items-start justify-between w-full text-left text-gray-400"
          id="headlessui-disclosure-button-11"
          type="button"
          aria-expanded="true"
          aria-controls="headlessui-disclosure-panel-12"
          onClick={toggle}
        >
          <span className="font-medium text-gray-900">{title}</span>
          <span className="flex items-center ml-6 h-7">
            <span className="text-primary font-normal text-2xl">
              {open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-800"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-800"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              )}
            </span>
          </span>
        </button>
      </dt>
      {open ? (
        <dd className="pr-12 mt-2" id="headlessui-disclosure-panel-12">
          <div className="flex flex-col space-y-1">
            <div className="flex justify-end">
              <div className="text-end">
                <span className="text-[1.2rem] font-bold font-poppins text-right">
                  {score}%
                </span>
                <div className={`rate-bar rate-bar--${rate}`}>
                  <div
                    className="rate-bar__bar"
                    style={{ width: `${score}%` }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="flex items-center w-full space-x-8">
              <div className="w-1/3">
                <Image src={image} alt="" className="w-40" />
              </div>
              <p className="text-base text-gray-700">
                <div>{desc}</div>
              </p>
            </div>
          </div>
        </dd>
      ) : (
        <></>
      )}
    </div>
  );
};

export default DropItem;
