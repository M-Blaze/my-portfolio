"use client"
import React from 'react'

import SubscribeModal from '../components/SubscribeModal'
import BlogListItem from './components/BlogListItem'

const BLogItems = [{
  "id": "01H15QG3R614ZHECCKF4S0658V",
  "title": "Span",
  "description": "Paralytic lagophthalmos unspecified eye, unspecified eyelid",
  "createdAt": "2022-06-15",
  "timeToRead": "8:38 PM",
  "tags": [
    "TypeScript",
    "Go"
  ],
  "coverImage": "http://dummyimage.com/123x100.png/5fa2dd/ffffff"
}, {
  "id": "01H15QG4KNNT90WV2771A9G6EH",
  "title": "Zamit",
  "description": "Oth complications of surgical and medical care, NEC, subs",
  "createdAt": "2023-03-15",
  "timeToRead": "10:18 AM",
  "tags": [
    "Perl"
  ],
  "coverImage": "http://dummyimage.com/204x100.png/cc0000/ffffff"
}, {
  "id": "01H15QG4KQTEMNH3SFCRN5GCD5",
  "title": "Rank",
  "description": "Other contact with other marine mammals, initial encounter",
  "createdAt": "2023-01-09",
  "timeToRead": "6:57 AM",
  "tags": [
    "Ruby",
    "TypeScript"
  ],
  "coverImage": "http://dummyimage.com/149x100.png/cc0000/ffffff"
}, {
  "id": "01H15QG4KRZPWN2MRAM2V3G4MN",
  "title": "Hatity",
  "description": "Pnctr of abd wall w/o fb, right upper q w/o penet perit cav",
  "createdAt": "2022-05-27",
  "timeToRead": "8:18 AM",
  "tags": [
    "Haskell",
    "Java",
    "Python"
  ],
  "coverImage": "http://dummyimage.com/161x100.png/5fa2dd/ffffff"
}, {
  "id": "01H15QG4KS8TEWRW33V3FXH3JC",
  "title": "Quo Lux",
  "description": "Disp fx of med malleolus of unsp tibia, 7thJ",
  "createdAt": "2022-08-25",
  "timeToRead": "8:08 AM",
  "tags": [
    "TypeScript",
    "PHP"
  ],
  "coverImage": "http://dummyimage.com/200x100.png/dddddd/000000"
}, {
  "id": "01H15QG4KT8WBBRPJVQHHPVCF2",
  "title": "Zontrax",
  "description": "Osteomyelitis of orbit",
  "createdAt": "2022-11-18",
  "timeToRead": "8:07 PM",
  "tags": [
    "C++",
    "R",
    "Swift"
  ],
  "coverImage": "http://dummyimage.com/130x100.png/ff4444/ffffff"
}, {
  "id": "01H15QG4KWB06AMS36663A4C7E",
  "title": "Fintone",
  "description": "Terorsm w explosn of marine weap, publ sfty offcl inj, sqla",
  "createdAt": "2022-06-25",
  "timeToRead": "6:19 PM",
  "tags": [
    "TypeScript"
  ],
  "coverImage": "http://dummyimage.com/171x100.png/5fa2dd/ffffff"
}, {
  "id": "01H15QG4KX58KRPJSN986ZV687",
  "title": "Redhold",
  "description": "Fetomaternal placental transfusion syndrome",
  "createdAt": "2022-08-16",
  "timeToRead": "7:36 PM",
  "tags": [
    "C#",
    "Rust"
  ],
  "coverImage": "http://dummyimage.com/118x100.png/dddddd/000000"
}, {
  "id": "01H15QG4KYXG157JXGCTVF84ZE",
  "title": "Wrapsafe",
  "description": "Other injury of inferior mesenteric artery",
  "createdAt": "2022-06-25",
  "timeToRead": "1:04 AM",
  "tags": [
    "Haskell",
    "Go",
    "Python"
  ],
  "coverImage": "http://dummyimage.com/216x100.png/5fa2dd/ffffff"
}, {
  "id": "01H15QG4KZ3YXEVZ8574N2CQ5S",
  "title": "Voltsillam",
  "description": "Other spondylosis with myelopathy",
  "createdAt": "2023-02-16",
  "timeToRead": "5:11 AM",
  "tags": [
    "Python"
  ],
  "coverImage": "http://dummyimage.com/104x100.png/dddddd/000000"
}]

const Blogs = () => {
  return (
    <>
      <div className="header-block pt-20 bg-yellow-400 mb-8">
        <div className="container">
          <div className="banner py-28">
            <h1 className='text-6xl mb-4'>Unleash Your Curiosity</h1>
            <p className='text-2xl mb-8'>Explore Insights, Ideas, and Expertise <br /> on your Programming Journey!</p>
            <SubscribeModal />
          </div>
        </div>
      </div>
      <div className="blog-content">
        <div className="container">
          <div className="list-holder">
            <ul className="blog-lists">
              {
                BLogItems.map(blog => {
                  return <BlogListItem className='mb-8' blog={blog} key={blog.id} />
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blogs