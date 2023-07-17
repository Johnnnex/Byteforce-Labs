import React from 'react'

const Header = () => {
  return (
    
    <>
        <header className='flex justify-between p-[1rem] items-center'>
            <div className="">
                <h1 className='font-poppins'>Byteforce-labs</h1>
            </div>

            <div className="w-[40%] ">
                <nav>
                    <ul className='flex justify-evenly'>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Team</li>
                        <li>Contact-Us</li>
                            
                    </ul>
                </nav>
            </div>

            <div className="">
                <button className=" border-2 px-[1rem] py-2 ">Get in Touch</button>
            </div>
        </header>
    </>
  )
}

export default Header;