import React, { useMemo } from 'react'

const Footer = () => {
  const currentYear = useMemo(() => {
    return new Date().getFullYear()
  }, [])
  return (
    <footer>
      <div className="container">
        <div className="text-wrap">
          Copyright &copy; {currentYear} Moulik Rai - All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer