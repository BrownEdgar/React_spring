import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCounter, getCounter } from "./features/counter/CounterSlice";

export default function App() {
  const dispatch = useDispatch();
  const counter = useSelector(getCounter);

  return (
    <div>
      <h1>Redus Counter : {counter}</h1>
      <button onClick={() => dispatch(addCounter())}>PLUS</button>
    </div>
  );
}
