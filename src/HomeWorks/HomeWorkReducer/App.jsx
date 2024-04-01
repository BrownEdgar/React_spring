import { useReducer } from "react";
import reducer, { initialState } from "./reducer";
import ACTIONS from "./actionTypes";
import "./App.scss";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>{JSON.stringify(state, null, 1)}</h1>
      <div className="App__actions">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch({ type: ACTIONS.ADD_DEVELOPER, payload: e });
          }}
        >
          <input type="text" name="username" />
          <input type="submit" value="Add developer" />
        </form>

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
