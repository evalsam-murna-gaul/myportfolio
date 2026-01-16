import React from 'react'
import { assets } from '@/assets/assets'
import Image from "next/image";

const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={assets.logo}  alt='' className='w-36 mx-auto mb-2'/>

            <div className='w-max flex items-center gap-2 mx-auto'>
              <Image src={assets.mail_icon}  alt='' className='w-6'/> 
              evalsamgaul@gmail.com 
            </div>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t border-pink-400 mx-[10%] mt-12 py-6'>
            <p> © 2026 Evalsam Gaul. All rights reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='_blank' href="https://github.com/evalsam-murna-gaul">Github</a></li>
                <li><a target='_blank' href="www.linkedin.com/in/evalsam-gaul">LinkedIn</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer