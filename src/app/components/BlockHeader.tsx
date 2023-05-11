import React from 'react'

import styles from './BlockHeader.module.css'

type BLockHeaderProps = {
  children: React.ReactNode
}

const BlockHeader:React.FC<BLockHeaderProps> = ({ children }) => {
  return (
    <div className="block-header text-center overflow-hidden">
      <h2 className={`text-positive text-3xl inline-block relative ${styles.header}`}>{children}</h2>
    </div>
  )
}

export default BlockHeader