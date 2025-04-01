import About from '@/components/about-section/about'
import DownloadApp from '@/components/downloadapp/downloadapp'
import HeroSection from '@/components/hero-section/hero-section'
import Whyus from '@/components/whyus-section/whyus'
import React from 'react'
// import { useRef } from "react";
const page = () => {
  // const hoomesection1Ref = useRef<HTMLDivElement | null >(null);
  // const aboutsection2Ref = useRef<HTMLDivElement | null >(null);
  // const howitworksection3Ref = useRef<HTMLDivElement | null >(null);
  // const downloadsection3Ref = useRef<HTMLDivElement | null >(null);

  // const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
  //   ref.current?.scrollIntoView({ behavior: "smooth" });
  // };
  return (
   <div className="app bg-white min-h-[100vh]">
    <HeroSection/>
    <About/>
    <Whyus/>
    <DownloadApp />
   </div>
  )
}

export default page