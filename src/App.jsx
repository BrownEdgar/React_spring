import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  getCounter,
  minusCount,
  plusCount,
} from "./features/counter/counterSlice";
import axios from "axios";
import { saveTodos, deleteTodo, getTodos } from "./features/todos/todosSlice";

export default function App() {
  const dispatch = useDispatch();
  const count = useSelector(getCounter);
  const todos = useSelector(getTodos);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/todos?_limit=10").then((res) =>
      dispatch(saveTodos(res.data))
    );
  }, []);
  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(plusCount())}>Plus</button>
      <button onClick={() => dispatch(minusCount())}>Minus</button>
      <h1>Todos:{JSON.stringify(todos)}</h1>
      <button onClick={() => dispatch(deleteTodo())}>Delete last todo</button>
    </div>
  );
}
