import React from 'react'
import './About.scss'

export default function About() {
    return (
        <div className='About'>
            <h1 className='About__title'></h1>
            <div className='About__content'>
                <p className='About__text About__text-dark'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi autem illo tempora laboriosam necessitatibus libero nemo sed fuga sequi suscipit?
                </p>
                <p className='About__text About__text-light'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores consequatur unde aut dicta 
                </p>
            </div>
        </div>
    )
}
