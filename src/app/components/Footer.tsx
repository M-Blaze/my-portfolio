import React, { useMemo } from 'react'

const Footer = () => {
  const currentYear = useMemo(() => {
    return new Date().getFullYear()
  }, [])
  return (
    <footer className='text-center py-6 bg-primary'>
      <div className="container">
        Copyright &copy; {currentYear} Moulik Rai - All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer