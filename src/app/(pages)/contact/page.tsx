import Contacthero from '@/components/contact-ui/contactHero'
import Forms from '@/components/contact-ui/forms'
import DownloadApp from '@/components/downloadapp/downloadapp'
import React from 'react'

const page = () => {
  return (
    <div className="contactPage">
      <Contacthero/>
      <Forms/>
      <DownloadApp/>
    </div>
  )
}

export default page