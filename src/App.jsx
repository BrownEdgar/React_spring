import React, {useState, useEffect} from 'react'
import './App.css'
import Modal from './components/Modal/Modal'
import axios from "axios";


export default function App() {
  const [todos, setTodos] = useState([])
  const [currentIndex, setcurrentIndex] = useState(null)
  const [isOpen, setisOpen] = useState(false)
  const [welcomeOpen, setwelcomeOpen] = useState(true)
  
  const deleteCitybyIndex = () => {
    setTodos(todos.toSpliced(currentIndex, 1))
    setcurrentIndex(null)
  }

  useEffect(() => {
    axios('https://dummyjson.com/todos')
    .then(res => setTodos(res.data.todos))
  }, [])
  
  const toggleModal = () => setisOpen(!isOpen)
  const closeWelcome = () => setwelcomeOpen(!welcomeOpen)
  return (
    <div className='App'>

      {welcomeOpen? (
        <Modal closeWelcomel={closeWelcome}>

          <h1>Welcome!</h1>
          <button onClick={closeWelcome} className='Welcome__button'>Close</button>
          
        </Modal>
      ): null}
      
      {isOpen? (
        <Modal toggleModal={toggleModal} theme="light" >

          <h1>Are you Sure?</h1>
                <div className="Modal__button">
                    <button onClick={toggleModal} className='Modal__button-close'>cancel</button>
                    <button onClick={() => {
                        deleteCitybyIndex()
                        toggleModal()
                    }} className='Modal__button-delete'>delete</button>
                </div>

        </Modal>
      ): null}

      <div className="App__list">
        {
          todos.map((elem, index) => {
            return (
              <div key={elem.id}>
                <h2>{elem.todo}</h2>
                <button onClick={() => {
                  toggleModal()
                setcurrentIndex(index)
                }}>X</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
