import { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";

export default function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios("https://dummyjson.com/todos").then((res) =>
      setTodos(res.data.todos)
    );
  }, []);

  return (
    <div className="App">
      {todos.map((item) => {
        return (
          <div
            key={item.id}
            className={
              item.completed ? "App__item App__item-done" : "App__item"
            }
          >
            <h2 className="App__todo">
              {item.id}. {item.todo}
            </h2>
            <button className="App__deleteBtn">Delete</button>
          </div>
        );
      })}
    </div>
  );
}
