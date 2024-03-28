import React, { useReducer } from 'react'
import './App.scss'
import reducer, { initialState } from './reducer'
import ACTIONS from './actionTypes'


export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState)


    const HandleClick = () => {
        dispatch({type: ACTIONS.SORT, })
    }

    // const addPost = () => {
    //     axios('https://jsonplaceholder.typicode.com/comments', {
    //         params:
    //         _limit, 10
    //     })
    //     dispatch({type: ACTIONS.SORT, })
    // }




    return (
        <div className='App'>
            <h1>state: {JSON.stringify(state, null, 1)}</h1>
            <button onClick={HandleClick}>+</button>
            <button onClick={() => dispatch({type: ACTIONS.MINUS})}>-</button>  
            <button onClick={() => dispatch({type: ACTIONS.RANDOM})}>add random numb</button>
            <button onClick={() => dispatch({type: ACTIONS.ADD_ITEM})}>add item</button>
            <button onClick={() => dispatch({type: ACTIONS.SORT, payload: 'DESC'})}>Sort</button>
            <button onClick={() => dispatch({type: ACTIONS.FILL_ARRAY, payload: 12})}>Fill array</button>
            <button onClick={addPost}>Fill array</button>
        </div>
    )
}
