import React, { useState, useEffect} from 'react'
import './App.scss'
import axios from 'axios'
import {nanoid} from 'nanoid'
import Form_hw from '../Form2/Form_hw'

export default function App() {
    const [users, setUsers] = useState([])

    function getUsers() {
        axios('http://localhost:3000/users')
        .then(res => setUsers(res.data))
    }

    useEffect(() => {
        getUsers()
    }, [])
    
    const handleSubmit = (values, {resetForm}) => {
        resetForm()
        const user = {
            id: nanoid(6),
            ...values
        }

        axios.post('http://localhost:3000/users', user)
        setUsers((prevUsers) => {
            const newData = [...prevUsers, user ]
            return newData
        })
    }

    const handleDelete  = (id) => {
        axios({
            baseURL: 'http://localhost:3000/users',
            method: 'DELETE',
            url: id
        }).then(getUsers)
            .catch(err => console.log(err))
    }

    return (
        <div className='App'>
            <Form_hw onSubmit={handleSubmit} />
            <div className="App__table">
                    {
                        users.map(elem => {
                            return (
                                <div className="App__info">
                                    <tr key={elem.id}>
                                        <h2>{elem.title}</h2>
                                        <p>{elem.body}</p>
                                        <span className='App__info__delete'>
                                            <button onClick={() => handleDelete(elem.id)}>
                                                <i className="bi bi-x"></i>
                                            </button>
                                        </span>
                                    </tr>
                                </div>
                            )
                        })
                    }
            </div>
        </div>
    )
}
