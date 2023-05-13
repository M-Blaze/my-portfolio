import React from 'react'

import Image from 'next/image'
import Link from 'next/link'


const Header = () => {
  return (
    <header className='fixed top-0 left-0 right-0 z-10' style={{ background: 'rgba(255, 255, 255, 0.9)' }}>
      <div className="container">
        <div className="header-content flex justify-between items-center py-2">
          <div className='logo'>
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={200} height={100} />
            </Link>
          </div>
          <nav className='navbar'>
            <ul className="nav-list flex -mx-2">
              <li className="px-2">
                <a href='#social'>Social</a>
              </li>
              <li className="px-2">
                <a href='#why-me'>Why me</a>
              </li>
              <li className="px-2">
                <a href='#resume'>Resume</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header