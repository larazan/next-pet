import React from 'react'
import Accordion from './Accordion'

const Menu = () => {
  return (
    <>
      <div className="p-4 bg-gray-200 rounded-lg">
      <Accordion
        title="Do you prefer Android or iOS"
        answer="I like to use iOS products"
      >
        <div className="overflow-hidden">
          <div class=" overflow-hidden2 duration-300 px-4">
            <div class="flex items-start mb-6">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                  required=""
                />
              </div>
              <div class="text-sm ml-2">
                <label for="remember" class="font-medium text-gray-900">
                  Vetri-Science
                </label>
              </div>
            </div>
            <a class="flex items-center h-10 px-4 text-sm " href="#">
              Natural Food
            </a>
            <a class="flex items-center h-10 px-4 text-sm " href="#">
              Treats
            </a>
            <a class="flex items-center h-10 px-4 text-sm " href="#">
              Toys
            </a>
            <a class="flex items-center h-10 px-4 text-sm " href="#">
              Accessories
            </a>
            <a class="flex items-center h-10 px-4 text-sm " href="#">
              Apparel
            </a>
            <a class="flex items-center h-10 px-4 text-sm " href="#">
              Shop All
            </a>
          </div>
        </div>
        </Accordion>
      </div>  
    </>
  )
}

export default Menu