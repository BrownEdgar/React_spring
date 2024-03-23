<<<<<<< HEAD
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.scss'



export default function App() {
    const [state, setState] = useState([])
    const [currentIndex, setcurrentIndex] = useState(-1)

    useEffect(() => {
        axios('https://type.fit/api/quotes')
        .then(res => {
            setState(res.data)
            setcurrentIndex(0)
        })
    }, [])
    

    const next = () => {setcurrentIndex((currentIndex <= state.length -1) ? currentIndex + 1 : 0)}
    const prev = () => {setcurrentIndex(currentIndex > 0 ? currentIndex - 1 : state.length - 1)}


    const like = (index) => {
        const result = state.map((elem, i) => {
            if (i === index) {
                elem.like = !elem.like
            }
            return elem
        })
        setState(result)
    }

    return (
        <div className='App'>
            <button className='btn btn__prev' onClick={prev}>
                <i className="bi bi-caret-left"></i>    
            </button>
            <div className='App__Quote'>
                {
                    (currentIndex >= 0)
                    ? (
                        <div>
                            <h2>{state[currentIndex].text}</h2>
                            <p >
                                <span onClick={() => like(currentIndex)}>
                                {
                                    state[currentIndex]?.like 
                                    ? <i class="bi bi-hand-thumbs-up-fill"></i>
                                    :<i class="bi bi-hand-thumbs-up"></i>
                                }
                                </span>
                                {state[currentIndex].author}
                            </p>
                        </div>
                    )
                    : <h1>Loading...</h1>
                }
            </div>
            <button className='btn btn__prev' onClick={next}>
                <i className="bi bi-caret-right"></i>    
            </button>
        </div>
    )
=======
import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.scss'

export default function App() {
  const [state, setState] = useState([])
  const [curretIndex, setcurretIndex] = useState(-1)

  useEffect(() => {
    axios("https://type.fit/api/quotes")
      .then(res => {
        setState(res.data);
        setcurretIndex(0)
      })
  }, [])

  const next = () => {

    setcurretIndex((curretIndex < state.length - 1) ? curretIndex + 1 : 0)
  }
  const prev = () => {
    setcurretIndex(curretIndex > 0 ? curretIndex - 1 : state.length - 1)
  }

  const like = (index) => {
    const result = state.map((elem, i) => {
      if (i === index) {
        elem.like = !elem.like;
      }
      return elem
    })
    setState(result)
  }


  return (
    <div className='App'>
      <button className='btn btn__prev' onClick={prev}>
        <i className="bi bi-caret-left"></i>
      </button>
      <div className="App__Quote">
        {
          (curretIndex >= 0)
            ? (
              <div>
                <h2>{state[curretIndex].text}</h2>
                <p>
                  <span onClick={() => like(curretIndex)}>
                    {
                      state[curretIndex]?.like
                        ? <i class="bi bi-hand-thumbs-up-fill"></i>
                        : <i class="bi bi-hand-thumbs-up"></i>
                    }
                  </span>
                  {state[curretIndex].author}
                </p>
              </div>
            )
            : <h1>Loading...</h1>
        }
      </div>
      <button className='btn btn__right' onClick={next}>
        <i className="bi bi-caret-right"></i>
      </button>
    </div>
  )
>>>>>>> 7491a16e31f3b3f07e35f50b86581cb01f50b6af
}
