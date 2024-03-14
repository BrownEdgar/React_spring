import React, { useState, useEffect } from 'react';
import axios from 'axios'
import List from './List/List';


export default function App() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        axios( 'https://type.fit/api/quotes')
            .then(res => setTodos(res.data))
        
    }, [])

    return (
        <div className='App'>
            <List data={todos}/>
        </div>
    )
}
