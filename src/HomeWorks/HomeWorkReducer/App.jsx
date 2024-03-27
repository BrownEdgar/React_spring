import { useReducer, useState } from "react";
import reducer, { initialState } from "./reducer";
import ACTIONS from "./actionTypes";
import "./App.scss";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <h1>{JSON.stringify(initialState, null, 1)}</h1>
      <div className="App__actions">
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button
          onClick={() =>
            dispatch({ type: ACTIONS.ADD_DEVELOPER, payload: value })
          }
        >
          Add Developer
        </button>
        <button onClick={() => dispatch({ type: ACTIONS.SHUFFLE })}>
          Shuffle
        </button>
        <button onClick={() => dispatch({ type: ACTIONS.FILTER })}>
          Filter
        </button>
        <button onClick={() => dispatch({ type: ACTIONS.ADD_NUMBER })}>
          Add number
        </button>
        <button
          onClick={() => dispatch({ type: ACTIONS.DELETE_NUMBER, payload: 3 })}
        >
          Delete Number by index
        </button>
        <button
          onClick={() => dispatch({ type: ACTIONS.ADD_AGE, payload: 19 })}
        >
          Add Age
        </button>
        <button
          onClick={() =>
            dispatch({ type: ACTIONS.CHANGE_NAME, payload: "Artur" })
          }
        >
          Change Name
        </button>
      </div>
    </div>
  );
}
