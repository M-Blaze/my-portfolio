import React from 'react'

import SectionHeader from '../components/SectionHeader'
import { IconDownload } from '../shared/icons'

const Resume = () => {
  return (
    <section id='resume' className='text-center'>
      <div className="container">
        <SectionHeader>Resume</SectionHeader>
        <div className="text-wrap text-xl mb-12 pt-8">
          <strong>Please feel free to download a copy of my resume for your consideration.</strong>
        </div>
        <div className="link-wrap">
          <a className='flex justify-between max-w-4xl mx-auto bg-primary p-6 rounded-lg text-xl' href="/resume-moulik_rai.pdf" target="_blank">
            <span>Moulik Rai-Resume (pdf)</span>
            <div className="icon-wrap">
              <IconDownload fontSize="30px" className='inline-block' fill='rgb(103, 161, 126)' />Download
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Resume