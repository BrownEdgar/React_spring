import React, { useEffect } from 'react'
import './App.scss'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import { setUsers, usersFilter } from './features/users/usersSlice'

export default function App() {
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()

  const data = [
    {
      id:1,
      fName: 'John',
      lName: 'Smith',
      registerDate: moment("07-02-2016").format("Do MMM YY"),
      language: 'js'
    },
    {
      id:2,
      fName: 'John',
      lName: 'Snow',
      registerDate: moment("08-04-2010").format("Do MMM YY"),
      language: 'react'
    },
    {
      id:3,
      fName: 'Bgdo',
      lName: 'John',
      registerDate: moment("01-02-2216").format("Do MMM YY"),
      language: 'kss'
    },
    {
      id:4,
      fName: 'Tom',
      lName: 'Hild',
      registerDate: moment("07-09-2019").format("Do MMM YY"),
      language: 'kss'
    },
    {
      id:5,
      fName: 'Lav',
      lName: 'Smith',
      registerDate: moment("05-04-2018").format("Do MMM YY"),
      language: 'c#'
    }
  ]

  useEffect(() => {
    dispatch(setUsers(data))
  },[])
  
  return(
    <div className="App">
      {users.map((user) => {
        <div key={user.id}>
          <h1>{user.fName}-{user.lName}</h1>
          <p>Registered at | {user.registerDate}</p>
          <p>Languge | {user.language}</p>
        </div>
      })}
      <button onClick={() => dispatch(usersFilter("kss"))}>Filter</button>
    </div>
  )
}

