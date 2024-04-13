import React from 'react'
import './Home.scss'

export default function Home() {
    return (
        <div className="Home">
            <div className="Home__poster">
                <div className="Home__video">
                    <video src="./video/nike.mp4" muted autoPlay loop></video>
                </div>
            </div>
            <section className='Home__info'>
                <h1>WIN ON AIR</h1>
                <p>Engineered to the exact specifications of championship athletes.</p>
                <button>Explore Air</button>
            </section>
            <section className='Home__cards'>
                <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_599,c_limit/d5c07bd0-2879-4a3b-9cdc-f3a54f6336cd/nike-just-do-it.jpg"  />
                <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_599,c_limit/cb0d8532-b6de-445d-8e37-690eca1bb7d6/nike-just-do-it.jpg"  />
                <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_599,c_limit/5aadc5c3-b404-4390-9354-9fb1cca8452d/nike-just-do-it.jpg"  />
            </section>
        </div>
    )
}
