import React, {useState, useEffect} from 'react'
import './App.css'
import axios from "axios";
import ToDoDel from './components/ToDoDel/ToDoDel';


export default function App() {
  const [toDo, setToDo] = useState([])
  const [welcomeWindowOpen, setWelcomeWindowOpen] = useState(true)
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(null)

  const delbyIndex = () =>{
    setToDo(toDo.toSpliced(index, 1))
    setIndex(null)
  }

  const toggleToDo = () => setOpen(!open)
  const welcomeWindowClose = () => setWelcomeWindowOpen(!welcomeWindowOpen)

  useEffect(() => {
    axios("https://dummyjson.com/todos").then((res) => {
      setToDo(res.data.todos);
    });
  }, []);

  return(
    <div className="App">

      {welcomeWindowOpen? (
        <ToDoDel welcomeWindowClose={welcomeWindowClose}>
          <h2>Enjoy!</h2>
          <button onClick={welcomeWindowClose} className='welcome-btn'>X</button>
        </ToDoDel>
      ):null}
      
      {open? (
        <ToDoDel toggleToDo={toggleToDo}>
          <div className="todo-btn">
            <button onClick={toggleToDo} className='todo-btn-close'>Close</button>
            <button onClick={() => {delbyIndex() 
              toggleToDo()}} className='to-do-btn-delete'>Delete</button>
          </div>
        </ToDoDel>
      ) : null}

      <div className="list">
        {toDo.map((elem,index) => {
          return (
            <div key={elem.id} className='a'>
              <h2>{elem.todo}</h2>
              <button onClick={() => {toggleToDo()
              setIndex(index)}}>X</button>
            </div>
          )
        })}
      </div>
    </div>
  )

}