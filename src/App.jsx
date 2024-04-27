import React from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { setLanguageFilter } from "./features/users/UserSlice"; // Import the action
import "./App.css";
export default function App() {
  const users = useSelector((state) => state.users.users); // Access users array from state
  const languageFilter = useSelector((state) => state.users.languageFilter); // Access language filter from state
  const dispatch = useDispatch();

  return (
    <div>
      <h1>User List</h1>
      <div className="buttons-class">
        <button onClick={() => dispatch(setLanguageFilter("Javascript"))}>
          JavaScript
        </button>
        <button onClick={() => dispatch(setLanguageFilter("React"))}>
          React
        </button>
        <button onClick={() => dispatch(setLanguageFilter("Node"))}>
          Node
        </button>
        <button onClick={() => dispatch(setLanguageFilter("HTML/CSS"))}>
          HTML&CSS
        </button>
        <button onClick={() => dispatch(setLanguageFilter(null))}>
          Clear Filter
        </button>
      </div>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Registration Date</th>
            <th>Language</th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter(
              (user) => !languageFilter || user.language === languageFilter
            )
            .map((user) => (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.registeredDate}</td>
                <td>{user.language}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
