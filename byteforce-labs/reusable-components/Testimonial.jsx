import React, { useRef, useState } from 'react'
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Autoplay, Pagination } from "swiper/modules"
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
    <section className="bg-[#00000045] ">
        <div className="mt-[8rem] w-[90%] mx-auto">
            <h2 className="">What our clients say</h2>
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
                    <SwiperSlide className="border-2">
                        <div className="">5 stars</div>
                        <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias obcaecati illo excepturi accusamus, molestiae iure voluptate officiis harum consequatur ratione magni ullam ex quaerat, voluptatem, quos facilis corporis consectetur deleniti.</p>
                        <div className="">
                            <Image src="/Images/pfp-img.jpg" alt="pfp-img" height={1} width={20} />
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='border-2'>
                        <div className="">5 stars</div>
                        <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias obcaecati illo excepturi accusamus, molestiae iure voluptate officiis harum consequatur ratione magni ullam ex quaerat, voluptatem, quos facilis corporis consectetur deleniti.</p>
                        <div className="">
                            <Image src="/Images/pfp-img.jpg" alt="pfp-img" height={1} width={20} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="">5 stars</div>
                        <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias obcaecati illo excepturi accusamus, molestiae iure voluptate officiis harum consequatur ratione magni ullam ex quaerat, voluptatem, quos facilis corporis consectetur deleniti.</p>
                        <div className="">
                            <Image src="/Images/pfp-img.jpg" alt="pfp-img" height={1} width={20} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="">5 stars</div>
                        <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias obcaecati illo excepturi accusamus, molestiae iure voluptate officiis harum consequatur ratione magni ullam ex quaerat, voluptatem, quos facilis corporis consectetur deleniti.</p>
                        <div className="">
                            <Image src="/Images/pfp-img.jpg" alt="pfp-img" height={1} width={20} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="">5 stars</div>
                        <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias obcaecati illo excepturi accusamus, molestiae iure voluptate officiis harum consequatur ratione magni ullam ex quaerat, voluptatem, quos facilis corporis consectetur deleniti.</p>
                        <div className="">
                            <Image src="/Images/pfp-img.jpg" alt="pfp-img" height={1} width={20} />
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
