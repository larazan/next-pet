import React, { useState } from "react";

const CookieConsent = () => {
    const [isShow, setIsShow] = useState(true);

  const handleClick = () => {
    setIsShow(!isShow);
  };

  return (
    <>
      {isShow ? (
        <>
        <div className="fixed left-2 bottom-0 z-50 ">
          <div className="fixed sm:left-4 bottom-3 border rounded-lg bg-white shadow-2xl w-full sm:w-1/2 xl:w-1/4 max-w-[300px] md:max-w-[450px] overflow-hidden">
            <div className="">
              <div className="relative overflow-hidden px-4 md:px-8 pt-4 md:pt-8">
                <div
                  width="80"
                  height="77"
                  className="absolute -top-10 -right-10 text-yellow-500"
                >
                  <svg
                    width="120"
                    height="119"
                    viewBox="0 0 120 119"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.3"
                      d="M6.38128 49.1539C3.20326 32.893 13.809 17.1346 30.0699 13.9566L70.3846 6.07751C86.6455 2.89948 102.404 13.5052 105.582 29.7661L113.461 70.0808C116.639 86.3417 106.033 102.1 89.7724 105.278L49.4577 113.157C33.1968 116.335 17.4384 105.729 14.2604 89.4686L6.38128 49.1539Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="text-base md:text-2xl flex flex-col pb-4 text-gray-800">
                  <small>Hello there..</small>
                  <span className="text-lg md:text-3xl font-bold">
                    We are the Cookies !
                  </span>
                </div>
                <div className="pb-4 text-sm md:text-base text-gray-800 leading-tight md:leading-snug">
                  <p>
                  By using this website, you agree to our use of cookies. We use cookies to provide you with a great experience and to help our website run effectively.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-2 mx-auto w-11/12 pb-7">
              <div onClick={handleClick} className="flex justify-center text-sm md:text-base w-full py-2 rounded-md bg-blue-700 hover:bg-blue-800 cursor-pointer text-white font-semibold">
                <span>Accept</span>
              </div>
              <div onClick={handleClick} className="flex justify-center text-sm md:text-base w-full py-2 border rounded-md bg-white hover:bg-gray-50 cursor-pointer text-gray-800 font-semibold">
                <span>Decline</span>
              </div>
            </div>

            {/* <div className="w-full flex justify-center items-center border-t border-solid border-gray-200">
              <button onClick={handleClick} className="border-r border-gray-200 flex-1 px-4 py-3 text-gray-500 hover:text-white hover:bg-red-400 duration-150">
                No thanks !
              </button>
              <button className="flex-1 px-4 py-3 text-gray-500 hover:text-white hover:bg-green-400 duration-150">
                Off course
              </button>
            </div> */}
          </div>

          {/* <button className="fixed left-4 bottom-2 uppercase text-sm px-4 py-3 bg-gray-900 text-white rounded-full">
            Cookies
          </button> */}
        </div>
        <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : (
        <></>
      )}
    </>
  )
}

export default CookieConsent