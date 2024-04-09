import React, { useState, useEffect} from 'react'
import './App.scss'
import axios from 'axios'
import {nanoid} from 'nanoid'
import MainForm from '../Form3/MainForm'


export default function App() {
    // const [users, setUsers] = useState([])

    // function getUsers() {
    //     axios('http://localhost:3000/users')
    //     .then(res => setUsers(res.data))
    // }
    // useEffect(() => {
    //     getUsers()
    // }, [])
    
    const handleSubmit = (values, {resetForm}) => {
        resetForm()
        const user = {
            id: nanoid(6),
            ...values
        }
    }

    //     axios.post('http://localhost:3000/users', user)
    //     setUsers((prevUsers) => {
    //         const newData = [...prevUsers, user ]
    //         return newData
    //     })
    // }

        // const handleDelete  = (id) => {
        //     axios({
        //         baseURL: 'http://localhost:3000/users',
        //         method: 'DELETE',
        //         url: id
        //     }).then(getUsers)
        //         .catch(err => console.log(err))
        // }

    return (
        <div className='App'>
            <h1>Address form template</h1>
            <MainForm />
        
        </div>
    )
}
