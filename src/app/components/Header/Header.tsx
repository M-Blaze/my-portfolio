import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import BurgerMenu from '../BurgerMenu'
import NavItem from '../NavItem'
import './Header.css'


const NAV_LINKS = [
  {
    label: 'home',
    path: '/'
  },
  {
    label: 'blogs',
    path: '/blogs'
  },
]

const Header = () => {
  return (
    <div className="header-wrap fixed top-0 left-0 right-0 z-20 ">
      <header className='header' style={{ background: 'rgba(255, 255, 255, 0.9)' }}>
        <div className="container">
          <div className="header-content flex justify-between items-center py-4">
            <div className='logo'>
              <Link href="/">
                <Image src="/logo.svg" alt="logo" width={150} height={50} className='w-18' />
              </Link>
            </div>
            <nav className='navbar absolute tablet:static top-full left-0 right-0 bg-primary opacity-0 tablet:opacity-100 tablet:bg-transparent -z-10 tablet:z-0 -translate-y-full  tablet:translate-y-0 transition-all duration-150'>
              <ul className="nav-list tablet:flex tablet:-mx-3 text-xl">
                
                {
                  NAV_LINKS.map(link => {
                    return (
                      <NavItem key={link.path} label={link.label} path={link.path} />
                    )
                  })
                }
              </ul>
            </nav>
            <BurgerMenu />
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header