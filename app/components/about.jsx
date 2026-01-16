import React from 'react'
import {assets, infoList, toolsData} from '@/assets/assets'
import Image from "next/image";


const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mt-30 mb-2 text-lg font-Ovo'>Introduction</h4>
        <h2 className='text-center text-5xl font-Ovo'>About Me</h2>

        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20 mt-10'>
            <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.user_image} alt='user' className='w-full rounded-3xl'/>
            </div>

            <div className='flex-1'>
                <p className='mb-10 max-w-2xl font-Ovo'>
                    I am a software developer with a passion for building practical, user-focused web applications. 
                    I enjoy working with modern technologies like React, Next.js and Python, and I’m focused on building scalable solutions and growing my expertise in software development. 
                    I’m driven by curiosity, problem-solving, and a desire to make meaningful impact through technology. 
                    My goal is to build solutions that are both functional and visually engaging while continuing to grow as a developer.
                </p>

                <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                    {infoList.map(({icon, iconDark, title, description}, 
                    index)=>(
                        <li key={index} 
                        className='border [0.5px] border-pink-400 rounded-xl p-6 cursor-pointer
                        transition-all duration-300 ease-out hover:-translate-y-2 hover:bg-pink-100
                        hover:shadow-[-8px_8px_0px_rgba(190,24,93,0.55)]

                        '>
                            <Image src={icon} alt={title} className='w-7 mt-3'/>
                            <h3 className='my-4 font-semibold text-pink-700'>{title}</h3>
                            <p className='text-pink-600 text-sm'>{description}</p>
                        </li>
                    ))}
                </ul>

                <h4 className='my-6 text-black-700 font-Ovo'>Tools I use</h4>
                <ul className='flex items-center gap-3 sm:gap-5'>
                    {toolsData.map((tool,index) =>(
                        <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-pink-400 rounded-lg
                        cursor-pointer transition-all duration-300 ease-out hover:-translate-y-2 hover:bg-pink-100
                        hover:shadow-[-8px_8px_0px_rgba(190,24,93,0.55)]' 
                        key={index}>
                            <Image src={tool} alt='' className='w-5 sm:w-7'/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About