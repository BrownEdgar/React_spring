import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Modal from "./components/Homework9/Modal";

export default function App() {
  const [todos, setTodos] = useState([])
  const [curretIndex, setcurretIndex] = useState([null])
  const [isOpen, setisOpen] = useState([])
  const [welcome, setwelcome] = useState(true)

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/todos?_limit=9')
      .then(res => setTodos(res.data))
  }, [])
  const toggleModal = () => setisOpen(!isOpen)
  const welcometoggle = () => setwelcome(false)
  const deleteTodosByIndex = () => {
    setTodos(todos.toSpliced(curretIndex, 1))
    setcurretIndex(null)
  }

  return (
    <div className='App'>
      {welcome ?
        <Modal toggleModal={toggleModal}>
          <h1>Welcome</h1>
          <button onClick={welcometoggle}>Continue</button>
        </Modal>
        : null}
      {!isOpen ?
        <Modal toggleModal={toggleModal}>
          <div className='Modal__content'></div>
          <h1>Are you sure?</h1>
          <div className="Modal__buttons">
            <button onClick={toggleModal}>Cancel</button>
            <button onClick={() => {
              deleteTodosByIndex()
              toggleModal()
            }}>Delete</button>
          </div>
        </Modal>
        : null}

      <div className="App__list">
        {
          todos.map((elem, index) => {
            return (
              <div key={elem}>
                <h2>{elem.title}</h2>
                <button onClick={() => {
                  toggleModal()
                  setcurretIndex(index)
                }}>Delete</button>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}
