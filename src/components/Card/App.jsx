import React from 'react'
import './App.scss'

export default function App() {
  return (
    <div className='App'>
      <div className="App__card">
        <img src="/images/img-card.jpg" alt="card-image" />
        <h3><i className="bi bi-earbuds"></i> Focusing</h3>
        <div className='App__content'>
        <h2>Paterson Johnson</h2>
        <p>Full Stack maker & UI Designer, love hip hop music Author of Building UI.</p>
        <ul>
            <li><i className="bi bi-people-fill"></i> Meraki Team</li>
            <li><i className="bi bi-geo-alt-fill"></i> California</li>
            <li><i className="bi bi-envelope-fill"></i> patterson@example.com</li>
        </ul>
        </div>
        <div className="App__list">
          <ul>
            <li>
              <i className="bi bi-facebook"></i>
            </li>
            <li>
              <i className="bi bi-instagram"></i>
            </li>
            <li>
              <i className="bi bi-twitter"></i>
            </li>
            <li>
              <i className="bi bi-telegram"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}