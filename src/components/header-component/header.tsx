import React from 'react'
import img  from '../../../public/drivelink-icon.png'
import Image from 'next/image'
const Header = () => {
  return (
    <div className=' header bg-[rgba(182,204,255,0.095)] ' >
      <div className="header-content min-h-[10vh] max-w-[1200px] mx-[auto] flex justify-between items-center bg-[rgba(182,204,255,0.095)] ">
        <div className="logo w-[135px] flex items-center justify-between ">
          <div className="drivelink-img w-[42px] ">
          <Image src={img} alt='Drivelink icon' />
          </div>
          <span className='text-[20px] text-[#2E396D] font-[500]'>Drivelink</span>
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
      </div>
    </div>
  )
}

export default Header