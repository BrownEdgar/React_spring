import React, { useState } from 'react'
import Modal from './components/Modal/Modal';
import './App.css'

export default function App() {
  const [cities, setCities] = useState(['Tokio', "Amsterdam", "Yerevan", "London", "Berlin"]);
  const [curerntIndex, setCurerntIndex] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => setIsOpen(!isOpen);
  const deletCityByIndex = () => {
    setCities(cities.toSpliced(curerntIndex, 1));
    setCurerntIndex(null)
  }

  return (
    <div className='App'>
      {isOpen ? (
        <Modal toggleModal={toggleModal} theme="dark">

          <h1>Are you Sure?</h1>
          <div className="Modal__buttons">
            <button onClick={toggleModal}>cancel</button>
            <button onClick={() => {
              deletCityByIndex()
              toggleModal()
            }}>delete</button>
          </div>

        </Modal>
      ) : null}

      <div className="App__list">
        {
          cities.map((elem, index) => {
            return (
              <div key={elem}>
                <h2>{elem}</h2>
                <button onClick={() => {
                  toggleModal()
                  setCurerntIndex(index)
                }}>Delete</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
