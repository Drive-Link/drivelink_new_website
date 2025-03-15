import Image from 'next/image'
import React from 'react'
import img  from '../../../public/drivelink-icon.png'

const Footer = () => {
  return (
    <div className="footer bg-[#E8F1FF] ">
        <div className="footer-content max-w-[1200px] mx-[auto] px-[20px] pb-[50px] ">
            <div className="link-grp grid grid-cols-2 gap-8 p-8  font-[400] text-[20px] text-[#2E396D]   ">
                <div className="bx1  text-center">About us</div>
                <div className="bx1  text-center">How it works</div>
                <div className="bx1  text-center">Services</div>
                <div className="bx1  text-center">Contact us</div>
            </div>
            <div className="formy">
                <form action="" method="post">
                    <div className="form-grp">
                        <input className='w-[100%] rounded-[50px] px-[20px] py-[10px]  placeholder-[#343434] placeholder-opacity-[50%] bg-[white] outline-none ' type="text" placeholder='Enter emil' />
                    </div>
                    <div className="form-grp mt-[10px] ">
                        <button className='bg-[#101F91] w-[100%] rounded-[50px] px-[20px] py-[10px] text-[white]  ' type="submit">Subscribe</button>
                    </div>
                </form>
            </div>
            <hr className='mt-[30px] text-[#343434] ' />
            <div className="grp-page flex justify-center gap-[10%] mt-[30px] font-[400] text-[14px] text-[#2E396D] ">
                <div>Terms</div>
                <div>Privacy</div>
                <div>Cookies</div>
            </div>
            <div className="footericon-grp mt-[30px] ">
                <div className="icon-bg">
                    {/* x4 */}
                </div>
            </div>
            <div className="footerlogo flex justify-center mt-[30px]  ">
            <div className="logo w-[135px] flex items-center justify-between ">
          <div className="drivelink-img w-[42px] ">
          <Image src={img} alt='Drivelink icon' />
          </div>
          <span className='text-[20px] text-[#2E396D] font-[500]'>Drivelink</span>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer