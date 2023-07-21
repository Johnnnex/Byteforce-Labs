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
            <div className="w-[49%] h-[20rem] items-center border-2 border-[#808080] rounded-[3rem] pl-[2rem] flex justify-between">
                <div className="w-[55%]">
                    <button className="border-2 border-[#808080] px-[2rem] py-1 rounded-lg font-robotoMono">Interior</button>
                    <h3 className=" font-poppins font-[600] text-[1.8rem] mt-[0.4rem]">Return on investment</h3>
                    <p className=" font-robotoMono">Lorem ipsum dolor, sit amet consectetur  facilis eligendi voluptatum nam quos unde beatae laboriosam aut necessitatibus! Deleniti esse error ipsa amet!</p>
                </div>
                <div className="w-[40%] h-full overflow-hidden rounded-[3rem]">
                    <Image src="/Images/hero.jpg" alt="page-img" height={1} width={900} />
                </div>
            </div>
        </div>
        <div className="flex justify-between mt-[1rem]">
            <div className="w-[49%] h-[20rem] text-center flex justify-center flex-col">
                <button className="bg-black w-[30%] mx-auto text-white font-robotoMono py-2 rounded-lg">Interior</button>
                <h3 className=" font-poppins text-[2rem] ">Planning Stratigies</h3>
                <p className=" font-robotoMono">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem reprehenderit recusandae aut iusto placeat facere minus, accusantium omnis officiis veniam iure doloribus dolorem pariatur dolore quibusdam, sequi atque? Harum, tempore?</p>
                <div className="flex w-[30%] border-b border-b-black mx-auto justify-between mt-[2rem] items-center">
                    <p className=" font-robotoMono">Get to know us</p>
                    <Image className='rounded-[50%]' src ="/Images/arrow.svg" alt='hero-img' width={40} height={1} />
                </div>
            </div>
            <div className="w-[49%] h-[20rem] items-center border-2 border-[#808080] rounded-[3rem] pl-[2rem] flex justify-between">
                <div className="w-[55%]">
                    <button className="border-2 border-[#808080] px-[2rem] py-1 rounded-lg font-robotoMono">Interior</button>
                    <h3 className=" font-poppins font-[600] text-[1.8rem] mt-[0.4rem]">Return on investment</h3>
                    <p className=" font-robotoMono">Lorem ipsum dolor, sit amet consectetur  facilis eligendi voluptatum nam quos unde beatae laboriosam aut necessitatibus! Deleniti esse error ipsa amet!</p>
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
