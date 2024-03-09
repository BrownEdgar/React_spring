import React, {useState} from 'react'
import './App.scss'


export default function App() {
    const [interior] = useState([
        {
            id: 1,
            title: 'Simplicity',
            description: 'Explore Now',
            image: './images/interior_1.jpg'
        },
        {
            id: 2,
            title: 'Your Space',
            description: 'Shop Accessories',
            image: './images/interior_2.jpg'

        },
        {
            id: 3,
            title: 'Loft Chair',
            description: 'Shop Now',
            image: './images/interior_3.jpg'
        }
    ])
    return (
        <div className='App'>
            {
                interior.map(elem => {
                    return(
                        <div className='App__item' key={elem.id}>
                            <img src={elem.image} alt={elem.title} />
                            <div className='App__info'>
                                <h2 className='App__title'>{elem.title}</h2>
                                <p>{elem.description}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
