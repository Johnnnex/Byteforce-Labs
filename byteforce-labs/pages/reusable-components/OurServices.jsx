import React from 'react'
import Image from 'next/image'

const OurServices = () => {
  return (
    <section  className='w-[90%] mx-auto mt-[8rem]'>
        <h2 className="font-poppins font-[700] text-[3rem]">Services</h2>
        <div className="flex mt-[3rem] justify-between">
            <div className="w-[49%] h-[20rem] border-2 border-black overflow-hidden rounded-[3rem]">
                <Image src="/Images/hero.jpg" alt="page-img" height={1} width={600} />
            </div>
            <div className="w-[49%] h-[20rem] items-center border-2 border-black rounded-[3rem] pl-[2rem] flex justify-between">
                <div className="w-[55%]">
                    <button className="border-2 border-[#808080] px-[2rem] py-1 rounded-lg">Interior</button>
                    <h3 className=" font-poppins font-[600] text-[1.8rem] mt-[0.4rem]">Return on investment</h3>
                    <p className="">Lorem ipsum dolor, sit amet consectetur  facilis eligendi voluptatum nam quos unde beatae laboriosam aut necessitatibus! Deleniti esse error ipsa amet!</p>
                </div>
                <div className="w-[40%] h-full overflow-hidden rounded-[3rem]">
                    <Image src="/Images/hero.jpg" alt="page-img" height={1} width={900} />
                </div>
            </div>
        </div>
        <div className="flex justify-between">
            <div className="w-[49%] h-[20rem]"></div>
            <div className="w-[49%] h-[20rem] items-center border-2 border-black rounded-[3rem] pl-[2rem] flex justify-between">
                <div className="w-[55%]">
                    <button className="border-2 border-[#808080] px-[2rem] py-1 rounded-lg">Interior</button>
                    <h3 className=" font-poppins font-[600] text-[1.8rem] mt-[0.4rem]">Return on investment</h3>
                    <p className="">Lorem ipsum dolor, sit amet consectetur  facilis eligendi voluptatum nam quos unde beatae laboriosam aut necessitatibus! Deleniti esse error ipsa amet!</p>
                </div>
                <div className="w-[40%] h-full overflow-hidden rounded-[3rem]">
                    <Image src="/Images/hero.jpg" alt="page-img" height={1} width={900} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurServices
