import axios from "axios";
import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import "./App.scss";

function App() {
  const [todos, setTodos] = useState([]);
  const [isOpen, setisOpen] = useState(false);
  const [welcome, setWelcome] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    axios.get("https://dummyjson.com/todos").then((res) => {
      setTodos(res.data.todos);
    });
  }, []);

  function toggleModal() {
    setisOpen(!isOpen);
  }
  function closeWelcome() {
    setWelcome(!welcome);
  }
  const deleteTodosByIndex = () => {
    setTodos(todos.toSpliced(currentIndex, 1));
    setCurrentIndex(null);
  };

  return (
    <div className="todos">
      <h1 className="todos__title">My Todo List</h1>
      <div className="todos__items">
        {welcome ? (
          <Modal className="todos__welcome">
            <h2>Welcome To Your Todo List!</h2>
            <button onClick={closeWelcome}>close</button>
          </Modal>
        ) : null}
        {isOpen ? (
          <Modal toggleModal={toggleModal}>
            <h1>Are you Sure?</h1>
            <div className="Modal__btn">
              <button onClick={toggleModal}>cancel</button>
              <button
                onClick={() => {
                  deleteTodosByIndex();
                  toggleModal();
                }}
              >
                Yes
              </button>
            </div>
          </Modal>
        ) : null}

        {todos.map((elem) => (
          <div className="todos__content" key={elem.id}>
            <h2>{elem.id}</h2>
            <p>{elem.todo}</p>
            <button onClick={toggleModal}>Done</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
