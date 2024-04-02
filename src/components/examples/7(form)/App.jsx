import React, { useState, useEffect} from 'react'
import './App.scss'
import Title from '../../../utils/UI/Title/Title'
import {nanoid} from 'nanoid'
import classNames from 'classnames'



export default function App() {
    const [users, setUsers] = useState([])
    const [dublicate, setdublicateEmailId] = useState('QkLdNf')


    const handleSubmit = (e) => {
        e.preventDefault()
        const {username, email, gender} = e.target
        // const isdUserExist = users.find(elem => elem.email === email.value.toLowerCase())
        // if(isdUserExist){
        //     setdublicateEmailId(isdUserExist.id) 
        //     return
        // }
        const user = {
            id: nanoid(6),
            username: username.value,
            email: email.value.toLowerCase(),
            gender: gender.value
        }
        setUsers((prevUsers) => {
            const newData = [...prevUsers, user ]
            localStorage.setItem('users', JSON.stringify(newData))
            return newData
        })
        e.target.reset()
    }

    useEffect(() => {
        const users = JSON.parse(localStorage.getItem('users') || '[]')
        setUsers(users)
    
    }, [])
    
    const handleDelete  = (id) => {
        setUsers((prevUsers) => {
            const newData = prevUsers.filter(user => user.id != id)
            localStorage.setItem('users', JSON.stringify(newData))
            return newData
        })
    }

    return (
        <div className='App'>
            <Title title='React for example'  as = 'h1' align = 'center'/>

            <form onSubmit={handleSubmit} className='App__form'>
                <input type="email" name = 'email' required/>
                <input type="text" name = 'username' required/>
                <div>

                    <label htmlFor="">
                        <input type="radio" name = 'gender' id='male' value='male'/> M
                    </label>

                    <label htmlFor="">
                        <input type="radio" name = 'gender' id='female' value='female'/> F
                    </label>

                </div>
                <input type="submit" value = 'save user'/>
            </form>
            <hr /><table>
                <caption>Our users</caption>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>user</th>
                        <th>email</th>
                        <th>gender</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(elem => {
                            return (
                                <tr key={elem.id} className={classNames({
                                    'dublicate': dublicate == elem.id
                                })}>
                                    <td>{elem.id}</td>
                                    <td>{elem.username}</td>
                                    <td>{elem.email}</td>
                                    <td>{elem.gender}</td>
                                    <td className='delete'>
                                        <button onClick={() => handleDelete(elem.id)}>
                                            <i className="bi bi-trash"></i>
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
