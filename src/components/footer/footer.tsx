import Image from 'next/image'
import React from 'react'
import img  from '../../../public/drivelink-icon.png'
import imgLinkedin  from '../../../public/linkedin.png'
import imgFacebook  from '../../../public/facebook icon.png'
import imgTwitter  from '../../../public/pajamas_twitter.png'
import imgInstagram  from '../../../public/instagram icon.png'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="footer bg-[#E8F1FF] ">
        <div className="footer-content max-w-[1200px] mx-[auto] px-[20px] sm:px-[0px] pb-[50px] ">
            {/* desktop */}
            <div className="sm:flex sm:justify-between sm:items-center ">

            <div className="link-grp grid grid-cols-2 gap-8 p-8 sm:p-0  font-[400] text-[20px] sm:text-[16px] sm:text-opacity-[75%] text-[#2E396D] sm:flex  sm:mt-[50px] cursor-pointer   ">
                <div className="bx1  text-center sm:text-start cursor-pointer hover:underline">About us</div>
                <div className="bx1  text-center sm:text-start cursor-pointer hover:underline ">How it works</div>
                <div className="bx1  text-center sm:text-start cursor-pointer hover:underline ">Services</div>
                <Link href='/contact'>
                <div className="bx1  text-center sm:text-start cursor-pointer hover:underline ">Contact us</div>
                </Link>
            </div>
            <div className="formy sm:mt-[50px]  ">
                <form className='sm:flex sm:items-center  sm:bg-[white] sm:rounded-[50px] sm:px-[10px] sm:py-[2px] sm:w-[500px] ' action="" method="post">
                    <div className="form-grp sm:flex-1   ">
                        <input className='w-[100%] rounded-[50px] px-[20px] py-[10px]  placeholder-[#343434] placeholder-opacity-[50%] bg-[white] outline-none ' type="text" placeholder='Enter email' />
                    </div>
                    <div className="form-grp mt-[10px] sm:mt-[0px]  ">
                        <button className='bg-[#101F91] w-[100%] rounded-[50px] px-[20px] py-[10px] text-[white] cursor-pointer  ' type="submit">Subscribe</button>
                    </div>
                </form>
            </div>
            </div>
            <hr className='mt-[30px] text-[#2E396D] opacity-[23%] ' />
            {/* desktop */}
            <div className="desktop sm:flex sm:justify-between sm:mt-[30px] ">
            {/* footer-links */}
            <div className="grp-page flex justify-center gap-[10px] mt-[30px] sm:mt-[0px] font-[400] text-[14px] sm:text-[16px] text-[#2E396D] order-2 cursor-pointer ">
                <div className=' hover:underline decoration-[#2E396D] ' > <Link href={'/terms'} >
                Terms
                </Link></div>
                <div className=' hover:underline decoration-[#2E396D] ' > <Link href={''} > 
                 Privacy
                </Link> </div>
                <div className=' hover:underline decoration-[#2E396D] ' > <Link href={''} >
                Cookies
                </Link></div>
            </div>
            {/* footer-icons */}
            <div className="footericon-grp mt-[30px] sm:mt-[0px] flex justify-center gap-4 order-3 cursor-pointer ">
                <div className="icon-bg bg-[white] w-[35px] h-[35px] rounded-[100%] flex justify-center items-center ">
                    <Image src={imgLinkedin} alt='linkedin link' />
                </div>
                <div className="icon-bg bg-[white] w-[35px] h-[35px] rounded-[100%] flex justify-center items-center  ">
                    <Image src={imgFacebook} alt='facebook link' />
                </div>
                <div className="icon-bg bg-[white] w-[35px] h-[35px] rounded-[100%] flex justify-center items-center  ">
                    <Image src={imgTwitter} alt='twitter link' />
                </div>
                <div className="icon-bg bg-[white] w-[35px] h-[35px] rounded-[100%] flex justify-center items-center  ">
                    <Image src={imgInstagram} alt='instagram link' />
                </div>
            </div>
            {/* footer logo */}
            <div className="footerlogo flex justify-center mt-[30px] sm:mt-[0px] order-1  ">
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
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer