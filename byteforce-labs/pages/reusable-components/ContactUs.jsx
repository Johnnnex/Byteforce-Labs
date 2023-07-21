import React from 'react'
import Image from 'next/image'

const ContactUs = () => {
  return (
    <>
        <section className="">
            <h3 className="">Contact Us</h3>
            <p className="">
                <b className="">Don't hesitate</b> <br />
                to talk with us
            </p>
            <p className=""> Relax, we're ready to support you 24/7</p>
            <div className="flex">
                <div className="">
                    <div className="">
                        <div className="bg-black">
                            <Image src="/Images/subscribe.svg" alt='contact-icon' height={1} width={20} />
                        </div>
                        <div className="">
                            <p>
                                <small></small> <br />
                                

                            </p>
                        </div>
                    </div>
                    <div className="">
                        <div className="bg-black">
                            <Image src="/Images/subscribe.svg" alt='contact-icon' height={1} width={20} />
                        </div>
                        <div className="">
                            <p>
                                <small></small> <br />
                                

                            </p>
                        </div>
                    </div>
                </div>
                <div className=""></div>
            </div>
        </section>
    </>
  )
}

export default ContactUs
