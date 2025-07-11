import React from 'react'
import profile from '../Assests/profile.jpg'

const Hero = () => {
  return (
    <div className='flex items-center flex-col w-full gap-[35px] '>
        <img src={profile} alt="" className='mt-20 w-50 object-cover h-50 rounded-full'/> 
        <h1 className='w-170 text-5xl text-center font-bold'><span className='bg-gradient-to-bl from-[#DF8908] via-[#DF8908] to-[#B415FF] bg-clip-text 
                              text-transparent'>I'm Dipanshu verma,</span> Full Stack Mern Developer</h1>   
        <p className='text-[15px]'>I am Full stack developer from India,And i am curruntly pursuing Intern in Prodesk</p>    
        <div className='flex items-center gap-3 text-[15px] mb-[50px]'>
            <div className="rounded-4xl text-[13px] p-3 mr-2 cursor-pointer bg-gradient-to-bl from-[#cc7c04] to-[#9c11dc]
                                    hover:border-2">Connect with me</div>
            <div className="border-2  rounded-4xl text-[13px] p-3 mr-2 border-white w-[110px] text-center cursor-pointer hover:border-2 hover:border-pink-400">My Resume</div>
        </div>
      
    </div>
  )
}

export default Hero
