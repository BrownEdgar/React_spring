import React from 'react'
import './App.css'
import Module from './components/Module/Module'
import { useState,useEffect } from 'react'
export default function App() {
  const [cities, setcities] = useState(['Tokio','Amsterdam','Yerevan','London',"Berlin"])
  const [currentIndex, setCurrentIndex] = useState(null)
  const [isOpen, setisOpen] = useState(false)
 
  function toggleModal() {
    
    setisOpen(!isOpen)
  }
  const deleteCityByIndex = () => {
    setcities(cities.toSpliced(currentIndex, 1))
    setCurrentIndex(null);
  }
  return (
    <div className='App'>
       {isOpen ? (
        <Module toggleModal={toggleModal} theme="dark">

          <h1>Are you Sure?</h1>
          <div className="Modal__buttons">
            <button onClick={toggleModal}>cancel</button>
            <button onClick={() => {
              deleteCityByIndex()
              toggleModal()
            }}>delete</button>
          </div>

        </Module>
      ) : null}

      <div className='App__List'>
        {
          cities.map((elem,index) => {
            return(
              <div key={elem}>
                <h2>{elem}</h2>
                <button onClick={()=>{
                  toggleModal()
                  setCurrentIndex(index)
                  
                }}>Delete</button>
              </div>
            )
          })
        }
      </div>
        </div>
  )
}
