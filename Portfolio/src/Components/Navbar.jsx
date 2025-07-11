import React from 'react'
import logo from '../Assests/dvLogo.jpg'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between '>
        {/* logo */}
      <img src={logo} alt="" className='w-20 h-15 mix-blend-screen'/>

      <ul className=' flex items-center list-none gap-[60px] text-[15px] '>
           <li>Home</li>
           <li>About me</li>
           <li>Service</li>
           <li>Portfolio</li>
           <li>Contact</li>
      </ul>
      <div className=' rounded-4xl text-[15px] p-1 mr-2 cursor-pointer bg-gradient-to-bl from-[#DF8908] to-[#9e30d0]
                                   hover:border-1 hover:scale-105 transition duration-300'>
        Connect with me
      </div>
    </div>
  )
}

export default Navbar
