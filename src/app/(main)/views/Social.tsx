import React from 'react'

import SectionHeader from '../../components/SectionHeader'
import { Gmail, Github, Linkedin, Youtube } from '../../shared/icons'

const Social = () => {
  return (
    <section id='social' className='py-6 tablet:py-10 bg-primary'>
      <div className="container">
        <SectionHeader>Connect With Me</SectionHeader>
        <div className="list-holder pt-8">
          <ul className="socio-list flex justify-center items-center text-4xl">
            <li className='px-4'>
              <a href="mailto:raimoulik@gmail.com">
                <Gmail />
              </a>
            </li>
            <li className='px-4'>
              <a href="https://github.com/M-Blaze" target='_blank'>
                <Github />
              </a>
            </li>
            <li className='px-4'>
              <a href="https://www.linkedin.com/in/moulik-rai" target='_blank'>
                <Linkedin />
              </a>
            </li>
            <li className='px-4 text-5xl'>
              <a href="https://www.youtube.com/channel/UC8_7IRFmrHzGjZVjxKxvw8Q" target='_blank'>
                <Youtube />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Social