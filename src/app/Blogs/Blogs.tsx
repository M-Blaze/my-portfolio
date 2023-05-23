"use client"
import React from 'react'

import Button from '../components/Button'

const Blogs = () => {
  const subscribeHandler = () => {
    console.log('clicked')
  }

  return (
    <>
      <div className="header-block pt-20 bg-yellow-400">
        <div className="container">
          <div className="content-wrap py-20">
            <h1 className='text-8xl mb-4'>Stay curious.</h1>
            <p className='text-2xl mb-8'>Discover stories, thinking, and expertise <br /> from writers on any topic.</p>
            <div className="btn-holder">
              <Button className="border-2 border-primary rounded-full px-8 py-2 text-xl font-bold bg-primary hover:bg-transparent text-yellow-400 hover:text-primary transition-all duration-200" onClick={subscribeHandler}>Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blogs