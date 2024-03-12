import {React, useEffect, useState } from "react"
import './toDos.scss'
function toDos() {
const [todos, setTodos] = useState([])
const [completed, setCompleted] = useState(0)
const [unCompleted, setunCompleted] = useState(0)
    
useEffect(() => {
  function getData() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=20')
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      });
  }
  getData();

}, []);

useEffect(() => {
  completedTodos()
}, [todos])

function completedTodos() {
  let completedCount = 0;
  let unCompletedCount = 0;
  
  todos.forEach(todo => {
    if (todo.completed === true) {
      completedCount += 1;
    } else {
      unCompletedCount += 1;
    }
  });
  setCompleted(completedCount);
  setunCompleted(unCompletedCount);
}
    function showAllDone() {
      const sortedTodos = [...todos].sort((a, b) => {
        return b.completed - a.completed;
      });
      setTodos(sortedTodos);
    }
    function showAllUndone() {
      const sortedTodos = [...todos].sort((a, b) => {
        return a.completed - b.completed;
      });
      setTodos(sortedTodos);
    }

    function removeBtn(id){
      const result = todos.filter(elem =>{
       return elem.id !== id
      })
      setTodos(result)
      }
      
  return (
    <div>
      <h1>Our Todos</h1>
      <div className="Todo">
        <div className="Todo__btn">
            <button onClick={showAllDone}>Sort By Done</button>
            <button onClick={showAllUndone}>Sort By Undone</button>
        </div>
        <div className="Todo__meter">
            <p>completed: <span>{completed}</span></p>
            <p>unCompoleted: <span>{unCompleted}</span> </p>
        </div>
      </div>
      <div className="Todos">
        {todos.map((elem) => {
          return (
            <div key={elem.id} className="Todos__item">
              <p>{elem.title}</p>
              <span className={`Todos__item__dot ${elem.completed ? 'completed' : 'uncompleted'}`}></span>
              <button onClick={()=>{removeBtn(elem.id)}}>&#10006;</button>

            </div>
          );
        })}
      
      </div>
    </div>
  )
}

export default toDos