"use client"
import React, { useEffect, useState } from 'react'

import './BurgerMenu.css'

const ACTIVE_NAV_CLASSNAME = 'nav-active'

const BurgerMenu = () => {
  const [isNavActive, setIsNavActive] = useState<boolean>(false)

  useEffect(() => {
    const hideOnClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      if (target.classList.contains('header') || target.closest('.header')) return

      setIsNavActive(false)
    }

    if (isNavActive) {
      document.body.addEventListener('click', hideOnClickOutside)
      return document.body.classList.add(ACTIVE_NAV_CLASSNAME)
    }

    document.body.removeEventListener('click', hideOnClickOutside)
    document.body.classList.remove(ACTIVE_NAV_CLASSNAME)
  }, [isNavActive])

  const toggleNav = () => {
    setIsNavActive(prev => !prev)
  }

  return (
    <div className="burger-menu relative w-7 h-6 cursor-pointer tablet:hidden" onClick={toggleNav}>
      <span className='menu-item absolute h-1 rounded-full bg-black'></span>
      <span className='menu-item absolute h-1 rounded-full bg-black'></span>
      <span className='menu-item absolute h-1 rounded-full bg-black'></span>
    </div>
  )
}

export default BurgerMenu