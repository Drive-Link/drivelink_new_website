import Image from 'next/image'
import React from 'react'
import img from '../../../public/herogroupavatar.png'
import worldDrivers from '../../../public/world-avatar.png'
import worldBg from '../../../public/map-bg 1.png'
import box1arrow from '../../../public/box1arrowup.png'
import herobox2card1 from '../../../public/herobox2card1.png'

const HeroSection = () => {
  return (
    <div className="hero-section  bg-[rgba(182,204,255,0.095)]  ">
        <div className="hero-section-content max-w-[1200px] mx-[auto] bg-[transparent] min-h-[80vh] flex flex-col  p-[20px] sm:flex-row sm:relative sm:p-0   ">
            <div className="box1  ">
                {/* mobile */}
                <div className="mobile  flex-col flex items-center w-[100%] sm:hidden ">
                  <div className="span font-[700] text-[30px] leading-[40px] text-center "> Find and Hire Verified </div>
                  <div className="span font-[700] text-[30px] leading-[40px]  "> Drivers <span className=' text-[#101f91]' >Fast and</span> </div>
                  <div className="span font-[700] text-[30px] leading-[40px] text-[#101f91] "> Hassle Free </div>
                </div>
                <div className="desktop hidden sm:block ">
                <span className='font-[700] text-[64px] leading-[72px] '>Find and Hire <br /> Verified Drivers  </span> <br />
                <span className='font-[700] text-[64px] text-[#101f91] leading-[72px] ' >Fast and Hassle Free</span>
                </div>
                <div className='flex justify-center sm:justify-start'>
                    <p className='leading-[26px] font-[400] text-[#828589] font-[18px] text-center sm:text-start ' >Seamless rides, professional drivers, your car – <br className='sm:hidden' />  your way! Book a verified <br className='hidden sm:block' /> driver instantly or <br className='sm:hidden'  /> schedule ahead for a stress-free driving <br className='sm:hidden' /> experience.</p>
                </div>
                {/* btn group */}
                <div className="btn-group flex justify-center sm:justify-start ">
          <button className='bg-[#101f91] text-white w-[128px] h-[44px] font-[400] p-[16px] rounded-[8px] flex justify-center items-center d-block cursor-pointer '>Get Started</button>
                <button className='bg-white min-w-[120px] h-[44px] text-[#101f91] font-[400] p-[16px] flex justify-center items-center d-block  rounded-[8px] cursor-pointer  '>Download App</button>
                </div>
                {/* ava */}
                <div className="flex flex-col items-center sm:items-start ">
                  <div className="img-group flex items-center gap-[10px]">

                    <div className=" w-[18px] h-[10px]">
                    <Image className='w-[100%] h-[100%] ' src={box1arrow} alt='arrow up' />
                    </div>
                    <div className="img">
                    <Image src={img} alt='avatars of all drivers' />
                    </div>
                  </div>
                  <p className='text-[#828589] text-[16] font-[400] sm:ml-[28px] ' >
                  Trusted by satisfied users and drivers, our hailing <br /> services have made a real impact on people’s lives
                  </p>
                </div>
            </div>
            {/* hero section box two */}
            <div className="box2 relative  flex-col flex items-center  ">
                 <div className="img max-w-[310px] h-[330px] mt-[20px] sm:max-w-[520px] sm:h-[460px] ">
                  <Image className='w-[100%]' src={worldDrivers} alt='connecting to drivers' />
                 </div>
                 {/* ab-group mobile */}
                  <div className="absolu  sm:hidden ">
                <div className="world-img-bg absolute top-[10%] left-[0%]  w-[100%]  ">
                  <Image src={worldBg} alt='hero world background' />
                </div>
                <div className="card1img w-[152px] h-[80px] absolute left-[0px] bottom-[0px] ">
                  <Image className='w-[100%] h-[100%] ' src={herobox2card1} alt='card-header one' />
                </div>

              </div>
            </div>
        </div>
            {/* absolute-group element */}
            <div className="absolu hidden sm:block">
              <div className="world-img-bg absolute top-[10%] left-[37%]    ">
                <Image src={worldBg} alt='hero world background' />
              </div>

            </div>
    </div>
  )
}

export default HeroSection