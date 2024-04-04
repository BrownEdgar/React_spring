import React, { useEffect } from 'react'
import { nanoid } from 'nanoid'
import './App.scss'
import Title from '../../utils/UI/Title/Title'
import { useState } from 'react';
import classNames from 'classnames';
import axios from 'axios';
import MainForm from '../../components/Form/MainForm';
import Modal from '../../components/Modal/Modal';

export default function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null)
  const [dublicateEmailId, setDublicateEmailId] = useState(null)

  const setEditableuser = (user = null) => {
    setCurrentUser(user)
  }

  const handleSubmit = (values, { resetForm }) => {
    const isUserExistUser = users.find(elem => elem.email === values.email.toLowerCase())
    if (isUserExistUser) {
      setDublicateEmailId(isUserExistUser.id)
      setTimeout(setDublicateEmailId, 3010, null)
      return;
    }
    setDublicateEmailId(null)

    const user = {
      id: nanoid(6),
      ...values
    }
    axios.post(import.meta.env.VITE_DB_URL, user)
    setUsers((prevUsers) => {
      const newData = [...prevUsers, user];
      // localStorage.setItem('users', JSON.stringify(newData));
      return newData;
    });
    resetForm();
  }
  function getUsers() {
    axios(import.meta.env.VITE_DB_URL)
      .then(res => setUsers(res.data))
  }
  useEffect(() => {
    // const users = JSON.parse(localStorage.getItem('users') || "[]")
    // setUsers(users)
    getUsers()
  }, [])

  const handleDelete = (id) => {
    axios({
      baseURL: import.meta.env.VITE_DB_URL,
      method: 'DELETE',
      url: id
    })
      .then(getUsers)
      .catch(err => console.log(err))
  }

  const hendleSort = () => {
    setUsers(users.toSorted((a, b) => (b.email).localeCompare(a.email)))
  }
  const handleEditSubmit = (e) => {
    e.preventDefault()
    axios.put(import.meta.env.VITE_DB_URL + `/${currentUser.id}`, currentUser)
      .then(res => {

        setCurrentUser(null)
        getUsers()
      })
      .catch(err => console.log(err))
  }
  const handleChange = (e) => {
    setCurrentUser({
      ...currentUser,
      [e.currentTarget.name]: e.currentTarget.value
    })

  }
  return (
    <div className='App'>
      {currentUser ? (
        <Modal toggleModal={setEditableuser}>
          <form onSubmit={handleEditSubmit} className="App__editForm">
            <input
              type="text"
              name='username'
              value={currentUser.username}
              onChange={handleChange} />
            <input type="email" name='email' value={currentUser.email} onChange={handleChange} />
            <select name="language" id="language" defaultValue={currentUser.language} onChange={handleChange}>
              <option value="html">html</option>
              <option value="css">css</option>
              <option value="javascript">javascript</option>
              <option value="react">react</option>
            </select>
            <input type="radio" name="gender" id="male" value="male" checked={currentUser.gender === 'male'} onChange={handleChange} /> M
            <input type="radio" name="gender" id="female" value="female" checked={currentUser.gender === 'female'} onChange={handleChange} /> F
            <input type="submit" value="save" />
          </form>
        </Modal>
      ) : null}
      <Title title='React form exampe' as='h1' align='left' />
      <MainForm onSubmit={handleSubmit} currentUser={currentUser} />
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
            <th>language</th>
            <th>gender</th>
            <th colSpan={2}></th>
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
                  <td>{elem.language}</td>
                  <td>{elem.gender[0].toUpperCase()}</td>
                  <td className='delete'>
                    <button onClick={() => setEditableuser(elem)}>
                      <i className="bi bi-pencil"></i>
                    </button>
                  </td>
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
