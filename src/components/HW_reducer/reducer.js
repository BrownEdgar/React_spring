import ACTIONS from "./actionTypes"

export const initialState =  {
    developers: [],
    user: {
        id: 1,
        name: "Armen"
        },
        arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9]
    }

function reducer(state = initialState, {type, payload}) {
    switch (type) {
        case ACTIONS.SHUFFLE: return {
            ...state, arr: state.arr.sort(() => Math.random() - 0.5)}

        case ACTIONS.FILTER: return {
            ...state, arr: state.arr.filter(num => num >= 10)}

        case ACTIONS.ADD_NUMBER: return {
            ...state, arr: [...state.arr, Math.round(Math.random()* (999-100) + 100)]} 

        case ACTIONS.CHANGE_NAME: return {
            ...state,
            user: {
                ...state.user,
                name : payload
            }
        }

        case ACTIONS.AGE: return {
            ...state, 
            user: {
                ...state.user,
                age : payload
            }
        }

        case ACTIONS.REMOVE: return{
            ...state, arr: state.arr.toSpliced(payload, 1)
        }
        default: return state
    }
}


export default reducer