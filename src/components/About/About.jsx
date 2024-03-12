import React, { useState, useEffect } from 'react'
import "./About.scss"

export default function About() {
    const [todos, setTodos] = useState([])
    const [open, setOpen] = useState(false)
    useEffect(() => {
        function getTodos() {
            fetch('https://jsonplaceholder.typicode.com/todos?_limit=12')
                .then(res => res.json())
                .then(todos => setTodos(todos))
        }
        getTodos()
    }, [])

    function checkTrue() {
        const result = todos.map((elm) => {
            elm.completed = true
            return elm
        })
        setTodos(result)
    }
    function checkFalse() {
        const result = todos.map((elm) => {
            elm.completed = false
            return elm
        })
        setTodos(result)
    }
    function sortByName() {
        const result = todos.toSorted((a, b) => {
            return a.title > b.title ? 1 : a.title < b.title ? -1 : 0
        })
        setTodos(result)
    }
    function checkFt() {
        const result = todos.toSorted((a, b) =>{
            return a.completed - b.completed
        })
        setTodos(result)
    }
    function checkTf() {
        const result = todos.toSorted((a, b) =>{
            return b.completed - a.completed
        })
        setTodos(result)
    }

    return (
        <div className='About'>
            <h1>Todos</h1>
            <div className="About__but">
                <button className='About__checkBut About__checkBut-true' onClick={checkTrue}>True</button>
                <button className='About__checkBut About__checkBut-false' onClick={checkFalse}>False</button>
                <button className='About__checkBut About__checkBut-sort' onClick={sortByName}>Sort by name</button>
                <button className='About__checkBut About__checkBut-ft' onClick={checkFt}>False_true</button>
                <button className='About__checkBut About__checkBut-tf' onClick={checkTf}>True_false</button>
            </div>
            <div className="Todos">
                <div className="Todos__items">
                    {
                        todos.map((elm) => {
                            return (
                                elm.completed ?
                                    (<div key={elm.id} className="Todos__item Todos__item-true">
                                        <h2 onClick={()=> setOpen((prev)=> !prev)} className={open ? "" : 'Todos__title'}>{elm.title}</h2>
                                    </div>
                                    ) :
                                    (<div key={elm.id} className="Todos__item Todos__item-false">
                                        <h2 className='Todos__title'>{elm.title}</h2>
                                    </div>
                                    )

                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}
