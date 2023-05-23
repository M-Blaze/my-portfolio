"use client"
import React from 'react'

import SubscribeModal from '../components/SubscribeModal'

const Blogs = () => {
  return (
    <>
      <div className="header-block pt-20 bg-yellow-400">
        <div className="container">
          <div className="banner py-28">
            <h1 className='text-6xl mb-4'>Unleash Your Curiosity</h1>
            <p className='text-2xl mb-8'>Explore Insights, Ideas, and Expertise <br /> on your Programming Journey!</p>
            <SubscribeModal />
          </div>
        </div>
      </div>
    </>
  )
}

export default Blogs