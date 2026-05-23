import { workData } from '@/assets/assets'
import {assets} from '@/assets/assets'
import React from 'react'
import Image from "next/image";


const Work = () => {
  return (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mt-20 mb-2 text-lg font-Ovo'>My portfolio</h4>
        <h2 className='text-center text-5xl font-Ovo'>My latest work</h2>

        <p className='text-center mx-auto mt-5 mb-12 max-w-2xl font-Ovo'>
        Welcome to my software development portfolio! Explore the collection of projects showcasing my expertise
        in software development.
        </p>

        <div className='grid  gap-6 my-10 [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]'>
            {workData.map((project,index)=>{
                const Wrapper = project.link ? 'a' : 'div'
                const wrapperProps = project.link
                    ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
                    : {}
                return (
                <Wrapper {...wrapperProps} className={`aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative
                group block ${project.link ? 'cursor-pointer' : 'cursor-default'}`}
                key={index} style={{backgroundImage: `url(${project.bgImage})`}}>
                    <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2
                    py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                        <div>
                            <h2 className='font-semibold'>{project.title}</h2>
                            <p className='text-sm text-gray-700'>{project.description}</p>
                        </div>

                        <div className='border rounded-full border-pink-400 w-9 aspect-square flex items-center
                        justify-center shadow-[2px_2px_0_rgba(190,24,93,0.55)] group-hover:bg-pink-100 transition'>
                            <Image src={assets.send_icon} alt='send icon' className='w-5'/>
                        </div>
                    </div>
                </Wrapper>
                )
            })}
        </div>
    </div>
  )
}

export default Work