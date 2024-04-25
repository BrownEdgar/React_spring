import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import "./App.css";
import { plus } from "./features/counter/counterSlise";
import { saveTodos } from "./features/todos/todosSlice";

export default function App() {
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/todos?_limit=6").then((res) =>
      dispatch(saveTodos(res.data))
    );
  }, []);

  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          dispatch(plus());
        }}
      >
        plus
      </button>

      <h2>todos:{JSON.stringify(todos)}</h2>
    </div>
  );
}
