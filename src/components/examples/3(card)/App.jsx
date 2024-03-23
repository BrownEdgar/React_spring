<<<<<<< HEAD
import React from 'react'
import './App.scss'

export default function App() {
    return (
        <div className='App'>
            <div className="App__card">
            
            <img src="ib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="gard__image" />
            <h2>Benjamin Franklin</h2>
            <div className="devider"></div>

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
=======
import React, { useState, useEffect } from 'react';

import './App.scss'
import CircleLoader from '../../components/Loaders/CircleLoader/CircleLoader';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(setLoading, 1000, false);
  }, [])

  return (
    <div className='App'>
      <div className="App__card">
        {loading ? <CircleLoader /> : null}
        <img className="App__image" src="https://images.unsplash.com/photo-1603775020644-eb8decd79994?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="gard__image" />
        <h2>Eleonor Smitch</h2>
        <div className="devider"></div>
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
>>>>>>> 7491a16e31f3b3f07e35f50b86581cb01f50b6af
}
