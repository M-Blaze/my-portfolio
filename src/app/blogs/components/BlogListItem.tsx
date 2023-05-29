import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import classNames from 'classnames'

import Tag from '@/app/components/Tag'
import BookmarkButton from './BookmarkButton'

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
      <div className="img-holder mx-auto tablet:mx-0 mb-8 tablet:mb-0 tablet:ml-4 w-52 tablet:w-40 h-52 tablet:h-40 relative tablet:order-2">
        <Image className='object-cover' src={blog.coverImage} alt={blog.title} fill />
      </div>
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
            <li className='flex-grow px-2 flex flex-wrap -mx-2'>
              {
                blog.tags.map(tag => {
                  return (
                    <div className="category px-1" key={tag} >
                      <Tag tag={tag} />
                    </div>
                  )
                })
              }
            </li>
            <li>
              <BookmarkButton />
            </li>
          </ul>
        </div>
      </div>
    </li>
  )
}

export default BlogListItem