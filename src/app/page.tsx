"use client";
import About from '@/components/about-section/about'
import DownloadApp from '@/components/downloadapp/downloadapp'
import HeroSection from '@/components/hero-section/hero-section'
import Whyus from '@/components/whyus-section/whyus'
import { useSectionRef } from '@/context/SectionRefContext';
import React from 'react'
import { useRef } from "react";
const page = () => {
  // Use refs for each section
  const { heroSectionRef, aboutSectionRef, howSectionRef, downloadAppSectionRef } = useSectionRef();
  return (
   <div className="app bg-white min-h-[100vh]">
    <div ref={heroSectionRef} id='home' >
    <HeroSection/>
    </div>
    <div ref={howSectionRef} id='how-it-works' >
    <About/>
    </div>
    <div ref={aboutSectionRef} id='about' >

    <Whyus/>
    </div>
    <div ref={downloadAppSectionRef} id='download' >

    <DownloadApp />
    </div>
   </div>
  )
}

export default page