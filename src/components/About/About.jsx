import React from 'react'
import './About.scss'

export default function About() {
  return (
    <div className='About'>
      <h1 className='About__title'>About ME</h1>
      <div className='About__content'>
        <p className='About__text About__text-dark'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni commodi magnam eius numquam ab laborum voluptate quae iure suscipit facere.
        </p>
        <p className='About__text About__text-light'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus aliquam sunt atque quam repellendus maiores magni rem nihil consectetur?
        </p>
      </div>
    </div>
  )
}
