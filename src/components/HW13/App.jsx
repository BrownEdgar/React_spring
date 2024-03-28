import React, { useReducer, useState } from "react";
import reducer, { initialState } from "./reducer";
import { ACTIONS } from "./actionTypes";
import './App.scss'

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <h2>{JSON.stringify(state, null, 2)}</h2>

      <input
        type="text"
        value={input}
        className="App__input"
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="App__buttons">
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.ADD__DEVELOPER, payload: { input } });
        }}
      >
        Send
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.SHUFFLE });
        }}
      >
        shuffle
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.ADD_NUMBER });
        }}
      >
        Add Number
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.DEL_NUMBERS });
        }}
      >
        Delete Number
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.RENAME });
        }}
      >
        Rename
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.ADD_AGE });
        }}
      >
        Add age
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.DEL_BY_INDEX, payload: { input }});
        }}
      >
        Delete by index
      </button>
      </div>
    </div>
  );
}
