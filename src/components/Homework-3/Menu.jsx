import React, { useState } from 'react'
import './Menu.scss'

export default function Menu() {

    const [decoration] = useState([
        {
            id: 1,
            title: "Simplicity",
            text: 'Explore Now',
            image: './images/simplicity.jpg'

        },
        {
            id: 2,
            title: "Your Space",
            text: 'Shop Accessories',
            image:'./images/yourspace.webp'

        },
        {
            id: 3,
            title: "Loft Chair",
            text: 'Shop Now',
            image:'./images/Loft-chair.webp'

        }
    ])
    return (
        <div className='Menu'>
            
            {
                decoration.map(elem => {
                    return (
                        <div className='Menu__Item' key={elem.id}>
                            <img src={elem.image} alt={elem.title} />
                            <div className='Menu__info'>
                                <h2 className='App__title'>{elem.title}</h2>
                                <p>{elem.text}</p>
                            </div>
                        </div>
                       
                    )
                })
            }
        </div>
    )
}
