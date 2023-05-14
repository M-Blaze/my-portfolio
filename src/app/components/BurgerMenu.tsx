import React from 'react'

import './BurgerMenu.css'

const BurgerMenu = () => {
  return (
    <div className="burger-menu relative w-8 h-6 cursor-pointer tablet:hidden">
      <span className='menu-item absolute h-1 rounded-full bg-black'></span>
      <span className='menu-item absolute h-1 rounded-full bg-black'></span>
      <span className='menu-item absolute h-1 rounded-full bg-black'></span>
    </div>
  )
}

export default BurgerMenu