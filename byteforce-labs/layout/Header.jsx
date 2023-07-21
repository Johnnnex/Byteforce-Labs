import React, { useRef, useEffect } from 'react'

const Header = () => {
    const header = useRef()
    useEffect(() =>{
        window.addEventListener("scroll", () => {
            header.current.classList.toggle("header-sticky", window.scrollY > 0)
        })
    }, [])
  return (
    
    <>
        <header ref={header} className='flex sticky top-0 left-0 w-[100%] py-[2rem] justify-between px-[1rem] items-center'>
            <div className="">
                <h2 className='font-poppins'>Byteforce-labs</h2>
            </div>

            <div className="w-[40%] ">
                <nav>
                    <ul className='flex font-robotoMono justify-evenly'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Team</li>
                        <li>Contact-Us</li>
                            
                    </ul>
                </nav>
            </div>

            <div className="">
                <button className="font-robotoMono border-2 px-[1rem] py-2 bg-[#00a2ff]">Get in Touch</button>
            </div>
        </header>
    </>
  )
}

export default Header;