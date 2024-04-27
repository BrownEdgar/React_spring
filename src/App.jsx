import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import { fetchUsers, getUsers, deleteUser } from "./features/users/usersSlice";
import MainForm from "./components/MainForm/MainForm";

export default function App() {
  const dispatch = useDispatch();
  const users = useSelector(getUsers);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="App">
      <MainForm />
      <div className="App__usersList">
        <table>
          <caption>Our users</caption>
          <thead>
            <tr>
              <th>id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Language</th>
              <th>Registration Date </th>
            </tr>
          </thead>
          <tbody>
            {users.data.map((elem) => {
              return (
                <tr key={elem.id}>
                  <td>{elem.id}</td>
                  <td>{elem.firstName}</td>
                  <td>{elem.lastName}</td>
                  <td>{elem.language}</td>
                  <td>{elem.registredDate}</td>
                  <td>
                    <button onClick={() => deleteUser(elem.id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
