import React, { useRef, useState } from 'react'
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Autoplay, Pagination } from "swiper/modules"
import { Rating } from 'react-simple-star-rating'
import "swiper/css/autoplay"
import 'swiper/css/pagination'
import "swiper/css/bundle"
import 'swiper/css'

const Testimonial = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
  return (
    <section className="bg-[#110c32a7] ">
        <div className="mt-[8rem] w-[90%] mx-auto">
            <h2 className="font-poppins font-[700] text-[3rem]">What our clients say</h2>
            <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea error excepturi nostrum? Odio suscipit tempore, et quaerat earum architecto </p>
            <Swiper
                className="h-fit"
                grabCursor={true}
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}
                modules={[A11y, Autoplay, Pagination]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide className='bg-[#808080] px-5 py-7 rounded-[8px]'>
                        <div className="">
                            <Rating initialValue={1} readonly={true} iconsCount={1}/>
                            <Rating initialValue={1} readonly={true} iconsCount={1}/>
                            <Rating initialValue={1} readonly={true} iconsCount={1}/>
                            <Rating initialValue={0} readonly={true} iconsCount={1}/>
                            <Rating initialValue={0} readonly={true} iconsCount={1}/>
                        </div>
                        <p className="mb-[1rem] font-robotoMono">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias obcaecati illo excepturi accusamus, molestiae iure voluptate officiis harum consequatur ratione magni ullam ex quaerat, voluptatem, quos facilis corporis consectetur deleniti.</p>
                        <div className="flex justify-between">
                            <Image src="/Images/pfp-imgg.jpg" className='rounded-[50%]' alt="pfp-img" height={1} width={50} />
                            <p className="w-[80%] font-robotoMono">
                                <b className="font-poppins">John Doe</b> <br />
                                M.D, Johnex corp.
                            </p>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='bg-[#808080] px-5 py-7 rounded-[8px]'>
                        <div className="">
                            <Rating initialValue={1} readonly={true} iconsCount={1}/>
                            <Rating initialValue={1} readonly={true} iconsCount={1}/>
                            <Rating initialValue={1} readonly={true} iconsCount={1}/>
                            <Rating initialValue={1} readonly={true} iconsCount={1}/>
                            <Rating initialValue={0} readonly={true} iconsCount={1}/>
                        </div>
                        <p className="mb-[1rem] font-robotoMono">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias obcaecati illo excepturi accusamus, molestiae iure voluptate officiis harum consequatur ratione magni ullam ex quaerat, voluptatem, quos facilis corporis consectetur deleniti.</p>
                        <div className="flex justify-between">
                            <Image src="/Images/pfp-imgg.jpg" className='rounded-[50%]' alt="pfp-img" height={1} width={50} />
                            <p className="w-[80%] font-robotoMono">
                                <b className="font-poppins">John Doe</b> <br />
                                M.D, Johnex corp.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg-[#808080] px-5 py-7 rounded-[8px]'>
                        <div className="">
                            <Rating initialValue={1} readonly={true} iconsCount={1}/>
                            <Rating initialValue={1} readonly={true} iconsCount={1}/>
                            <Rating initialValue={1} readonly={true} iconsCount={1}/>
                            <Rating initialValue={1} readonly={true} iconsCount={1}/>
                            <Rating initialValue={0} readonly={true} iconsCount={1}/>
                        </div>
                        <p className="mb-[1rem] font-robotoMono">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias obcaecati illo excepturi accusamus, molestiae iure voluptate officiis harum consequatur ratione magni ullam ex quaerat, voluptatem, quos facilis corporis consectetur deleniti.</p>
                        <div className="flex justify-between">
                            <Image src="/Images/pfp-imgg.jpg" className='rounded-[50%]' alt="pfp-img" height={1} width={50} />
                            <p className="w-[80%] font-robotoMono">
                                <b className="font-poppins">John Doe</b> <br />
                                M.D, Johnex corp.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg-[#808080] px-5 py-7 rounded-[8px]'>
                        <div className="">
                            <Rating initialValue={1} readonly={true} iconsCount={1}/>
                            <Rating initialValue={1} readonly={true} iconsCount={1}/>
                            <Rating initialValue={1} readonly={true} iconsCount={1}/>
                            <Rating initialValue={0} readonly={true} iconsCount={1}/>
                            <Rating initialValue={0} readonly={true} iconsCount={1}/>
                        </div>
                        <p className="mb-[1rem] font-robotoMono">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias obcaecati illo excepturi accusamus, molestiae iure voluptate officiis harum consequatur ratione magni ullam ex quaerat, voluptatem, quos facilis corporis consectetur deleniti.</p>
                        <div className="flex justify-between">
                            <Image src="/Images/pfp-imgg.jpg" className='rounded-[50%]' alt="pfp-img" height={1} width={50} />
                            <p className="w-[80%] font-robotoMono">
                                <b className="font-poppins">John Doe</b> <br />
                                M.D, Johnex corp.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg-[#808080] px-5 py-7 rounded-[8px]'>
                        <div className="">
                            <Rating initialValue={1} readonly={true} iconsCount={1}/>
                            <Rating initialValue={1} readonly={true} iconsCount={1}/>
                            <Rating initialValue={1} readonly={true} iconsCount={1}/>
                            <Rating initialValue={1} readonly={true} iconsCount={1}/>
                            <Rating initialValue={1} readonly={true} iconsCount={1}/>
                        </div>
                        <p className="mb-[1rem] font-robotoMono">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias obcaecati illo excepturi accusamus, molestiae iure voluptate officiis harum consequatur ratione magni ullam ex quaerat, voluptatem, quos facilis corporis consectetur deleniti.</p>
                        <div className="flex justify-between">
                            <Image src="/Images/pfp-imgg.jpg" className='rounded-[50%]' alt="pfp-img" height={1} width={50} />
                            <p className="w-[80%] font-robotoMono">
                                <b className="font-poppins">John Doe</b> <br />
                                M.D, Johnex corp.
                            </p>
                        </div>
                    </SwiperSlide>
                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
            </Swiper>
        </div>
    </section>
  )
}

export default Testimonial
