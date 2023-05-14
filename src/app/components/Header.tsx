import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import BurgerMenu from './BurgerMenu'

BurgerMenu

const Header = () => {
  return (
    <header className='fixed top-0 left-0 right-0 z-10' style={{ background: 'rgba(255, 255, 255, 0.9)' }}>
      <div className="container">
        <div className="header-content flex justify-between items-center py-2">
          <div className='logo'>
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={200} height={100} className='w-36' />
            </Link>
          </div>
          <nav className='navbar absolute top-full left-0 right-0 tablet:static bg-primary'>
            <ul className="nav-list tablet:flex tablet:-mx-3">
              <li className="px-3">
                <a href='#why-me' className='block tablet:inline-block hover:text-positive'>Why me</a>
              </li>
              <li className="px-3">
                <a href='#resume' className='block tablet:inline-block hover:text-positive'>Resume</a>
              </li>
              <li className="px-3">
                <a href='#social' className='block tablet:inline-block hover:text-positive'>Contact</a>
              </li>
            </ul>
          </nav>
          <BurgerMenu />
        </div>
      </div>
    </header>
  )
}

export default Header