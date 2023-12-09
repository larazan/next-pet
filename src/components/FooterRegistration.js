import React from 'react'
import Link from "next/link";
import Image from "next/image";

export default function FooterRegistration() {
  return (
    <>
        <footer className="relative z-20 w-full py-5">
          <div className="flex flex-col space-y-2">
            <div className="flex x-auto justify-center space-x-4">
              <Link
                href={""}
                className="underline text-lg text-[#095140] font-semibold"
              >
                Terms of service
              </Link>
              <Link
                href={""}
                className="underline text-lg text-[#095140] font-semibold"
              >
                Privacy policy
              </Link>
              <Link
                href={""}
                className="underline text-lg text-[#095140] font-semibold"
              >
                Contact us
              </Link>
            </div>
            <div className="flex mx-auto justify-center">
              <span className="text-[#1c1707] font-semibold text-lg">
                Copyright © 2023 Beonhand
              </span>
            </div>
          </div>
        </footer>
    </>
  )
}
