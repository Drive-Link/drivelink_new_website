import Image from 'next/image'
import React from 'react'
import abouticon from '../../../public/about-icon.png'
import box1img1 from '../../../public/Mockup-box-1.png'
import box1img2 from '../../../public/Mockup -box1(2).png'
import box2img2 from '../../../public/Mockup-box2.png'
import box3img1 from '../../../public/Mockup-box3.png'
import box4img1 from '../../../public/Mockup box4.png'
import box2imgcard1 from '../../../public/Card header.png'
import box2imgcard2 from '../../../public/box2-card2.png'
import box3imgcard1 from '../../../public/card-box3.png'
import box3imgcard2 from '../../../public/Card header box3.png'
import box4imgcard from '../../../public/card-box4.png'
import aboutlinebox1 from '../../../public/about-line-box1.png'
import aboutlinebox3 from '../../../public/aboutline-box-3.png'

const About = () => {
  return (
   <div className="about-section  " id='how-it-works' >
    <div className="section-content p-[20px] sm:pb-[80px] min-h-[80vh]  max-w-[1200px] mx-[auto] sm:p-0 ">
      <div className="headerabout flex justify-center sm:mt-[80px] ">
        <span className='text-center font-[700] text-[25px] sm:text-[56px] max-w-[400px] sm:max-w-[800px] d-block sm:leading-[100%] ' >How Our Driver App Works:  <span className='text-[#101f91] ' >Simple and Fast </span> </span>
      </div>
      <div className="p flex justify-center mt-[20px] ">
        <p className=' text-[#828589] text-[16px] sm;text-[20px] sm:leading-[26px] font-[400] leading-[22px] text-center   max-w-[380px] sm:max-w-[610px] ' >Getting started as a car owner who wants to hire a professional driver has never been easier. Let’s show  you how it’s done in these easy steps</p>
      </div>
      {/* boxes */}
      <div className="flex justify-center sm:mt-[30px]  ">

      <div className="about-boxes   gap-[44px] sm:gap-x-[44px] sm:gap-y-[44px]  grid grid-cols-1 sm:grid-cols-2  sm:mt-[30px] mt-[40px]  sm:max-w-[1200px] sm:w-[100%]  ">
        {/* box1 */}
        <div className="about-box1   max-w-[600px]  bg-[#F4F7FF] px-[16px] sm:px-[26px] sm:rounded-[7px]  overflow-hidden sm:overflow-hidden ">
          {/* icon and h1 */}
          <div className="flex  flex-col gap-[30px] mt-[30px] sm:flex-row sm:items-center sm:gap-[20px] ">

          <div className="icon  ">
            <div className="icon-bg flex justify-center items-center w-[40px] h-[40px] bg-[#101f91] rounded-[100%] ">
              <Image  src={abouticon} alt='star-icon' />
            </div>
          </div>
          <div className="h">
          <span className='font-[700] text-[16px] sm:text-[30px] ' >Download and Create Account</span>
          </div>
          </div>
          {/* writen content */}
          <div className="writen-content mt-[20px] ">
            
            <p className=' text-[12px] sm:text-[16] leading-[18px] sm:leading-[28px] font-[400] text-[#828589]  max-w-[300px] sm:max-w-[400px]  ' >Download the app from any store. Create an account,   verify your identity, and register your car details to start  booking professional drivers.</p>
          </div>
          {/* mock-ups */}
          <div className="img-group mt-[40px] sm:mt-[40px] flex items-end justify-start sm:justify-center relative ">
            <div className="img1 w-[150px] sm:w-[200px] z-[1] ">
              <Image src={box1img1} alt='' />
            </div>
            <div className="img2 ml-[-50px] sm:w-[200px] w-[150px]  z-[1]">
              <Image src={box1img2} alt='' />
            </div>
            {/* ab-el */}
            <div className="img absolute top-[-15]  left-0  w-[110%]  z-[0] sm:w-[110%]  ">
              <Image className='w-[100%] sm:ml-[-8px]  ml-[-50px] h-[100%] ' src={aboutlinebox1} alt='lines' />
            </div>
          </div>
        </div>
        {/* box2 */}
        <div className="about-box1   max-w-[600px] flex-1 bg-[#F4F7FF] px-[16px] sm:px-[26px] sm:rounded-[7px]  overflow-hidden sm:overflow-hidden py-[0px] ">
          {/* icon and h1 */}
          <div className="flex  flex-col gap-[30px] mt-[30px] sm:flex-row sm:items-center sm:gap-[20px] ">

          <div className="icon  ">
            <div className="icon-bg flex justify-center items-center w-[40px] h-[40px] bg-[#101f91] rounded-[100%] ">
              <Image  src={abouticon} alt='star-icon' />
            </div>
          </div>
          <div className="h">
          <span className='font-[700] text-[16px] sm:text-[30px] ' >Book Or Schedule A Driver</span>
          </div>
          </div>
          {/* writen content */}
          <div className="writen-content mt-[20px] ">
            
            <p className=' text-[12px] sm:text-[16] leading-[18px] sm:leading-[28px] font-[400] text-[#828589]  max-w-[350px] sm:max-w-[400px]  ' >Need A Driver Now Or Later? Choose Between Immediate
            Booking Or Scheduling A Ride At Your Convenience</p>
          </div>

          {/* mock-ups */}
          <div className="img-group mt-[40px] sm:mt-[40px]  flex items-end sm:translate-y-[14px]  relative  ">
          {/* sm:translate-y-[-180px]  sm:translate-x-[95px] */}
           
            <div className="img2 ml-[-50px] sm:w-[200px] w-[150px]  z-[1] ml-[50px] sm:ml-[120px] ">
              <Image src={box2img2} alt='' />
            </div>
           
            {/* ab-el */}
            <div className="img absolute top-[-15]  left-0  w-[110%]  z-[0] sm:w-[110%]  ">
              <Image className='w-[100%] sm:ml-[-8px]  ml-[-50px] h-[100%] ' src={aboutlinebox1} alt='lines' />
            </div>
            <div className="img1 w-[150px] sm:w-[200px] z-[2] absolute sm:top-[55px] top-[40px] sm:left-[70px] ">
              <Image src={box2imgcard1} alt='' />
            </div>
            <div className="img2  sm:w-[200px] w-[150px]  z-[1] absolute   sm:top-[70px] left-[180px] sm:left-[300px] ">
              <Image src={box2imgcard2} alt='' />
            </div>
          </div>
        </div>
       {/* box3 */}
       <div className="about-box1   max-w-[600px] flex-1 bg-[#F4F7FF] px-[16px] sm:px-[26px] sm:rounded-[7px]  overflow-hidden sm:overflow-hidden ">
          {/* icon and h1 */}
          <div className="flex  flex-col gap-[30px] mt-[30px] sm:flex-row sm:items-center sm:gap-[20px] ">

          <div className="icon  ">
            <div className="icon-bg flex justify-center items-center w-[40px] h-[40px] bg-[#FFC80F] rounded-[100%] ">
              <Image  src={abouticon} alt='star-icon' />
            </div>
          </div>
          <div className="h">
          <span className='font-[700] text-[16px] sm:text-[30px] ' >Track & Ride With Ease</span>
          </div>
          </div>
          {/* writen content */}
          <div className="writen-content mt-[20px] ">
            
            <p className=' text-[12px] sm:text-[16] leading-[18px] sm:leading-[28px] font-[400] text-[#828589]  max-w-[300px] sm:max-w-[400px]  ' >Get real-time updates as your verified driver arrives. Sit back, relax, and enjoy a smooth ride in your own car.</p>
          </div>
          {/* mock-ups */}
          <div className="img-group mt-[40px] sm:mt-[40px] flex items-end justify-start  relative  ">
            
            <div className="img1 w-[150px] sm:w-[250px] z-[1] ml-[10px] ">
              <Image className='w-[100%] ' src={box3img1} alt='' />
            </div>
            {/* ab-el */}
            <div className="img absolute top-[-20px]  left-[20px]  w-[100%]  z-[0] sm:w-[110%]  ">
              <Image className='w-[100%] sm:ml-[-8px]  ml-[-50px] h-[100%] ' src={aboutlinebox3} alt='lines' />
            </div>
            <div className="img absolute bottom-[0px] sm:bottom-[60px]  left-[80px] sm:left-[20px]  w-[200px] h-[113px]  z-[1] sm:w-[110%]  ">
              <Image className='   ' src={box3imgcard1} alt='lines' />
            </div>
            <div className="img absolute top-[9px]  left-[160px]  w-[200px] h-[113px]  z-[1] sm:w-[110%]  ">
              <Image className=' sm:ml-[-8px]  ml-[-50px]  ' src={box3imgcard2} alt='lines' />
            </div>
          </div>
        </div>
       {/* box4 */}
       <div className="about-box1   max-w-[600px] flex-1 bg-[#F4F7FF] px-[16px] sm:px-[26px] sm:rounded-[7px]  overflow-hidden sm:overflow-hidden ">
          {/* icon and h1 */}
          <div className="flex  flex-col gap-[30px] mt-[30px] sm:flex-row sm:items-center sm:gap-[20px] ">

          <div className="icon  ">
            <div className="icon-bg flex justify-center items-center w-[40px] h-[40px] bg-[#FFC80F] rounded-[100%] ">
              <Image  src={abouticon} alt='star-icon' />
            </div>
          </div>
          <div className="h">
          <span className='font-[700] text-[16px] sm:text-[30px] ' >Pay & Rate your Driver</span>
          </div>
          </div>
          {/* writen content */}
          <div className="writen-content mt-[20px] ">
            
            <p className=' text-[12px] sm:text-[16] leading-[18px] sm:leading-[28px] font-[400] text-[#828589]  max-w-[300px] sm:max-w-[400px]  ' >Make hassle-free payments directly through the app and leave a rating to help maintain top-quality service.</p>
          </div>
          {/* mock-ups */}
          <div className="img-group mt-[40px] sm:mt-[40px] flex items-end justify-start sm:justify-center relative ">
            <div className="img1 w-[150px] sm:w-[250px] z-[1] ">
              <Image src={box4img1} alt='' />
            </div>
            <div className="img2 ml-[-50px] sm:w-[200px] w-[150px]  z-[1]">
              <Image src={box4imgcard} alt='' />
            </div>
            {/* ab-el */}
            <div className="img absolute top-[-15]  left-0  w-[110%]  z-[0] sm:w-[110%]  ">
              <Image className='w-[100%] sm:ml-[-8px]  ml-[-50px] h-[100%] ' src={aboutlinebox3} alt='lines' />
            </div>
          </div>
        </div>
        
      </div>
      </div>
    </div>
   </div>
  )
}

export default About