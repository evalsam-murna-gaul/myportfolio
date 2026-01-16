import { serviceData } from '@/assets/assets'
import React from 'react'
import Image from "next/image";

const Services= () => {
  return (
    <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'> 
        <h4 className='text-center mt-10 mb-2 text-lg font-Ovo'>What I offer</h4>
        <h2 className='text-center text-5xl font-Ovo'>My Services</h2>

        <p className='text-center mx-auto mt-5 mb-12 max-w-2xl font-Ovo'>
        I build modern, user-friendly web and software solutions, 
        including AI projects, using React, Next.js, Python and AI tools.
        </p>

        <div className='grid  gap-6 my-10 [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]'>
            {serviceData.map(({icon, title, description, link}, index)=>(
                <div key={index}
                className='border border-pink-400 rounded-lg px-8 py-12 transition-all duration-300 ease-out hover:-translate-y-2 hover:bg-pink-100
                        hover:shadow-[-8px_8px_0px_rgba(190,24,93,0.55)]'>
                    <Image src={icon} alt='' className='w-10'/>
                    <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                    <p className='text-sm text-gray-600 leading-5'>
                        {description}
                    </p>
                    
                </div>
            ))}
        </div>
    </div>
  )
}

export default Services