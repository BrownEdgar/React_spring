import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./Modal/Modal";
import "./App.scss";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isWelcomeModal, setIsWelcomeModal] = useState(true);
  const [currentId, setCurrentId] = useState(null);
  useEffect(() => {
    axios("https://dummyjson.com/todos").then((res) =>
      setTodos(res.data.todos)
    );
  }, []);
  const closeWelcomeModal = () => {
    setIsWelcomeModal(false);
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const deleteTodo = () => {
    setTodos(todos.filter((item) => item.id !== currentId));
    setCurrentId(null);
  };

  return (
    <div className="App">
      {isWelcomeModal ? (
        <Modal>
          <h1>Welcome!!!</h1>
          <button onClick={closeWelcomeModal}> Close </button>
        </Modal>
      ) : null}
      {isOpen ? (
        <Modal toggleModal={toggleModal}>
          <h1>Are you Sure?</h1>
          <div className="Modal__buttons">
            <button onClick={toggleModal}>cancel</button>
            <button
              onClick={() => {
                deleteTodo();
                toggleModal();
              }}
            >
              delete
            </button>
          </div>
        </Modal>
      ) : null}
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
            <button
              onClick={() => {
                toggleModal();
                setCurrentId(item.id);
              }}
              className="App__deleteBtn"
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
