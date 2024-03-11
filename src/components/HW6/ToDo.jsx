import React, { useEffect, useState } from "react";
import "./ToDo.scss";

export default function ToDo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    function getData() {
      fetch(`https://jsonplaceholder.typicode.com/todos`)
        .then((res) => res.json())
        .then((data) => setTodos(data));
    }
    getData();
  }, []);
  

  const allCheck = () => {
    const result = todos.map((elem) => {
      elem.completed = true;
      return elem;
    });
    setTodos(result);
  };

  const allunCheck = () => {
    const result = todos.map((elem) => {
      elem.completed = false;
      return elem;
    });
    setTodos(result);
  };

  const sortByName = () => {
    const result = todos.toSorted((a, b) => {
      return a.title > b.title ? 1 : a.title < b.title ? -1 : 0;
    });
    setTodos(result);
  };

  const sortByCheck = () => {
    const result = todos.toSorted((a, b) => {
      return a.completed - b.completed;
    });
    setTodos(result);
  };
  const reverseEortByCheck = () => {
    const result = todos.toSorted((a, b) => {
      return a.completed - b.completed;
    });
    setTodos(result);
  };

  return (
    <div className="ToDo">
      <h1>Our todos</h1>
      <div className="ToDo__panel">
        <div className="ToDo__buttons">
          <button
            className="ToDo__checkButton ToDo__checkButton-green"
            onClick={allCheck}
          >
            All done
          </button>
          <button
            className="ToDo__checkButton ToDo__checkButton-red"
            onClick={allunCheck}
          >
            All undone
          </button>
          <button
            className="ToDo__checkButton ToDo__checkButton-sort"
            onClick={sortByName}
          >
            Sort by Name
          </button>
          <button
            className="ToDo__checkButton ToDo__checkButton-sort"
            onClick={sortByCheck}
          >
            Sort by Check
          </button>
          <button
            className="ToDo__checkButton ToDo__checkButton-sort"
            onClick={reverseEortByCheck}
          >
            Sort by Check revers
          </button>
        </div>
        <div className="ToDo__completedTexts">
          <p>
            Completed: <span>{todos.filter(elem=>{return elem.completed}).length}</span>
          </p>
          <p>
            unCompleted: <span>{todos.filter(elem=>{return !elem.completed}).length}</span>
          </p>
        </div>
      </div>
      <div className="ToDo__items">
        {todos.map((elem) => {
          return elem.completed ? (
            <div className="ToDo__item ToDo__item-completed" key={elem.id}>
              <h2 className="ToDo__title">{elem.title}</h2>
            </div>
          ) : (
            <div className="ToDo__item ToDo__item-unCompleted" key={elem.id}>
              <h2 className="ToDo__title">{elem.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
