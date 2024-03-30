import React, { useEffect } from 'react'
import { nanoid } from 'nanoid'
import './App.scss'
import Title from '../../utils/UI/Title/Title'
import { useState } from 'react';
import classNames from 'classnames';
import axios from 'axios';

export default function App() {
  const [users, setUsers] = useState([]);
  const [dublicateEmailId, setDublicateEmailId] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, gender } = e.target;
    const isUserExistUser = users.find(elem => elem.email === email.value.toLowerCase())
    if (isUserExistUser) {
      setDublicateEmailId(isUserExistUser.id)
      setTimeout(setDublicateEmailId, 3010, null)
      return;
    }
    setDublicateEmailId(null)
    const user = {
      id: nanoid(6),
      username: username.value,
      email: email.value.toLowerCase(),
      gender: gender.value
    }
    axios.post(import.meta.env.VITE_DB_URL, user)
    setUsers((prevUsers) => {
      const newData = [...prevUsers, user];
      // localStorage.setItem('users', JSON.stringify(newData));
      return newData;
    });
    e.target.reset();
  }

  useEffect(() => {
    // const users = JSON.parse(localStorage.getItem('users') || "[]")
    // setUsers(users)
    axios(import.meta.env.VITE_DB_URL)
      .then(res => setUsers(res.data))
  }, [])

  const handleDelete = (id) => {
    setUsers((prevUsers) => {
      const newData = prevUsers.filter(user => user.id !== id)
      localStorage.setItem('users', JSON.stringify(newData));
      return newData
    })
  }

  const hendleSort = () => {
    setUsers(users.toSorted((a, b) => (b.email).localeCompare(a.email)))
  }

  return (
    <div className='App'>
      <Title title='React form exampe' as='h1' align='right' />
      <form onSubmit={handleSubmit} className='App__form'>
        <input type="email" name='email' required placeholder='email' />
        <input type="text" name='username' required placeholder='username' />
        <div>
          <label htmlFor="male">
            <input type="radio" name="gender" id="male" value="male" /> M
          </label>
          <label htmlFor="female">
            <input type="radio" name="gender" id="female" value="female" /> F
          </label>
        </div>
        <input type="submit" value="save user" />
      </form>
      <hr />
      <table>
        <caption>Our users</caption>
        <thead>
          <tr>
            <th>id</th>
            <th>username</th>
            <th >
              email
              <i className="bi bi-sort-down-alt" onClick={hendleSort}></i>
            </th>
            <th>gender</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(elem => {
              return (
                <tr key={elem.id} className={classNames({
                  'dublicate': dublicateEmailId == elem.id
                })}>
                  <td>{elem.id}</td>
                  <td>{elem.username}</td>
                  <td>{elem.email}</td>
                  <td>{elem.gender[0].toUpperCase()}</td>
                  <td className='delete'>
                    <button onClick={() => handleDelete(elem.id)}>
                      <i className="bi bi-x-lg"></i>
                    </button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
