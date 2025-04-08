'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import img from '../../../public/drivelink-icon.png'
import menu from '../../../public/menu.png'
import closeIcon from '../../../public/close.png' // add a close icon if you have
import Link from 'next/link'
import { useSectionRef } from '@/context/SectionRefContext'
import { Menu, X, Download } from 'lucide-react'



const Header = () => {
  const {
    heroSectionRef,
    aboutSectionRef,
    howSectionRef,
    downloadAppSectionRef,
    scrollToSection,
  } = useSectionRef()

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleScrollAndCloseMenu = (ref: React.RefObject<HTMLElement|any>) => {
    scrollToSection(ref)
    setIsMobileMenuOpen(false)
  }

  return (
    <div className='header bg-[rgba(235,241,255,0.3)] relative z-[99]'>
      <div className='header-content min-h-[10vh] max-w-[1200px] mx-auto flex justify-between items-center p-[20px] sm:p-0'>
        {/* Logo */}
        <div className='logo w-[135px] flex items-center justify-between cursor-pointer'>
          <Link href='/'>
            <div className='drivelink-img w-[42px]'>
              <Image src={img} alt='Drivelink icon' />
            </div>
          </Link>
          <Link href='/'>
            <span className='text-[20px] text-[#2E396D] font-[500]'>Drivelink</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className='hidden sm:block'>
          <ul className='flex text-[16px] w-[200px] justify-between font-[400]'>
            <li
              onClick={() => scrollToSection(aboutSectionRef)}
              className='cursor-pointer hover:underline'
            >
              About us
            </li>
            <li
              onClick={() => scrollToSection(howSectionRef)}
              className='cursor-pointer hover:underline'
            >
              How it Works
            </li>
          </ul>
        </nav>

        {/* Desktop Buttons */}
        <div className='nav-btn font-[400] gap-[16px] hidden sm:flex'>
          <Link href='/contact'>
            <button className='bg-white w-[120px] h-[44px] text-[#101f91] p-[16px] rounded-[8px] cursor-pointer flex justify-center items-center '>
              Contact us
            </button>
          </Link>
          <button
            onClick={() => scrollToSection(downloadAppSectionRef)}
            className='bg-[#101f91] text-white w-[128px] h-[44px] p-[16px] rounded-[8px] cursor-pointer flex justify-center items-center '
          >
            Download
          </button>
        </div>

        {/* Mobile Icon */}
        <div onClick={toggleMobileMenu} className="sm:hidden cursor-pointer">
  {isMobileMenuOpen ? <X size={28}  className="text-[#101f91]" /> : <Menu size={28}  className="text-[#101f91]" />}
</div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className='sm:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 z-[98] animate-slide-down'>
          <ul className='flex flex-col items-center gap-4 text-[#101f91] font-[400]'>
            <li onClick={() => handleScrollAndCloseMenu(aboutSectionRef)} className='cursor-pointer'>
              About us
            </li>
            <li onClick={() => handleScrollAndCloseMenu(howSectionRef)} className='cursor-pointer'>
              How it Works
            </li>
            <li>
              <Link href='/contact' onClick={() => setIsMobileMenuOpen(false)}>
                Contact us
              </Link>
            </li>
            <li>
              <button
                onClick={() => handleScrollAndCloseMenu(downloadAppSectionRef)}
                className='bg-[#101f91] text-white px-6 py-2 rounded-[8px]'
              >
                Download
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Header
