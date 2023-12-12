import React from 'react'
import Link from "next/link";
import { usePathname } from "next/navigation"
 
const ProfileNav = () => {

  const pathname = usePathname();

  return (
    <>
    <div className="py-2 md:py-5 px-3 md:px-8">
          <span className="text-lg md:text-2xl tracking-tighter font-semibold uppercase">
            HI, alda
          </span>
        </div>
        <div className="shadow-lg md:px-8">
          <ul className="flex overflow-x-auto overflow-hidden items-center md:justify-center2 space-x-1 md:space-x-3  tracking-tight font-semibold text-sm text-[#b6cce2] shadow2">
            <li className={`border-b-4 ${pathname == "/account/show" ? 'border-[#001838]' : 'border-white'}  md:-mt-px`}>
              <Link className="inline-block p-3" href="/account/show">
                <span className="md:inline text-gray-800 font-bold">
                  Dashboard
                </span>
              </Link>
            </li>
            <li className={`border-b-4 ${pathname == "/account/profile" ? 'border-[#001838]' : 'border-white'} md:-mt-px`}>
              <Link className="inline-block p-3" href="/account/profile">
                <span className="md:inline text-gray-800 font-bold">
                  Profile
                </span>
              </Link>
            </li>
            {/* <li className={`border-b-4 ${pathname == "/account/show" ? 'border-[#001838]' : 'border-white'} md:-mt-px`}>
              <Link className="inline-block p-3" href="/account/preferences">
                <span className="md:inline text-gray-800 font-bold">
                  Preferences
                </span>
              </Link>
            </li> */}
            <li className={`border-b-4 ${pathname == "/account/orders" ? 'border-[#001838]' : 'border-white'}  md:-mt-px`}>
              <Link className="inline-block p-3" href="/account/orders">
                <span className="md:inline text-gray-800 font-bold">
                  Orders
                </span>
              </Link>
            </li>
            <li className={`border-b-4 ${pathname == "/account/password" ? 'border-[#001838]' : 'border-white'}  md:-mt-px`}>
              <Link className="inline-block p-3" href="/account/password">
                <span className="md:inline text-gray-800 font-bold">
                  Password
                </span>
              </Link>
            </li>
            <li className="border-b-4 border-white md:-mt-px">
              <Link className="inline-block p-3" href="/">
                <span className="md:inline text-red-600 font-bold">
                  Logout
                </span>
              </Link>
            </li>
          </ul>
        </div>
    </>
  )
}

export default ProfileNav;