import ACTIONS from "./actionTypes"

export const initialState = {
    data: [],
    arr: [343, 66, 788, 1 , 44],
    total: 0,
    user: {
        id: 1,
        name: 'Varis'
    }
}


function reducer(state = initialState, {type, payload}) {

    switch (type) {
        // case ACTIONS.PLUS: return state + action.payload
        // case ACTIONS.MINUS: return state - 1
        // case ACTIONS.RANDOM: return state + Math.round(Math.random() * (70 - 50) + 50)
        // case ACTIONS.ADD_ITEM: return [...state, Math.round(Math.random() * (70 - 50) + 50) ]
        // case ACTIONS.SORT: return sortedArr(state, payload )
        // case ACTIONS.FILL_ARRAY: return fillArray(state, payload)
        case ACTIONS.ADD_POSTS: return {
            ...state,
            data: payload.posts
        }
        
        default: return state
    }
}

const sortedArr = (state, sortOptions) => {
    return (sortOptions === 'ASC')
    ?state.toSorted((a,b) => a - b)
    :state.toSorted((a,b) => b - a)
}


const fillArray = (state, quantity) => {
    const arr = []
    for (let i = 0; i < quantity; i++) {
        const random = Math.round(Math.random() * 2e3)
        arr.push(random)
    }
    return [...state, ...arr]
}

const filter =(state) => {
    state.arr = state.arr.filter((num) => num > 10)
    return state
}


export default reducer