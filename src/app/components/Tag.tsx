"use client"

import React from 'react'
import Link from 'next/link'

import { Button } from '@chakra-ui/react'

interface TagProps {
  tag: string
}

const Tag:React.FC<TagProps> = ({ tag }) => {
  return (
    <Link href={`/tag/${tag}`} key={tag}>
      <Button size='sm' className='capitalize rounded-full px-4 bg-gray-100 font-normal'>{tag}</Button>
    </Link>
  )
}

export default Tag