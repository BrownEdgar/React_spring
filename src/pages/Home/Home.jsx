import React from 'react'
import './Home.scss'

export default function Home() {
  return (
    <div className='Home'>
      <div className="Home__photo">
        <img src="./images/home.jpg" alt="trees" />
      </div>
      <div className="Home__all">
        <div className="Home__about">
          <h1>Lorem ipsum dolor sit amet.</h1>
        </div>
        <div className="Home__title">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis cupiditate voluptatem quaerat ad id, esse cum repellat, veritatis dolorem ab debitis iste reprehenderit. Ex quod explicabo velit nisi inventore!</p>
        </div>
      </div>
      
    </div>
  )
}
