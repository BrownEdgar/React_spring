import React, { useReducer, useState } from "react";
import "./App.scss";
import reducer, { initialState } from "./reducer";
import ACTIONS from "./actionsTypes";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState("");

  const handleAddDeveloper = () => {
    dispatch({ type: ACTIONS.ADD_DEVELOPER, payload: { name: inputValue } });
    setInputValue("");
  };
  const handleDeleteElement = (indexToDelete) => {
    dispatch({
      type: ACTIONS.DELETE_ARRAY_ELEMENT,
      payload: { index: indexToDelete },
    });
  };

  return (
    <div className="App">
      <h1>Developers:</h1>
      <ul>
        {state.developers.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>

      <h1>Users:</h1>
      <div>
        <p>ID: {state.user.id}</p>
        <p>Name: {state.user.name}</p>
        <p>Age: {state.user.age}</p>
      </div>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter developer name"
      />
      <button onClick={handleAddDeveloper}>Add Developer</button>
      <button onClick={() => dispatch({ type: ACTIONS.SHUFFLE_ARRAY })}>
        Shuffle Array
      </button>
      <button onClick={() => dispatch({ type: ACTIONS.ADD_RANDOM_NUMBER })}>
        Add Random NB
      </button>
      <button onClick={() => dispatch({ type: ACTIONS.DELETE_LESS_THAN_TEN })}>
        Delete less than 10
      </button>
      <button
        onClick={() =>
          dispatch({
            type: ACTIONS.CHANGE_USER_NAME,
            payload: { name: "Hovig" },
          })
        }
      >
        Change users name
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.ADD_USER_AGE, payload: { age: 25 } })
        }
      >
        Add Age
      </button>

      <h2>Numbers Array</h2>
      <div className="App__array-container">
        {state.arr.map((el, index) => (
          <div key={index} className="App__array-item">
            <span>{el}</span>
            <button onClick={() => handleDeleteElement(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
