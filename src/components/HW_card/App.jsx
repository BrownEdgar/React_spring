import React, { useState, useEffect } from 'react';
import './App.scss'
import CircleLoader from '../Loaders/CircleLoader/CircleLoader';

export default function App() {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
    setTimeout(setLoading,1000, false)
    }, [])
    
    return (
        <div className='App'>
            <div className="App__card">
                {loading ? <CircleLoader /> : null}
                <img className='App__image' src="https://images.unsplash.com/1/type-away-numero-dos.jpg?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGl0JTIwbWFufGVufDB8fDB8fHww" alt="gard__image" />
                <span>
                    <i className="bi bi-headphones"></i>
                    Focusing
                </span>
                <div className='App__info'>
                    <h2>Benjamin Franklin</h2>
                    <p>As a Senior Full Stack Software Engineer, I have 4+ years of experience developing robust and scalable web applications using React</p>
                </div>
                <div className="devider"></div>
                <div className="App__list">
                    <ul>
                        <li>
                            <i className="bi bi-facebook"></i>
                        </li>
                        <li>
                            <i className="bi bi-twitter"></i>
                        </li>
                        <li>
                            <i className="bi bi-google"></i>
                        </li>
                        <li>
                            <i className="bi bi-instagram"></i>
                        </li>
                        <li>
                            <i className="bi bi-youtube"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
