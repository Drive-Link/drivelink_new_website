import Image from 'next/image'
import React from 'react'
// import play from '../../../public/Group 3.png'
// import getiton from '../../../public/Get it on.png'
// import googleplay from '../../../public/Google Play.png'
import appstore from '../../../public/Group 3.png'
import playbtn from '../../../public/Mobile app store badge.png'
import downloadphone from '../../../public/download-phone.png'
import lines from '../../../public/lines.png'


const DownloadApp = () => {
  return (
    <div className="downloadapp-section bg-[white]">
      <div className="downloadapp-content  max-w-[1200px]  mx-[auto] px-[20px] py-[40px] relative ">

        <div className=" max-w-[1200px]  mx-[auto]  px-[20px] bg-[black] rounded-[20px] flex flex-col sm:flex-row sm:bg-[#030729] sm:px-[50px] ">
          {/* boxes */}
            <div className="download-box1 flex-[1.2] ">
              <div className="h1 flex justify-center sm:justify-start mt-[90px] ">
                  <span className='font-[700] text-[26px] sm:text-[40px] leading-[39px] text-[white]  max-w-[250px] text-center sm:max-w-[500px] sm:text-start ' >
                  Drive Smarter, Ride Safer Anytime, Anywhere!
                  </span>
              </div>
              <p className='mt-[20px] font-[400] text-[16px] leading-[25px] text-[white] text-center sm:text-start  sm:max-w-[600px] text-opacity-75 sm:text-[18px] sm:leading-[28px] tracking-[0%] ' >
              Join thousands of verified drivers and car owners enjoying seamless rides with just a tap. Book or drive with confidence, earn effortlessly, and experience true convenience.
              </p>
              {/* btn-group */}
              <div className="btn-group flex justify-center sm:justify-start mt-[30px] gap-[20px] ">
                {/* mannual btn1 */}
                {/* <div className="btn-1 w-[135px] h-[45px] bg-[white] rounded-[5px] flex ">
                  <div className="btn-box1">
                    <div className="img-play-icon w-[24px] h-[28px] ">
                      <Image className='w-[100%] h-[100%] ' src={play} alt='play-icon' />
                    </div>
                  </div>
                  <div className="btn-box2 flex flex-col ">
                    <div className="sub1 flex-1 ">
                        <div className="img-get-it">
                            <Image className='w-[100%]' src={getiton} alt='' />
                        </div>
                    </div>
                    <div className="sub2 flex-1 ">
                      <div className="img-google-play">
                          <Image className='w-[100%]' src={googleplay} alt='' />
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* copy paste */}
                 <div className="btn-2 w-[135px] h-[45px] ">
                  <Image className='w-[100%] h-[100%' src={playbtn} alt='' />
                </div>
                <div className="btn-2 w-[135px] h-[45px] ">
                  <Image className='w-[100%] h-[100%' src={appstore} alt='' />
                  {/* <div className="btn-box1"></div>
                  <div className="btn-box2">
                    <div className="sub1"></div>
                    <div className="sub2"></div>
                  </div> */}
                </div>
              </div>
            </div>
            {/* box2 */}
            <div className="download-box2 flex-1 flex justify-center sm:justify-end  mt-[30px] ">
             <div className="phone-img w-[400px] ">
              <Image className='w-[100%]  ' src={downloadphone} alt='' />
             </div>
            </div>

        </div>
        {/* ab-el */}
        {/* className='w-[100%] ' */}
        <div className="img-line absolute top-0 left-[-30px] ">
          <Image  src={lines} alt='bg-design' />
        </div>
      </div>
    </div>
  )
}

export default DownloadApp