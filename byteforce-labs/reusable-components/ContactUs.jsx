import React from 'react'
import Image from 'next/image'

const ContactUs = () => {
  return (
    <>
        <section className="mt-[8rem] w-[90%] mx-auto">
            <h3 className="font-poppins font-[700] text-[1rem] bg-slate-300 w-fit px-3 rounded-md text-red-600">Contact Us</h3>
            <p className=" font-robotoMono italic text-[1.3rem]">
                <b className="font-poppins not-italic font-[700] text-[3rem]">Don't hesitate</b> <br />
                to talk with us
            </p>
            <p className="mt-[4px] font-robotoMono"> Relax, we're ready to support you 24/7</p>
            <div className="flex justify-between mt-[4rem] items-center">
                <div className=" space-y-[2rem] w-[40%]">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center bxshadow bg-slate-400 p-4 rounded-[50%]">
                            <Image src="/Images/mail.svg" alt='contact-icon' height={1} width={30} />
                        </div>
                        <div className="">
                            <p className="font-extrabold font-robotoMono">
                                <small className="font-poppins text-[15px] font-thin">Email</small> <br />
                                contact@byteforcelabs.com
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center bxshadow bg-slate-400 p-4 rounded-[50%]">
                            <Image src="/Images/phone.svg" alt='contact-icon' height={1} width={30} />
                        </div>
                        
                        <div className="">
                            <p className="font-extrabold font-robotoMono">
                                <small className="font-poppins text-[15px] font-thin">Phone</small> <br />
                                +234 817 735 1189
                            </p>
                        </div>
                    </div>
                </div>
                <form className="w-[50%] space-y-5">
                    <h4 className="font-poppins font-extrabold text-[1.4rem]">Drop us a line</h4>
                    <div className="flex justify-between">
                        <div className="w-[49%]">
                            <label className="font-poppins font-bold" htmlFor="name">
                                Full Name
                            </label> <br />
                            <input placeholder="John Doe" type="text" id="name" className="w-full px-[1rem] py-2 font-robotoMono border-[#808080] outline-none border-[1px] rounded-md" />
                        </div>
                        <div className="w-[49%]">
                            <label className="font-poppins font-bold" htmlFor="email">
                                Email
                            </label> <br />
                            <input placeholder="Type your email" type="email" id="email" className="w-full px-[1rem] py-2 font-robotoMono border-[#808080] outline-none border-[1px] rounded-md" />
                        </div>
                    </div>
                    <div className="">
                        <label className="font-poppins font-bold" htmlFor="message">
                            Message
                        </label> <br />
                        <input placeholder="Leave us a message" type="text" id="message" className="w-full px-[1rem] py-2 font-robotoMono border-[#808080] outline-none border-[1px] rounded-md"/>
                    </div>
                    <div className="">
                        <button className="bg-red-400 px-4 py-2 rounded-[4px] font-poppins">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    </>
  )
}

export default ContactUs
