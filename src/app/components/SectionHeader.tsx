import React from 'react'

import styles from './SectionHeader.module.css'

type SectionHeaderProps = {
  children: React.ReactNode
}

const BlockHeader:React.FC<SectionHeaderProps> = ({ children }) => {
  return (
    <div className="section-header text-center overflow-hidden">
      <h2 className={`text-positive text-4xl inline-block relative ${styles.header}`}>{children}</h2>
    </div>
  )
}

export default BlockHeader