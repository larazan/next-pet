import React from 'react'

 const SubscribeForm = () => {
  return (
    <>
        <div className="flex bg-[#2df8bb]  pt-12 pb-12 ">
        <div className="flex mx-auto w-11/12 bg-[#736ef7] rounded-3xl shadow ">
          <div className="flex flex-col md:flex-row py-10 space-y-5 md:space-y-0 md:space-x-10 mx-auto w-11/12">
            <div className='w-full md:w-3/6 flex flex-col space-y-3'>
              <h3 className='text-3xl font-semibold text-white'>
              Hit us up, and well come to your high school!
              </h3>
              <span className="text-md font-bold leading-snug text-white">
                Imagine a community of passionate & ambitious learners, all
                working to make a positive impact on the world around them. Now
                imagine your high school :/
              </span>
            </div>
            <div className='w-full md:w-3/6'>
                <div className='w-full p-5 bg-white rounded-3xl shadow'>
                    <div className='flex flex-col space-y-3'>
                        <h3 className='text-lg font-semibold'>
                        Sign up for our newsletter
                        </h3>
                        <span className='text-sm'>
                        Get Wirecutters independent reviews, expert advice, and intensively researched deals sent straight to your inbox.
                        </span>
                        <div>
                        <input
                className="w-full py-2 px-3 text-sm bg-[#dee6e5] focus:outline-none outline-none focus:border-blue-400  rounded text-gray-800 font-mabry"
                type="email"
                placeholder="your email address"
              />
                        </div>
                        <div className="flex flex-col space-y-1.5 mx-auto w-full ">
              <button className="w-full py-1.5 bg-[#14322e] hover:opacity-90  rounded text-md text-white transition duration-200 ">
                Submit
              </button>
            </div>
                    </div>
                </div>
            </div>
          
          </div>
        </div>
      </div>
    </>
  )
}

export default SubscribeForm