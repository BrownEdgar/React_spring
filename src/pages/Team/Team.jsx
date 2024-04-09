import React from 'react'
import './Team.scss'

export default function Team() {
  return (
    <div className='Team'>
      <div className="Team__photo">
        <img src="./images/team.jpg" alt="trees" />
      </div>
      <div className="Team__all">
        <div className="Team__about">
          <h1>Lorem ipsum dolor sit amet.</h1>
        </div>
        <div className="Team__title">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis cupiditate voluptatem quaerat ad id, esse cum repellat, veritatis dolorem ab debitis iste reprehenderit. Ex quod explicabo velit nisi inventore!</p>
        </div>
      </div>
      
    </div>
  )
}
