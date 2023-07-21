import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="mt-[6rem] bg-slate-600 text-white pt-[4rem]">
      <div className="flex px-7 pb-[3rem] mb-[3rem] justify-between border-b border-b-[#808080]">
        <div className="">
          <h3 className="font-poppins">Byteforce-labs</h3>
        </div>
        <div className="flex-1 flex justify-end">
          <input type="text" placeholder="Subscribe to our newsletter" className="w-[30%] bg-transparent outline-none font-robotoMono pr-[1rem]" />
          <button className="bg-[#00a2ff] px-[1rem] rounded-r-lg py-1 font-robotoMono">
            <Image src="/Images/subscribe.svg" height={1} width={30} alt="subscribe" />
          </button>
        </div>
      </div>
      <div className="text-center">
        <ul className="flex w-[40%] justify-between font-robotoMono mx-auto">
          <li className="">Home</li>
          <li className="">About Us</li>
          <li className="">Team</li>
          <li className="">Contact Us</li>
        </ul>
        <p className="mt-[2.6rem] pb-[2rem] font-poppins">&copy; 2023 Byteforce-labs. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer