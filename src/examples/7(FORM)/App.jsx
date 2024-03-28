import React from 'react'
import { nanoid } from 'nanoid'
import './App.scss'
import Title from '../../utils/UI/Title/Title'
import { useState } from 'react';

export default function App() {
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email } = e.target;
    const isUserExist = users.some(elem => elem.email === email.value.toLowerCase())
    if (isUserExist) {
      alert("this username alredy with us");
      return;
    }

    const user = {
      id: nanoid(6),
      username: username.value,
      email: email.value.toLowerCase(),
    }
    setUsers([...users, user]);
    e.target.reset();
  }

  return (
    <div className='App'>
      <Title title='React form exampe' as='h1' align='right' />

      <form onSubmit={handleSubmit} className='App__form'>
        <input type="email" name='email' required placeholder='email' />
        <input type="text" name='username' required placeholder='username' />
        <input type="submit" value="save user" />
      </form>
      <hr />
      <table>
        <caption>Our users</caption>
        <thead>
          <tr>
            <th>id</th>
            <th>username</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(elem => {
              return (
                <tr key={elem.id}>
                  <td>{elem.id}</td>
                  <td>{elem.username}</td>
                  <td>{elem.email}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
