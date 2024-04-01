import React, { useState } from "react";
import { nanoid } from "nanoid";
import "./App.scss";
import Title from "../../../utils/UI/Title/Title";

export default function App() {
  const [users, setUsers] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email } = e.target;
    const isUserExist = users.some((elem) => elem.username.toLowerCase() === username.value.toLowerCase());

    if (isUserExist) {
      alert("nelza usiohsi anuny goxanal");
      retur;
    }
    const user = {
      id: nanoid(),
      username: username.value,
      email: email.value.toLowerCase(),
    };
    setUsers([...users, user]);
    e.target.reset();
  };

  return (
    <div className="App">
      <Title title={"react form exemple"} variant="dark" align="cnter" />
      <form onSubmit={handleSubmit} className="App__form">
        <input type="text" name="username" required placeholder="username" />
        <input type="email" name="email" required placeholder="email" />
        <input type="submit" value="Save user" />
      </form>
    </div>
  );
}
