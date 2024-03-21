import React from 'react'
import "./Card.scss"

export default function Card() {
    return (
        <div className="Card">
            <div className="Card__info">
                <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="gard__image" />
                <span className='Card__info-music'>
                    <i className="bi bi-headphones"></i>
                    <h2>Focusing</h2>
                </span>
                <h1>Patterson Johnson</h1>
                <p>Full Stack maker & UI/UX Designer, love hip hop musiic. Author of Building UI.</p>
                <div className="Card__list">
                    <ul>
                        <li>
                            <i className="bi bi-microsoft-teams"> Microsoft-Team </i>
                        </li>
                        <li>
                            <i className="bi bi-geo-alt-fill"> California </i>
                        </li>
                        <li>
                            <i className="bi bi-envelope-fill"> patterson@example.com </i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
