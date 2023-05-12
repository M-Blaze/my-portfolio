import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-content flex justify-between items-center py-2">
          <div className='logo'>
            <Link href={'/'}>
              <Image src="/logo.png" alt="logo" width={200} height={100} />
            </Link>
          </div>
          <ul className="nav-list flex">
            <li className="px-2">sadfa</li>
            <li className="px-2">sadfa</li>
            <li className="px-2">sadfa</li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header