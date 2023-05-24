import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { LinkIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import classNames from 'classnames'

interface Blog {
  id: string,
  title: string,
  description: string,
  createdAt: string,
  timeToRead: string,
  coverImage: string,
  tags: string[]
}

interface BlogListItemProps {
  blog: Blog,
  className?: string
}

const BlogListItem:React.FC<BlogListItemProps> = ({ blog, className }) => {
  const classes = classNames(
    'flex flex-wrap',
    className && className
  )

  return (
    <li className={classes}>
      <div className="text-content flex-grow">
        <div className="block-header mb-4">
          <Link href={`/blogs/${blog.id}`} className='flex-grow'>
            <h3 className='text-2xl'>{blog.title}</h3>
            <p className='text-sm'>{blog.description}</p>
          </Link>
        </div>
        <div className="list-holder">
          <ul className="blog-info flex flex-wrap items-center -mx-2 text-sm">
            <li className='px-2'>{blog.createdAt}</li>
            <li className='px-2'>{blog.timeToRead}</li>
            <li className='flex-grow px-2'>
              {
                blog.tags.map(tag => {
                  return (
                    <Link className='mx-1' href={`/tag/${tag}`} key={tag}>
                      <Button size='sm' className='capitalize rounded-full px-4 bg-gray-100 font-normal'>{tag}</Button>
                    </Link>
                  )
                })
              }
            </li>
            <li>
              <LinkIcon />
            </li>
          </ul>
        </div>
      </div>
      <div className="img-holder ml-4 w-40 h-40 relative">
        <Image className='object-cover' src={blog.coverImage} alt={blog.title} fill />
      </div>
    </li>
  )
}

export default BlogListItem