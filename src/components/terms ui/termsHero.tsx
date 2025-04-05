import Image from 'next/image'
import React from 'react'
import imgbg1 from '../../../public/terms-page/Rectangle 5.png'
import imgbg2 from '../../../public/terms-page/Rectangle 6.png'
const TermsHero = () => {
  return (
    <div className='terms-hero-section relative ' >
        <div className="terms-hero-section-content max-w-[1200px] px-[18px] pt-[100px] pb-[70px] mx-auto ">
            <div className="h1 flex justify-center ">
                <span className='text-center font-[700] tracking-[-3%] text-[30px] leading-[40px] sm:text-[56px] sm:font-[600] sm:leading-[64px] max-w-[500px] sm:max-w-[1000px]  ' >
                Drivelink Terms and Conditions
                </span>
            </div>
            <div className="p flex justify-center mt-[30px] ">
                <p className='text-center max-w-[330px] sm:max-w-[750px] text-[#90979E] sm:text-[16px] text-[18px] font-[400] sm:leading-[24px] leading-[26px]  tracking-[0px] ' >
                    We’re here to provide support with any questions, issues, or guidance you may need. Our team is ready to assist you every step of the way to ensure a smooth experience.
                </p>
            </div>
        </div>
        {/* ab el */}
        <div className="ab">
            <div className="img absolute top-[100px] left-[-100px] sm:top-[-120px] sm:left-0 ">
                <Image className='' src={imgbg1} alt='bg-img'/>
            </div>
            <div className="img hidden sm:block sm:absolute  sm:top-[-90px] sm:right-0 ">
                <Image className='' src={imgbg2} alt='bg-img'/>
            </div>
        </div>
    </div>
  )
}

export default TermsHero