import About from '@/components/about-section/about'
import Header from '@/components/header-component/header'
import HeroSection from '@/components/hero-section/hero-section'
import React from 'react'
const page = () => {
  return (
   <div className="app bg-white min-h-[100vh]">
    <Header/>
    <HeroSection/>
    <About/>
   </div>
  )
}

export default page