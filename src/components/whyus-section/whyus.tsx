/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image'
import React from 'react'
import drivelinkimg from '../../../public/whyusimg1.jpg'
import drivelinkimg1 from '../../../public/whyusimg2.jpg'
import whyusicon1 from '../../../public/whyusicon1.png'
import whyusicon2 from '../../../public/whyusicon2.png'
import whyusicon3 from '../../../public/whyusicon3.png'
import whyusicon4 from '../../../public/whyusicon4.png'

const Whyus = () => {
  return (
    <div className="whyus-section bg-[#101F91] opacity-[100%] " id='about' >
        <div className="whyus-content max-w-[1200px] mx-[auto] min-h-[80vh] bg-[#101F91] px-[20px] pb-[50px]  ">
        <div className="headerabout flex justify-center  ">
        <span className='text-center font-[500] text-[25px] sm:text-[56px] d-block  max-w-[400px] text-[white] mt-[50px] ' >Why Drivelink ?</span>
      </div>
      <div className="p flex justify-center mt-[20px] ">
        <p className=' text-[white] text-[16px] font-[400] leading-[22px] text-center   max-w-[380px] sm:max-w-[610px] ' >We help you get verified professional drivers at your service. You will be picked up and driven wherever you need, safely and efficiently with so much ease.</p>
      </div>
      {/* grid */}
      <div className="whyus-grp grid grid-cols-1  ">
        {/* imag and cards */}
        <div className="whyus1grid flex flex-col mt-[50px] items-center gap-[30px] sm:flex-row  ">
          {/* img */}
          <div className="max-w-[340px] sm:max-w-[580px] h-[336px] sm:h-[430px] rounded-[20px] sm:rounded-[30px] overflow-hidden sm:flex-1 ">
            <Image  className='w-[100%] h-full ' src={drivelinkimg} alt='drivelink-img' />
          </div>
          {/* cards */}
          <div className="cards flex flex-col gap-[30px] sm:flex-1  sm:h-[100%] sm:py-[20px] ">
            {/* card1 */}
            <div className="card1 rounded-[14px] border-[1px] border-[white] p-[23px] bg-[rgba(255,255,255,0.1)] sm:flex-1 ">
                <div className="whyuscardheader flex items-center gap-[20px] ">
                  <div className="whyusiconcard w-[20px] h-[20px] ">
                    <Image className='w-[100%] h-full ' src={whyusicon1} alt='card-icon' />
                  </div>
                  <div className="span text-[white] font-[700] text-[16px]  ">Safe & Secure</div>
                </div>
                <p className=" text-[12px] font-[400] text-opacity-[72%] mt-[20px] text-[white] leading-[20px] ">
                We prioritize your safety. Our drivers undergo rigorous background checks and our insurance coverage ensures your peace of mind throughout the journey.
                </p>
            </div>
            {/* card2 */}
            <div className="card1 rounded-[14px] border-[1px] border-[white] p-[23px] bg-[rgba(255,255,255,0.1)] sm:flex-1 ">
                <div className="whyuscardheader flex items-center gap-[20px] ">
                  <div className="whyusiconcard w-[20px] h-[20px] ">
                    <Image className='w-[100%] h-full ' src={whyusicon2} alt='card-icon' />
                  </div>
                  <div className="span text-[white] font-[700] text-[16px]  ">Transparent Pricing</div>
                </div>
                <p className=" text-[12px] font-[400] text-opacity-[72%] leading-[20px] mt-[20px] text-[white] ">
                Drivelink provides transparent and upfront pricing.  You&apos;ll know the cost of your trip before the start your journey.
                </p>
            </div>
          </div>
        </div>
         {/* imag and cards 2 */}
         <div className="whyus1grid flex flex-col mt-[50px] items-center gap-[30px] sm:flex-row-reverse ">
          {/* img */}
          <div className="max-w-[340px] sm:max-w-[580px] h-[336px] sm:h-[430px] rounded-[20px] sm:rounded-[30px] overflow-hidden sm:flex-1  ">
            <Image  className='w-[100%] h-full ' src={drivelinkimg1} alt='drivelink-img' />
          </div>
          {/* cards */}
          <div className="cards flex flex-col gap-[30px] sm:flex-1 sm:h-[100%] sm:py-[20px]  ">
            {/* card1 */}
            <div className="card1 rounded-[14px] border-[1px] border-[white] p-[23px] bg-[rgba(255,255,255,0.1)] sm:flex-1 ">
                <div className="whyuscardheader flex items-center gap-[20px] ">
                  <div className="whyusiconcard w-[20px] h-[20px] ">
                    <Image className='w-[100%] h-full ' src={whyusicon3} alt='card-icon' />
                  </div>
                  <div className="span text-[white] font-[700] text-[16px]  ">Time Saving</div>
                </div>
                <p className=" text-[12px] font-[400] text-opacity-[72%] leading-[20px] mt-[20px] text-[white] ">
                Drivelink helps you to make the most of your time. For all of your travels, we ensure to you there smoothly thereby giving you enough time to focus on what matters.
                </p>
            </div>
            {/* card2 */}
            <div className="card1 rounded-[14px] border-[1px] border-[white] p-[23px] bg-[rgba(255,255,255,0.1)] sm:flex-1 ">
                <div className="whyuscardheader flex items-center gap-[20px] ">
                  <div className="whyusiconcard w-[20px] h-[20px] ">
                    <Image className='w-[100%] h-full ' src={whyusicon4} alt='card-icon' />
                  </div>
                  <div className="span text-[white] font-[700] text-[16px]  ">Feedback And Ratings</div>
                </div>
                <p className=" text-[12px] font-[400] text-opacity-[72%] leading-[20px] mt-[20px] text-[white] ">
                Share your experience and rate our Drivers. Your feedback helps us maintain the highest standard of service.
                </p>
            </div>
          </div>
        </div>
      </div>
        </div>
    </div>
  )
}

export default Whyus