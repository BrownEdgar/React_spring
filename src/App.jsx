import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCounter, getCounter } from './features/counter/counterSlice'
import { getAsyncTodos, saveTodos } from './features/todos/todosSlice'
import { setUsers } from './features/users/usersSlice'
import moment from 'moment';

export default function App() {
  const counter = useSelector(getCounter)
  const todos = useSelector((state) => state.todos)
  const products = useSelector((state) => state.products)
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()
  
  const data = [
    {
      id:1,
      firstName: "Jhon",
      lastName: "Smith",
      registredDate: moment('12:59:01', 'HH:mm:ss').format('HH:mm'),
      language: "javascript"
    },
    {
      id:2,
      firstName: "Tiger",
      lastName: "Woods",
      registredDate: moment('12:59:01', 'HH:mm:ss').format('HH:mm'),
      language: "react"
    },
    {
      id:3,
      firstName: "Kobe",
      lastName: "Bryant",
      registredDate: moment('12:59:01', 'HH:mm:ss').format('HH:mm'),
      language: "node"
    },
    {
      id:4,
      firstName: "Jhon",
      lastName: "Kennedy",
      registredDate: moment('12:59:01', 'HH:mm:ss').format('HH:mm'),
      language: "Html&Css"
    }
  ]

  useEffect(() => {
    dispatch(setUsers(data))
  }, [])
  
  return (
    <div className='App'>
      {
        users.map((elem) => {
          <div key={elem.id}>
            <div>
            <h2>{elem.firstName}</h2>
            <h2>{elem.lastName}</h2>
            </div>
            <div>
              <span>{elem.registredDate}</span>
              <span>{elem.language}</span>
            </div>
          </div>
        })
      }
    </div>
  )
}
