import React from 'react'

import Image from 'next/image'

const Banner = () => {
  return (
    <section id='banner' className='relative'>
      <Image src="/banner.png" className='object-cover' alt="banner image" fill />
      <div className="container">
        <div className="banner-content flex justify-center items-center relative py-36">
          <div className="rounded-full w-96 h-96 flex flex-wrap justify-center items-center" style={{ background: 'rgba(145, 213, 172, 0.9)' }}>
            <div className="text-wrap text-center">
              <h1 className='w-full text-5xl mb-4'>Software <br /> Engineer</h1>
              <strong className='text-xl'>Develop with purpose</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner