import React from 'react'
import './App.scss'

export default function App() {
    // const [count, {plus, minus}] = useCustomHook({initialState: 1, min:1, max:12})
    // const [data, {sort}] = useArray({quantity: 5, min:10, max: 80 })
    const [data, loading, err] = useFetch({url: 'https://jsonplaceholder.typicode.com/todos?_limit=4'})
    if(loading){
        return <h1>loading</h1>
    }
    return (
        <div className='App'>
            
        </div>
    )
}
