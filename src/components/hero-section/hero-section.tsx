import React from 'react'

const HeroSection = () => {
  return (
    <div className="hero-section  bg-[rgba(182,204,255,0.095)] ">
        <div className="hero-section-content max-w-[1200px] mx-[auto] bg-white min-h-[80vh]  ">
            <div className="box1  ">
                <span className='font-[700] text-[64px] leading-[72px] '>Find and Hire <br /> Verified Drivers  </span> <br />
                <span className='font-[700] text-[64px] text-[#101f91] leading-[72px] ' >Fast and Hassle Free</span>
                <div>
                    <p className='leading-[26px] font-[400] text-[#828589] font-[18px] ' >Seamless rides, professional drivers, your car – your way! Book a verified <br /> driver instantly or schedule ahead for a stress-free driving experience.</p>
                </div>
                <div className="btn-group flex ">
          <button className='bg-[#101f91] text-white w-[128px] h-[44px] font-[400] p-[16px] rounded-[8px] flex justify-center items-center d-block cursor-pointer '>Get Started</button>
                <button className='bg-white min-w-[120px] h-[44px] text-[#101f91] font-[400] p-[16px] flex justify-center items-center d-block  rounded-[8px] cursor-pointer  '>Download App</button>
                </div>
            </div>
            <div className="box2">
                 
            </div>
        </div>
    </div>
  )
}

export default HeroSection