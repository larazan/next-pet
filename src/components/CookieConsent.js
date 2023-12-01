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
        <div className="fixed left-2 bottom-0 z-40 ">
          <div className="fixed sm:left-2 bottom-2 rounded-lg bg-[#fbd718] shadow-2xl w-full sm:w-1/2 xl:w-1/4 max-w-[250px] md:max-w-[250px] overflow-hidden">
            <div className="">
              <div className="relative overflow-hidden px-4 md:px-6 pt-4 md:pt-6">
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
               
                <div className="pb-4 text-sm text-gray-800 leading-tight md:leading-snug">
                  <p>
                  By using this website, you agree to our use of cookies. We use cookies to provide you with a great experience and to help our website run effectively.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-4 mx-auto w-11/12 pb-3">
              <div onClick={handleClick} className="flex justify-center hover:underline text-sm py-1 rounded-md cursor-pointer text-[#073d30] font-semibold">
                <span>Accept</span>
              </div>
              <div onClick={handleClick} className="flex justify-center hover:underline text-sm  py-1  cursor-pointer text-gray-800 font-semibold">
                <span>Decline</span>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="opacity-50 fixed inset-0 z-40 bg-black"></div> */}
        </>
      ) : (
        <></>
      )}
    </>
  )
}

export default CookieConsent