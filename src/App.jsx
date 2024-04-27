import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.scss";
import { usersFilter } from "./features/users/usersSlice";

export default function App() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <ul>
        {users?.map((elem) => (
          <li key={elem.id}>
            <h2>{`${elem.firstName} ${elem.lastName}`}</h2>
            <p>{elem.registredDate}</p>
            <p>{elem.language}</p>
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch(usersFilter("node"))}>Filter</button>
    </div>
  );
}
