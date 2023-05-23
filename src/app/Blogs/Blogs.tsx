"use client"
import React from 'react'

import SubscribeModal from '../components/SubscribeModal'

const Blogs = () => {
  return (
    <>
      <div className="header-block pt-20 bg-yellow-400">
        <div className="container">
          <div className="content-wrap py-20">
            <h1 className='text-8xl mb-4'>Stay curious.</h1>
            <p className='text-2xl mb-8'>Discover stories, thinking, and expertise <br /> from writers on any topic.</p>
            <SubscribeModal />
          </div>
        </div>
      </div>
    </>
  )
}

export default Blogs