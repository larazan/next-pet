import React from "react";

const AccordionItem = ({ open, toggle, title, desc }) => {
  return (
    <div className="w-full py-6 px-6 border border-gray-400 rounded-lg bg-white">
      <dt className="w-full text-lg">
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
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-900"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-900"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              )}
            </span>
          </span>
        </button>
      </dt>
      {open ? (
        <dd className="pr-12 mt-2" id="headlessui-disclosure-panel-12">
          <p className="text-base text-gray-700">
            <div>{desc}</div>
          </p>
        </dd>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AccordionItem;
