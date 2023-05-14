import React, { useMemo } from 'react'
import Image from 'next/image'

import SectionHeader from '../components/SectionHeader'

const WhyMe = () => {
  const experienceDuration = useMemo(() => {
    const MILLI_SECONDS_PER_YEAR:number = 1000 * 60 * 60 * 24 * 365.25;
    const today:number = new Date().getTime()
    const startDate:number = new Date('2017-03-01').getTime()
    const differenceInMilliSeconds = Math.abs(today - startDate)

    return Math.floor(differenceInMilliSeconds / MILLI_SECONDS_PER_YEAR)
  }, [])

  return (
    <section id='why-me' className='bg-primary py-10'>
      <div className="container">
        <SectionHeader>Why You Should Choose Me</SectionHeader>
        <div className="content-wrapper -mx-6 pt-6 tablet:pt-8 text-justify">
          <div className="flex flex-wrap mb-6 tablet:mb-12">
            <div className="w-full mb-6 tablet:mb-0 tablet:w-1/2 px-6 pt-2">
              <div className="img-holder relative h-60 tablet:h-72 laptop:h-96">
                <Image src="/img02.jpg" alt='image of laptop' className='object-cover' fill />
              </div>
            </div>
            <div className="w-full mb-4 tablet:w-1/2 px-6 text-md table:text-xl">
              <h3 className='text-xl tablet:text-2xl mb-2 tablet:mb-4 capitalize'>Extensive Fullstack Expertise</h3>
              <p>With over {experienceDuration}+ years of hands-on experience in Fullstack development, I possess a comprehensive understanding of both frontend and backend technologies. Whether it&apos;s crafting elegant user interfaces or architecting scalable server-side solutions, I have a proven track record of delivering high-quality results.</p>
            </div>
          </div>
          <div className="flex flex-wrap mb-6 tablet:mb-12">
            <div className="w-full mb-6 tablet:mb-0 tablet:w-1/2 px-6 md:order-2">
              <div className="img-holder relative h-60 tablet:h-72 laptop:h-96">
                <Image src="/img04.jpeg" alt='image of laptop' className='object-cover' fill />
              </div>
            </div>
            <div className="w-full mb-4 tablet:w-1/2 px-6 text-md table:text-xl md:order-1">
              <h3 className='text-xl tablet:text-2xl mb-4 capitalize'>Versatility and Adaptability</h3>
              <p>As a Fullstack Developer, I pride myself on being adaptable to a wide range of technologies and frameworks. From JavaScript (React, Vue.js) and HTML/CSS to server-side languages like Node, Python, and PHP, I have a diverse skill set that allows me to work with various tech stacks and seamlessly transition between different projects.</p>
            </div>
          </div>
          <div className="flex flex-wrap mb-6 tablet:mb-12">
            <div className="w-full mb-6 tablet:mb-0 tablet:w-1/2 px-6 pt-2">
              <div className="img-holder relative h-60 tablet:h-72 laptop:h-96">
                <Image src="/img05.jpg" alt='image of laptop' className='object-cover' fill />
              </div>
            </div>
            <div className="w-full mb-4 tablet:w-1/2 px-6 text-md table:text-xl">
              <h3 className='text-xl tablet:text-2xl mb-4 capitalize'>End-to-End Project Ownership</h3>
              <p>I take full ownership of my work, from conceptualization and design to development and deployment. By handling both frontend and backend aspects, I ensure a cohesive and streamlined development process. This approach minimizes communication gaps, improves efficiency, and ensures a seamless user experience throughout the application.</p>
            </div>
          </div>
          <div className="flex flex-wrap mb-6 tablet:mb-12">
            <div className="w-full mb-6 tablet:mb-0 tablet:w-1/2 px-6 md:order-2">
              <div className="img-holder relative h-60 tablet:h-72 laptop:h-96">
                <Image src="/img03.png" alt='image of laptop' className='object-cover' fill />
              </div>
            </div>
            <div className="w-full mb-4 tablet:w-1/2 px-6 text-md table:text-xl md:order-1">
              <h3 className='text-xl tablet:text-2xl mb-4 capitalize'>Problem-Solving Mindset</h3>
              <p>As a Fullstack Developer, I thrive on solving complex problems. I possess strong analytical skills and a deep understanding of algorithms and data structures, enabling me to tackle challenges head-on. Whether it&apos;s optimizing performance, improving security, or resolving intricate technical issues, I approach problems with a determined and innovative mindset.</p>
            </div>
          </div>
          <div className="flex flex-wrap">
          < div className="w-full mb-4 tablet:w-1/2 px-6 pt-2">
              <div className="img-holder relative h-60 tablet:h-72 laptop:h-96">
                <Image src="/img06.jpg" alt='image of laptop' className='object-cover' fill />
              </div>
            </div>
            <div className="w-full mb-4 tablet:w-1/2 px-6 text-md table:text-xl">
              <h3 className='text-xl tablet:text-2xl mb-4 capitalize'>Continuous Learning</h3>
              <p>The tech industry evolves rapidly, and I am committed to staying at the forefront of the latest trends and advancements. I dedicate time to continuous learning, keeping myself updated with the latest tools, frameworks, and best practices. This enables me to deliver cutting-edge solutions and provide valuable insights into leveraging emerging technologies.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyMe