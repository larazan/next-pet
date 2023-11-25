import React, { useEffect, useState, useRef } from "react";

const NewsFeed = () => {
  const [show, setShow] = useState(true);
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 2500;

  const handleClick = () => {
    setShow(!show);
  };

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === news.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  const news = [
    "$50 off for your first order",
    // "Free UK Mainland Delivery on Orders Over £40",
    // "$50 off for your first order",
  ];

  return (
    <>
      {show ? (
        <div className="relative w-full overflow-hidden overflow-x-auto flex z-20 justify-center mt-0 px-3 md:px-6 py-3 bg-black">
          {news.map((ne, index) => {
            return (
              <div className="min-w-full text-center2" key={index}>
                <div
                  className="w-full flex justify-center text-sm uppercase font-semibold text-[#f3c30e]"
                  key={index}
                >
                  {ne}
                </div>
              </div>
            );
          })}
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
