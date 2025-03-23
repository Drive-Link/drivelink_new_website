import About from '@/components/about-section/about'
import DownloadApp from '@/components/downloadapp/downloadapp'
import HeroSection from '@/components/hero-section/hero-section'
import Whyus from '@/components/whyus-section/whyus'
import React from 'react'
const page = () => {
  return (
   <div className="app bg-white min-h-[100vh]">
    <HeroSection/>
    <About/>
    <Whyus/>
    <DownloadApp/>
   </div>
  )
}

export default page