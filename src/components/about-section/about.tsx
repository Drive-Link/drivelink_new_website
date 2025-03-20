import Image from 'next/image'
import React from 'react'
import abouticon from '../../../public/about-icon.png'

const About = () => {
  return (
   <div className="about-section">
    <div className="section-content p-[20px] min-h-[80vh] border max-w-[1200px] mx-[auto] sm:p-0 ">
      <div className="headerabout flex justify-center ">
        <span className='text-center font-[700] text-[25px] sm:text-[56px] max-w-[400px] sm:max-w-[800px] d-block sm:leading-[100%] ' >How Our Driver App Works: <span className='text-[#101f91]' >Simple and Fast </span> </span>
      </div>
      <div className="p flex justify-center mt-[20px] ">
        <p className=' text-[#828589] text-[16px] font-[400] leading-[22px] text-center   max-w-[380px] sm:max-w-[610px] ' >Getting started as a car owner who wants to hire a professional driver has never been easier. Let’s show  you how it’s done in these easy steps</p>
      </div>
      <div className="about-boxes flex grid grid-cols-1 sm:grid-cols-2 gap-8 sm:mt-[30px] mt-[40px] ">
        {/* box1 */}
        <div className="about-box1 border h-[455px] basis-[335px] flex-1 bg-[#F4F7FF] px-[16px]  ">
          <div className="icon mt-[30px] ">
            <div className="icon-bg flex justify-center items-center w-[40px] h-[40px] bg-[#101f91] rounded-[100%] ">
              <Image  src={abouticon} alt='star-icon' />
            </div>
          </div>
          {/* writen content */}
          <div className="writen-content mt-[30px] ">
            <span className='font-[700] text-[16px] ' >Download and Create Account</span>
            <p className=' text-[12px] leading-[18px] font-[400] text-[#828589] mt-[16px] max-w-[300px]  ' >Download the app from any store. Create an account,   verify your identity, and register your car details to start  booking professional drivers.</p>
          </div>
        </div>
        {/* box2 */}
        <div className="about-box2 border h-[455px] bg-[#F4F7FF] basis-[335px] flex-1 px-[16px]  ">
        <div className="icon mt-[30px] ">
            <div className="icon-bg flex justify-center items-center w-[40px] h-[40px] bg-[#101f91] rounded-[100%] ">
              <Image  src={abouticon} alt='star-icon' />
            </div>
          </div>
          {/* writen content */}
          <div className="writen-content mt-[30px] ">
            <span className='font-[700] text-[16px] ' >Book Or Schedule A Driver</span>
            <p className=' text-[12px] leading-[18px] font-[400] text-[#828589] mt-[16px] max-w-[350px]  ' >Need A Driver Now Or Later? Choose Between Immediate
Booking Or Scheduling A Ride At Your Convenience</p>
          </div>
        </div>
        {/* box3 */}
        <div className="about-box3 border h-[455px] bg-[#F4F7FF] basis-[335px] flex-1 px-[16px]  ">
        <div className="icon mt-[30px] ">
            <div className="icon-bg flex justify-center items-center w-[40px] h-[40px] bg-[#FFC80F] rounded-[100%] ">
              <Image  src={abouticon} alt='star-icon' />
            </div>
          </div>
          {/* writen content */}
          <div className="writen-content mt-[30px] ">
            <span className='font-[700] text-[16px] ' >Track & Ride With Ease</span>
            <p className=' text-[12px] leading-[18px] font-[400] text-[#828589] mt-[16px] max-w-[300px]  ' >Get real-time updates as your verified driver arrives. Sit back, relax, and enjoy a smooth ride in your own car.</p>
          </div>
        </div>
        {/* box4 */}
        <div className="about-box4 border h-[455px] bg-[#F4F7FF] basis-[335px] flex-1 px-[16px]  ">
        <div className="icon mt-[30px] ">
            <div className="icon-bg flex justify-center items-center w-[40px] h-[40px] bg-[#FFC80F] rounded-[100%] ">
              <Image  src={abouticon} alt='star-icon' />
            </div>
          </div>
          {/* writen content */}
          <div className="writen-content mt-[30px] ">
            <span className='font-[700] text-[16px] ' >Pay & Rate your Driver</span>
            <p className=' text-[12px] leading-[18px] font-[400] text-[#828589] mt-[16px] max-w-[300px]  ' >Make hassle-free payments directly through the app and leave a rating to help maintain top-quality service.</p>
          </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default About