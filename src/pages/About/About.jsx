import React from 'react'
import './About.scss'

export default function About() {
  return (
    <div className='About'>
      <div className='About__poster'>
        <div className='About__video'>
          <video src="./video/Warcraft.mp4" autoPlay loop></video>
        </div>
      </div>
    </div>
  )
}
