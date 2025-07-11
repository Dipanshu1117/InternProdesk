import React from 'react'
import themePattern from '../assets/theme_pattern.svg'
import serviceData from '../assets/services_data'
import arrow from '../assets/arrow_icon.svg'

const Services = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-5 m-8'>
      <div className='relative '>
         <h1 className='text-4xl font-bold '>MY SERVICES</h1>
         <img src={themePattern} alt="" className='absolute bottom-0 right-0 -z-1'/>
      </div>
      <div className='grid grid-cols-3 gap-4 mb-4  
                              '>
        {serviceData.map((service,index)=>{
          return <div className='flex flex-col justify-center gap-1 p-2 w-[250px] border-2 rounded-2xl cursor-pointer hover:bg-gradient-to-bl from-[#3F0028] via-[#e4ba7b] to-[#582300] hover:border-pink-600 hover:scale-105 transition duration-300'>
            <h3 className='text-[20px] font-bold'>{service.s_no}</h3>
            <h2 className='text-[30px] bg-gradient-to-bl from-[#DF8908] via-[#DF8908] to-[#4b016d] bg-clip-text 
                              text-transparent'>{service.s_name}</h2>
            <p className='text-sm'>{service.s_desc}</p>

            <div className='flex gap-2 items-center mt-2'>
              <p>Read more</p>
              <img src={arrow} alt="" />
            </div>
          </div>
        })}
      </div>
      
    </div>
  )
}

export default Services
