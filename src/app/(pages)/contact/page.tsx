"use client";
import Contacthero from '@/components/contact-ui/contactHero'
import Forms from '@/components/contact-ui/forms'
import DownloadApp from '@/components/downloadapp/downloadapp'
import { useSectionRef } from '@/context/SectionRefContext'
import React from 'react'

const page = () => {
   const { heroSectionRef, aboutSectionRef, howSectionRef, downloadAppSectionRef } = useSectionRef();
  return (
    <div className="contactPage">
      <Contacthero/>
      <Forms/>
      <div ref={downloadAppSectionRef} id='downloadAppSection' >
<DownloadApp />
</div>
    </div>
  )
}

export default page