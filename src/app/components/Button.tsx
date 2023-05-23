import React from 'react'
import classNames from 'classnames'

interface ButtonProps {
  className?: string,
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  children: React.ReactNode
}

const Button:React.FC<ButtonProps> = ({ children,  className, onClick }) => {
  const classes = classNames(className && className)

  return (
    <button onClick={onClick} className={classes}>{children}</button>
  )
}

export default Button