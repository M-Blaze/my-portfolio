import React from 'react'

import Tag from '@/app/components/Tag'

const CATEGORIES = [
  'Programming',
  'Data Science',
  'Technology',
  'Self Improvement',
  'Writing',
  'Relationships',
  'Machine Learning',
  'Productivity',
  'Politics'
]

const Categories = () => {
  return (
    <>
      <div className="block-header mb-4">
        <h3 className='text-xl'>Discover more</h3>
      </div>
      <div className="categories flex flex-wrap -mx-4">
        {
          CATEGORIES.map(category => {
            return (
              <div key={category} className="tag px-2 mb-4">
                <Tag tag={category} />
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Categories