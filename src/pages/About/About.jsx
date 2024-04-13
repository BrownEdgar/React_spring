import React from 'react'
import './About.scss'

export default function About() {
    return (
        <div className="About">
            <div className="About__opening">
                <div>
                    <span>WELCOME TO </span>
                    <span>NIKE, INC.</span>
                </div>
            </div>
            <section className='About__info'>
                <h2>Founder of Nike</h2>
                <div>
                <p>Phil Knight is Chairman Emeritus of NIKE, Inc. Mr. Knight is a co-founder of the company, leading Nike from a small partnership founded on a handshake to the world’s largest footwear, apparel and equipment company. Mr. Knight served as Nike’s President from 1968 to 1990, and from June 2000 to 2004, except for the period from June 1983 through September 1984. Prior to 1968, he was a certified public accountant with Price Waterhouse and Coopers & Lybrand and an Assistant Professor of Business Administration at Portland State University. Mr. Knight earned an MBA from Stanford Graduate School of Business and a bachelor’s degree in business administration from the University of Oregon.</p>
                
                <img src="https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/d7a46c41-c1c4-435f-84dd-79b4c48fd5ac/220x330" />
                </div>
            </section>
        </div>
    )
}
