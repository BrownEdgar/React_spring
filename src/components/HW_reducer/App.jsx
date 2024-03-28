import React, { useReducer } from 'react'
import './App.scss'
import reducer, { initialState } from './reducer'
import ACTIONS from './actionTypes'


export default function App() {
    const [state, dispatch] = useReducer(reducer,initialState)

    return (
        <div className='App'>
            <h1>{JSON.stringify(state, null, 1)}</h1>
            <button onClick={() => dispatch({type:ACTIONS.SHUFFLE})}>Shuffle</button>
            <button onClick={() => dispatch({type: ACTIONS.FILTER})}>Filter 10</button>
            <button onClick={() => dispatch({type: ACTIONS.ADD_NUMBER})}>Add random number</button>
            <button onClick={() => dispatch({type: ACTIONS.CHANGE_NAME, payload: 'bgdo'})}>Change Name</button>
            <button onClick={() => dispatch({type: ACTIONS.AGE, payload: 19})}>Add Age</button>
            <button onClick={() => dispatch({type: ACTIONS.REMOVE, payload: 0})}>Delete</button>
        </div>
    )
}
