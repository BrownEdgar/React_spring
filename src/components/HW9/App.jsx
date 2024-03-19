import { useEffect, useState } from "react";
import axios from "axios";
import "./App.scss";
import Modal from "./Modals/Modal";

export default function App() {
  const [welcomeOpen, setWelcomeOpen] = useState(true);
  const [Todos, setTodos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    axios("https://dummyjson.com/todos").then((res) => {
      setTodos(res.data.todos);
    });
  }, []);

  function toggleWelcom() {
    setWelcomeOpen(false)
  }
  function toggleModal() {
    setIsOpen(!isOpen);
  }
  function deletCityByIndex() {
    setTodos(Todos.toSpliced(currentIndex, 1));
    setCurrentIndex(null);
  }
  return (
    <>
      <div className="ToDo">
        {welcomeOpen ? (
          <Modal toggleModal={toggleWelcom}>
            <h1>Welcome</h1>
            <button onClick={toggleWelcom}>continue</button>
          </Modal>
        ) : null}

        {isOpen ? (
          <Modal toggleModal={toggleModal}>
            <h1>Are you Sure</h1>
            <div className="Modal__buttons">
              <div className="Modal__buttons">
                <button onClick={toggleModal}>cencel</button>
                <button
                  onClick={() => {
                    deletCityByIndex();
                    toggleModal();
                  }}
                >
                  delete
                </button>
              </div>
            </div>
          </Modal>
        ) : null}
        <div className="ToDo__items">
          {Todos.map((elem) => {
            return (
              <div
                className={
                  elem.completed
                    ? "ToDo__item ToDo__item-completed"
                    : "ToDo__item ToDo__item-unCompleted"
                }
                key={elem.id}
              >
                <h2 className="ToDo__title">{elem.todo}</h2>
                <button
                  onClick={() => {
                    toggleModal();
                    setCurrentIndex(index);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
