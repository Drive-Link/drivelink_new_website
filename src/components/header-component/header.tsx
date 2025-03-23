import React from 'react'
import Image from 'next/image'
import img  from '../../../public/drivelink-icon.png'
import menu  from '../../../public/menu.png'
import Link from 'next/link'

const Header = () => {
  return (
    <div className=' header bg-[#EBF1FF] ' >
      <div className="header-content min-h-[10vh] max-w-[1200px] mx-[auto] flex justify-between items-center bg-[rgba(182,204,255,0.095)] p-[20px] sm:p-0 ">
        <div className="logo w-[135px] flex items-center justify-between cursor-pointer ">
          
          <div className="drivelink-img w-[42px] ">
          <Link href={'/'}>
          <Image src={img} alt='Drivelink icon' />
          </Link>
          </div>
          <span className='text-[20px] text-[#2E396D] font-[500]'>
          <Link href={'/'}>
            Drivelink
          </Link>
            </span>
        </div>
        <nav className='hidden sm:block' >
            <ul className='flex text-[16px] w-[325px] justify-between font[400]   ' >
              <li className='cursor-pointer'>About us</li>
              <li className='font-[400] cursor-pointer'>How it Works</li>
              <li className='cursor-pointer'>Services</li>
            </ul>
        </nav>
        <div className="nav-btn font-[400] flex gap-[16px] hidden sm:flex  ">
          <button className='bg-white w-[120px] h-[44px] text-[#101f91] font-[400] p-[16px] flex justify-center items-center d-block  rounded-[8px] cursor-pointer '>Contact us</button>
          <button className='bg-[#101f91] text-white w-[128px] h-[44px] font-[400] p-[16px] rounded-[8px] flex justify-center items-center d-block cursor-pointer '>Download</button>
        </div>
        <div  className="mobile-icon w-[15px] h-[13px] sm:hidden  ">
          <Image className='w-[100%]' src={menu} alt='menu-icon' />
        </div>
      </div>
    </div>
  )
}

export default Header