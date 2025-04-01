import Link from 'next/link'
import React from 'react'

const Forms
 = () => {
  return (
    <div className='forms bg-[#EBF1FF] ' >
        <div className="forms-content min-h-[90vh] mx-auto max-w-[1200px] px-[20px] py-[20px] sm:pb-[100px] ">
            <div className="formsgroup bg-[white] rounded-[16px] sm:rounded-[32px] sm:flex sm:gap-[50px] sm:py-[30px] sm:px-[18px] sm:flex-row-reverse shadow-lg px-[18px] py-[30px] ">
                {/* box1 */}
                <div className="formbox1 sm:flex-1 ">
                    <form action="">
                        <div className="form-group mt-[30px]">
                            <label className='text-[16px] font-[400] leading-[20px] text-[#64676B] ' htmlFor="">Last Name</label>
                            <input className='text-[16px] text-[#101828] leading-[24px] font-[400] outline-none px-[14px] py-[3px] border border-[#D0D5DD] rounded-[8px] w-[100%] ' type="text" />
                        </div>
                        {/* lastname */}
                        <div className="form-group mt-[30px]">
                            <label className='text-[16px] font-[400] leading-[20px] text-[#64676B] ' htmlFor="">First Name</label>
                            <input className='text-[16px] text-[#101828] leading-[24px] font-[400] outline-none px-[14px] py-[3px] border border-[#D0D5DD] rounded-[8px] w-[100%] ' type="text" />
                        </div>
                        {/* Email */}
                        <div className="form-group mt-[30px]">
                            <label className='text-[16px] font-[400] leading-[20px] text-[#64676B] ' htmlFor="">Email</label>
                            <input className='text-[16px] text-[#101828] leading-[24px] font-[400] outline-none px-[14px] py-[3px] border border-[#D0D5DD] rounded-[8px] w-[100%] ' type="email" />
                        </div>
                        {/* textarea */}
                        <div className="form-group mt-[30px]">
                            <label className='text-[16px] font-[400] leading-[20px] text-[#64676B] ' htmlFor="">Message</label>
                            
                            <textarea className='text-[16px] text-[#101828] leading-[24px] font-[400] outline-none px-[14px] py-[3px] border border-[#D0D5DD] rounded-[8px] w-[100%] min-h-[180px] '  ></textarea>
                        </div>
                        {/* terms */}
                        <div className="privacy-policy flex mt-[20px] items-start gap-[3px] ">
                            <div>
                            <input className='border border-[#90979E] cursor-pointer ' type="checkbox" name="" id="" />
                            </div>
                            <div className="">
                                <p className='text-[14px] font-[400] leading-[20px] text-[#90979E] max-w-[270px] sm:max-w-[490px] ' >
                                By submitting this form, you agree to the processing of personal data according to our
                                <Link href={'/terms'}>
                                 <span className='cursor-pointer hover:text-[blue]  underline' >Privacy Policy.</span>  
                                </Link>
                                </p>
                            </div>
                        </div>
                        <div className="btn mt-[30px] ">
                            <button className='w-[100%] py-[3px] sm:py-[5px] rounded-[12px] text-[white] bg-[#101F91] cursor-pointer ' type="submit">Submit</button>
                        </div>
                    </form>
                </div>
                {/* box2 */}
                <div className="sm:flex-1 ">
                    <div className="contactinfo bg-[#101F91] rounded-[28px] pt-[30px] sm:px-[20px] px-[18px] mt-[50px] pb-[50px] sm:mt-[0px] ">
                        <div className="h1 text-[white] ">
                        <span className='font-[700] text-[20px] leading-[36px] tracking-[0px] ' >Contact Information</span>
                        </div>
                        <div className="p mt-[20px] text-[white] ">
                            <p className='text-[14px] font-[400] leading-[24px] tracking-[0px] ' >
                                How to Get in Touch with Our Team
                            </p>
                        </div>
                        {/* box1 */}
                        <div className="box1 rounded-[24px] border border-[#DEDFE4] p-[18px]  bg-[rgba(225,225,225,0.1)] mt-[30px] ">
                            <div className="span text-white ">
                                <span className='font-[700] text-[18px] leading-[26px] tracking-[0px] ' >Email Support</span>
                            </div>
                            <div className="p mt-[14px] text-[14px] font-[400] leading-[20px] text-white opacity-75 ">
                                <p>Interested in switching? speak to our team.</p>
                            </div>
                            <div className="intouch  mt-[14px] text-[16px] font-[400] leading-[24px] text-white opacity-[90%] underline ">
                            <p>support@usedrivelink.com</p>
                            </div>
                        </div>
                        {/* box2 */}
                        <div className="box1 rounded-[24px] border border-[#DEDFE4] p-[18px]  bg-[rgba(225,225,225,0.1)] mt-[30px] ">
                            <div className="span text-white ">
                                <span className='font-[700] text-[18px] leading-[26px] tracking-[0px] ' >Chat to Sales</span>
                            </div>
                            <div className="p mt-[14px] text-[14px] font-[400] leading-[20px] text-white opacity-75 ">
                                <p>Reach out to our sales team for fast,personalized support.</p>
                            </div>
                            <div className="intouch  mt-[14px] text-[16px] font-[400] leading-[24px] text-white opacity-[90%] underline ">
                            <p>Mondays to Sundays: 8am-7pm </p>
                            </div>
                        </div>
                        {/* box3 */}
                        <div className="box1 rounded-[24px] border border-[#DEDFE4] p-[18px]  bg-[rgba(225,225,225,0.1)] mt-[30px] ">
                            <div className="span text-white ">
                                <span className='font-[700] text-[18px] leading-[26px] tracking-[0px] ' >Call Us</span>
                            </div>
                            <div className="p mt-[14px] text-[14px] font-[400] leading-[20px] text-white opacity-75 ">
                                <p>Give us a call for immediate assistance.</p>
                            </div>
                            <div className="intouch  mt-[14px] text-[16px] font-[400] leading-[24px] text-white opacity-[90%] underline ">
                            <p>+234905-968-5515</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Forms

