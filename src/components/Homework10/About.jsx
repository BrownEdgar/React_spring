import React from 'react'
import './About.scss'

export default function About() {
    return (
        <div className='About'>
            <div className="About__card">
                <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="card__image" />
                <div className='About__card-content'>
                    <p className='About__card-head'><i class="bi bi-headset"></i> Focusing</p>
                    
                    <h2>Jane Smith</h2>
                    <p>Full Stack maker & UI / UX Designer, love hip hop music Author of Building UI.</p>

                    <ul>
                        <li><i class="bi bi-microsoft-teams"></i> MerakiTeam</li>
                        <li><i class="bi bi-geo-alt-fill"></i> California</li>
                        <li><i class="bi bi-envelope-fill"></i> patterson@example.com</li>
                    </ul>

                </div>
                <div className='About__list'>
                    <ul>
                        <li><i class="bi bi-facebook"></i></li>
                        <li><i class="bi bi-twitter"></i></li>
                        <li><i class="bi bi-google"></i></li>
                        <li><i class="bi bi-instagram"></i></li>
                        <li><i class="bi bi-youtube"></i></li>
                    </ul>

                </div>
            </div>
        </div>
    )
}
