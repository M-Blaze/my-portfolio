'use client';

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

interface NavItemProps {
  label: string;
  path: string;
}

const NavItem:React.FC<NavItemProps> = ({ label, path }) => {
  const pathname = usePathname()
  const classes = classNames(
    'block tablet:inline-block hover:text-positive capitalize',
    pathname === path && 'text-positive'
  )

  return (
    <li className="px-3" key={path}>
      <Link className={classes} href={path}>{label}</Link>
    </li>
  )
}

export default NavItem