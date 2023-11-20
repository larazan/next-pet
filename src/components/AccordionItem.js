import React from 'react'

 const AccordionItem = ({ open, toggle, title, desc }) => {
  return (
    <div className="w-full pt-6">
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
              <span className="text-primary font-normal text-2xl">{open ? '-' : '+'}</span>
            </span>
          </button>
        </dt>
        {open ? (
            <dd className="pr-12 mt-2" id="headlessui-disclosure-panel-12" >
          <p className="text-base text-gray-700">
            <div>
              {desc}
            </div>
          </p>
        </dd>
        ) : (
        <>
         
        </>
      )}
        
      </div>
  )
}

export default AccordionItem