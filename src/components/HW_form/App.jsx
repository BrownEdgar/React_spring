import React, { useState, useEffect} from 'react'
import './App.scss'
import axios from 'axios'
import {nanoid} from 'nanoid'

export default function App() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios('http://localhost:3000/users')
        .then(res => setUsers(res.data))
    }, [])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const {title, body} = e.target

        const user = {
            id: nanoid(6),
            title: title.value,
            body: body.value,
        }

        axios.post('http://localhost:3000/users', user)
        setUsers((prevUsers) => {
            const newData = [...prevUsers, user ]
            return newData
        })
        e.target.reset()
    }

    const handleDelete  = (id) => {
        setUsers((prevUsers) => {
            const newData = prevUsers.filter(user => user.id != id)
            return newData
        })
    }

    return (
        <div className='App'>

            <form onSubmit={handleSubmit} className='App__form'>
                <input type="title" name ='title'  required/>
                <textarea name="body" id="" cols="30" rows="10" ></textarea>
                <input type="submit" value = 'ADD'/>
            </form>
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
