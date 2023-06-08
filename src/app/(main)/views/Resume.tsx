import React from 'react'

import SectionHeader from '../../components/SectionHeader'
import { Download as IconDownload } from '../../shared/icons'

const Resume = () => {
  return (
    <section id='resume' className='text-center py-6 tablet:py-10'>
      <div className="container">
        <SectionHeader>Resume</SectionHeader>
        <div className="text-wrap text-md tablet:text:xl mb-8 tablet:mb-12 pt-6 tablet:pt-8">
          <strong>Please feel free to download a copy of my resume for your consideration.</strong>
        </div>
        <div className="link-wrap">
          <a className='flex justify-between max-w-4xl mx-auto bg-primary hover:bg-primary-100 hover:text-positive p-3 rounded-lg text-sm lg-phone:text-lg tablet:text-xl' href="/resume-moulik_rai.pdf" target="_blank">
            <span>Moulik Rai - Resume (pdf)</span>
            <div className="icon-wrap text-positive">
              <IconDownload className='inline-block text-xl' fill='#67a17e' />Download
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Resume