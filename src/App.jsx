import React, { useState, useEffect } from "react";
import "./App.scss";
import axios from "axios";
import Modal from "./components/Modal/Modal";

export default function App() {
    const [isWelcom, setWelcome] = useState(true);
    const [todos, setTodos] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState([null]);

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/todos?_limit=10").then(
            (res) => setTodos(res.data)
        );
    }, []);

    const toggleWelcome = () => {
        setWelcome(false);
    };
    const toggleModal = () => setIsOpen(!isOpen);
    const deleteTodosByIndex = () => {
        setTodos(todos.toSpliced(currentIndex, 1));
        setCurrentIndex(null);
    };

    return (
        <div className="App">
            <div className="App__welcome">
                {isWelcom ? (
                    <Modal toggleModal={toggleWelcome}>
                        <h1>Welcome Todos</h1>
                        <div className="Modal__buttons">
                            <button onClick={toggleWelcome}>
                                Continue {">"}
                            </button>
                        </div>
                    </Modal>
                ) : null}
            </div>
            {isOpen ? (
                <Modal toggleModal={toggleModal}>
                    <div className="Modal__buttons">
                        <h2>Are you Sure?</h2>
                        <button onClick={toggleModal}>Cencel</button>
                        <button
                            onClick={() => {
                                deleteTodosByIndex();
                                toggleModal();
                            }}
                        >
                            Delete
                        </button>
                    </div>
                </Modal>
            ) : null}
            <div className="App__list">
                {todos.map((elm, index) => {
                    return (
                        <div key={elm}>
                            <h2>{elm.title}</h2>
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
    );
}
