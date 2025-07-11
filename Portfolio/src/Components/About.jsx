import React from 'react'
import theme from '../assets/theme_pattern.svg'
import profile from '../Assests/profile.jpg'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 mt-[45px]'>
      <div className='relative'>
        <h1 className='text-5xl font-bold'>About me</h1>
        <img src={theme} alt="" className='absolute bottom-0 right-0 -z-1'/>
      </div>

      <div className='flex gap-9 mt-[80px]'>
        <div>
           <img src={profile} alt="" className=' w-60 object-cover h-80'/>
        </div>

       <div className='flex flex-col gap-7 mt-4'>
         <div className='w-[700px] flex flex-col gap-4 text-[15px]'>
            <p className=''>Hi, I'm a passionate and results-driven Full Stack MERN Developer with a strong foundation in MongoDB, Express.js, React, and Node.js. I specialize in building scalable, high-performance web applications with clean, maintainable code and intuitive user experiences.</p>
            <p className=''>When I'm not coding, you can find me exploring new tech trends, contributing to open source, or sharpening my skills through hands-on projects and challenges.</p>
         </div>
         <div className='flex flex-col gap-2 '>
          <div className='flex hover:scale-105 transition duration-300'><p>HTML & CSS </p> <div className='bg-gradient-to-l from-[#cc7c04] to-[#9c11dc] ml-5 rounded-2xl mt-[6px] w-100 h-2'></div></div>
          <div className='flex hover:scale-105 transition duration-300'><p>React Js</p>  <div className='bg-gradient-to-l from-[#cc7c04] to-[#9c11dc] ml-[49px] rounded-2xl mt-[6px] w-140 h-2'></div></div>
          <div className='flex hover:scale-105 transition duration-300'><p>JavaScript</p>  <div className='bg-gradient-to-l from-[#cc7c04] to-[#9c11dc] ml-8 rounded-2xl mt-[6px] w-130 h-2'></div></div>
          <div className='flex hover:scale-105 transition duration-300'><p>Node JS</p>  <div className='bg-gradient-to-l from-[#cc7c04] to-[#9c11dc] ml-[50px] rounded-2xl mt-[6px] w-80 h-2'></div></div>
         </div>
       </div>
      </div>

      <div className='flex w-full justify-around mb-10 mt-10'>
        <div className='flex flex-col items-center gap-3 hover:scale-105 transition duration-300'>
          <h1 className='text-3xl font-bold bg-gradient-to-bl from-[#DF8908] via-[#DF8908] to-[#B415FF] bg-clip-text 
                              text-transparent'>10+</h1>
          <p>Project Complete</p>
        </div>
        <div className='h-20 w-1 bg-gray-700 rounded-2xl'></div>
        <div className='flex flex-col items-center gap-3 hover:scale-105 transition duration-300'>
          <h1 className='text-3xl font-bold bg-gradient-to-bl from-[#DF8908] via-[#DF8908] to-[#B415FF] bg-clip-text 
                              text-transparent'>2</h1>
          <p>Hackathon Participants</p>
        </div>
        <div className='h-20 w-1 bg-gray-700 rounded-2xl'></div>
        <div className='flex flex-col items-center gap-3 hover:scale-105 transition duration-300'>
          <h1 className='text-3xl font-bold bg-gradient-to-bl from-[#DF8908] via-[#DF8908] to-[#B415FF] bg-clip-text 
                              text-transparent'>Intern </h1>
          <p>Prodesk IT</p>
        </div>
      </div>



    </div>
  )
}

export default About
