import React from 'react'
import './Blog.scss'

export default function Blog() {
  return (
    <div className='Blog'>
      <div className="Blog__photo">
        <img src="./images/blog.jpg" alt="trees" />
      </div>
      <div className="Blog__all">
        <div className="Blog__about">
          <h1>Lorem ipsum dolor sit amet.</h1>
        </div>
        <div className="Blog__title">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis cupiditate voluptatem quaerat ad id, esse cum repellat, veritatis dolorem ab debitis iste reprehenderit. Ex quod explicabo velit nisi inventore!</p>
        </div>
      </div>
      
    </div>
  )
}
