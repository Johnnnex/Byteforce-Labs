import HeadComp from '@/layout/Head'
import React from 'react'
import Image from 'next/image'
import AboutUs from '../reusable-components/AboutUs'
import OurServices from '../reusable-components/OurServices'
import ContactUs from '../reusable-components/ContactUs'

const Homepage = () => {
  return (
    <>
        <HeadComp title="Byteforce Labs - Home" />
        <main className=''>
            <section className="text-center">
                <h1 className=" font-poppins font-[700] text-[3rem] w-[40%] mx-auto mt-3">Boost brand's visibillity and reach fast.</h1>
                <p className="w-[30%] mx-auto font-robotoMono mt-1">Use and re-use tons of respective sections too a main create the perfecct layout. Sections are ready</p>
                <button className="border-2 font-robotoMono px-[1rem] py-2 bg-[#00a2ff] mt-5 mb-4 rounded-lg">Try 14 days free trial</button><br />
                <small className='font-robotoMono'>No credit card required / cancel anytime</small>
                <div className="flex mt-[3rem] h-[15rem] justify-between w-[60%] mx-auto">
                    <div className="flex justify-between w-full pl-[1.5rem] rounded-[8rem] bg-gradient-to-tr from-indigo-400 via-pink-400 to-pink-400 items-center">
                        <p className="w-[60%] ml-[1rem] text-white ">
                            <b className=" font-poppins text-[2rem]">168%</b> <br />
                            <strong className=' font-poppins'>Monthly Revenue</strong><br />
                            <small className=' font-robotoMono'>Average result customers sees after using Subba</small>
                        </p>
                        <Image className='rounded-[8rem] h-full border-[1rem] border-white' src ="/Images/hero.jpg" alt='hero-img' width={400} height={1} />
                    </div>
                    {/* <div className="z-[-1] translate-x-[-10%]">
                        <Image className='rounded-[50%]' src ="/Images/hero-img.jpg" alt='hero-img' width={350} height={1} />
                    </div> */}
                </div>
            </section>
            <AboutUs />
            <OurServices />
            <ContactUs />
        </main>
    </>
  )
}

export default Homepage
