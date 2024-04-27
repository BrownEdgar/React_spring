import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import "./App.scss";
import { setUSers, usersFilter } from "./features/users/usersSlice";

export default function App() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const data = [
    {
      id: 1,
      firstName: "Jhon",
      lastName: "Smith",
      registredDate: moment("07 01 2015").format("Do MMM YY"),
      language: "javascript",
    },
    {
      id: 2,
      firstName: "Spider",
      lastName: "Man",
      registredDate: moment("09 30 2022").format("Do MMM YY"),
      language: "react",
    },
    {
      id: 3,
      firstName: "Tomas",
      lastName: "Shelbi",
      registredDate: moment("1 25 2021").format("Do MMM YY"),
      language: "node",
    },
    {
      id: 4,
      firstName: "Sigma",
      lastName: "Blxuyan",
      registredDate: moment("12 30 2012").format("Do MMM YY"),
      language: "HTLM&CSS",
    },
    {
      id: 5,
      firstName: "Bgdo",
      lastName: "Vaspuryan",
      registredDate: moment("8 12 2020").format("Do MMM YY"),
      language: "javascript",
    },
  ];
  useEffect(() => {
    dispatch(setUSers(data));
  }, []);
  return (
    <div className="App">
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h2>{`${user.firstName} ${user.lastName}`}</h2>
            <p>Registered Date: {user.registredDate}</p>
            <p>Language:{user.language}</p>
          </li>
        ))}
      </ul>
        <button onClick={()=>dispatch(usersFilter("javascript"))}>Filter</button>
    </div>
  );
}
