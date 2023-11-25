import React, { useEffect, useState } from "react";

const Notice = () => {
    const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      {show ? (
        <div className="bg-transparent absolute z-20 px-5 mt-2">
        <div className="flex z-20 rounded justify-between space-x-5 px-2 md:px-3 py-2  bg-[#7ce993]">
          <div className="flex space-x-5 items-center">
            <p className="flex text-sm md:font-semibold tracking-tight text-gray-800">
            We independently review everything we recommend. When you buy through our links, we may earn a commission.
            </p>
          </div>
          <div className="flex items-center space-x-5">
            {/* <button className="flex items-center text-center justify-center h-7 w-20 font-mabrybold  py-1 px-1 bg-white rounded border border-slate-800 text-xs cursor-pointer hover:bg-[#bffff4]">
              Learn more
            </button> */}
            <button className="cursor-pointer" onClick={handleClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-4 h-4 text-orange-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        </div>
      ) : (
        <>
          
        </>
      )}
    </>
  )
}

export default Notice