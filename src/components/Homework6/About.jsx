import React, { useState, useEffect } from 'react'
import './About.scss'

export default function About() {
  const [todos, setTodos] = useState([])

  function getTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=12')
      .then(res => res.json())
      .then(todos => setTodos(todos))

  }
  useEffect(() => {
    getTodos()
  }, [])

  const greenCheck = (elem) => {
    const green = todos.map((elem) => {
      elem.completed = true
      return elem
    }) 
    setTodos(green)
  }

  const redCheck = (elem) => {
    const red = todos.map((elem) => {
      elem.completed = false
      return elem
    })
    setTodos(red)
  }
  const sortName = () => {
    const res = todos.toSorted((a,b) => {
      return a.title > b.title ? 1 : a.title < b.title ? -1 : 0
    })
    setTodos(res)
  }
  const falseFirst = () => {
    const res = todos.toSorted((a,b) => {
      return a.completed - b.completed
    })
    setTodos(res)
  }
  const trueFirst = () => {
    const res = todos.toSorted((a,b) => {
      return a.completed - b.completed
    })
    setTodos(res.toReversed())
  }


  return (
    <div className='About'>
      <h1>Our Todos</h1>
      <button onClick={greenCheck} className='About__green'>All true</button>
      <button onClick={redCheck} className='About__red'>All false</button>
      <button onClick={falseFirst}>Firstly false</button>
      <button onClick={trueFirst}>Firstly true</button>
      <button onClick={sortName}>Sort by name</button>

      <div className='todos'>
        {
          todos.map((elem) => {
            return elem.completed ? (
              <div key={elem.id} className='About__todos'>
                <h2 className='About__todos-green'>{elem.completed}</h2>
                <h3>{elem.title}</h3>
                <p>{elem.completed}</p>
              </div>
            ) : (<div key={elem.id} className='About__todos'>
              <h2 className='About__todos-red'>{elem.uncompleted}</h2>
              <h3>{elem.title}</h3>
              <p>{elem.completed}</p>
            </div>)
          })
        }

      </div>


    </div>
  )
}
