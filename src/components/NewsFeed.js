import React, { useEffect, useState } from "react";

const NewsFeed = () => {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      {show ? (
        <div className="relative flex z-20 justify-center mt-0 px-3 md:px-6 py-3 bg-black">
          <div className="flex space-x-5 items-center justify-center text-center">
            <p className="flex text-sm uppercase font-semibold text-[#f3c30e]">
              $50 off for your first order
            </p>
          </div>
          <div className="absolute right-6 top-3 flex items-center space-x-5">
            <button className="cursor-pointer" onClick={handleClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 text-[#f3c30e]"
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
      ) : (
        <>
          <div className="mt-0"></div>
        </>
      )}
    </>
  );
};

export default NewsFeed;
