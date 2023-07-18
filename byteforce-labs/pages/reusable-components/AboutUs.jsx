import React from 'react'
import Image from 'next/image'

const AboutUs = () => {
  return (
    <section className='w-[90%] mx-auto mt-[8rem]'>
        <div className="flex justify-between items-start">
            <div className="w-[60%]">
                <h2 className="font-[700] text-[4rem] font-poppins mb-[1rem]">About Us</h2>
                <p className=" font-robotoMono">KW70 Fix is a leading real estate investment firm in the world, headquartered in New York with offices in London, Chicago, Barcelona, Vienna, Rome, Las Vegas.</p>
            </div>
            <div className="flex justify-between mt-[2rem] items-center">
                <p className=" font-robotoMono">Get to know us</p>
                <Image className='rounded-[50%]' src ="/Images/arrow.svg" alt='hero-img' width={40} height={1} />
            </div>
        </div>
        <div className="flex justify-between mt-[3rem]">
            <div className="">
                <div className="flex mb-[0.5rem] gap-2">
                    <p className="border-2 p-[2rem] font-robotoMono rounded-lg">
                        <b className=' font-poppins text-[1.3rem]'>40,000+</b><br />
                        it's a long established
                    </p>
                    <p className="border-2 p-[2rem] font-robotoMono rounded-lg">
                        <b className=' font-poppins text-[1.3rem]'>40,000+</b><br />
                        it's a long established
                    </p>
                </div>
                <div className="flex gap-2">
                    <p className="border-2 p-[2rem] font-robotoMono rounded-lg">
                        <b className=' font-poppins text-[1.3rem]'>40,000+</b><br />
                        it's a long established
                    </p>
                    <p className="border-2 p-[2rem] font-robotoMono rounded-lg">
                        <b className=' font-poppins text-[1.3rem]'>40,000+</b><br />
                        it's a long established
                    </p>
                </div>
            </div>
            <div className="w-[40%] font-robotoMono">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam provident ad, explicabo sint voluptas voluptatem recusandae. Debitis culpa officia, unde aspernatur officiis corrupti. Officia quae a adipisci corrupti accusantium atque!
                Dicta numquam rem esse libero corrupti accusantium nemo suscipit, ipsum excepturi, consequatur iste quia neque minima autem id aliquid dolores adipisci voluptatem deserunt quae ratione ab voluptates doloremque. Ullam, labore.
                Nostrum corrupti voluptates neque illum nulla laborum iusto delectus, aut, magnam hic ratione molestias explicabo, nisi natus atque aspernatur. Sapiente alias minus saepe molestias consequuntur officia, tempora quae modi ipsam.
            </div>
        </div>
    </section>
  )
}

export default AboutUs
