import { useState, useEffect } from "react";
import "./App.scss";

export default function App() {
  const [todos, setTodos] = useState([]);

  const done = todos.filter((item) => item.completed === true).length;

  useEffect(() => {
    function getData() {
      fetch("https://jsonplaceholder.typicode.com/todos?_limit=20")
        .then((res) => res.json())
        .then((data) => setTodos(data));
    }
    getData();
  }, []);

  const markAsDone = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  const sortList = () => {
    setTodos(todos.toSorted((a) => (a.completed ? 1 : -1)));
  };

  const deleteTodo = (id) => {
    console.log(id);
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <h1 className="App__title">My Todo List</h1>
      <div className="App__stats">
        <span>Total:{todos.length} </span> <span>Completed:{done} </span>
        <span>Not Completed: {todos.length - done}</span>
      </div>
      <button onClick={sortList} className="App__button App__button-sort">
        Sort List
      </button>
      {todos.map((item, ind) => {
        return (
          <div
            key={item.id}
            className={
              item.completed ? "App__item App__item-done" : "App__item"
            }
          >
            <p className="App__text">
              {ind + 1}. {item.title}
            </p>
            <div className="App__actions">
              <button
                className="App__button"
                onClick={() => markAsDone(item.id)}
              >
                Done
              </button>
              <button
                className="App__button App__button-delete"
                onClick={() => deleteTodo(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
