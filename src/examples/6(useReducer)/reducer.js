import ACTIONS from './actionsTypes';

export const initialState = {
  data: [],
  arr: [774, 86, 51, 20, 30, 12, 98],
  total: 0,
  bool: false,
  user: {
    id: 1,
    name: 'John snow'
  },

}


function reducer(state = initialState, { type, payload }) {

  switch (type) {
    // case ACTIONS.PLUS: return state + (action.payload || 1);
    // case ACTIONS.MINUS: return state - 1;
    // case ACTIONS.RANDOM: return state + Math.round((Math.random() * (70 - 50) + 50))
    // case ACTIONS.ADD_ITEM: return [...state, Math.round((Math.random() * (70 - 50) + 50))];
    // case ACTIONS.ARRAY_SORT: return sortedArray(state, payload)
    // case ACTIONS.FILL_ARRAY: return fillArray(state, payload)
    case ACTIONS.ADD_POSTS: return {
      ...state,
      data: payload.posts
    }
    default: return state;
  }

}

const sortedArray = (state, sortOption) => {
  return (sortOption === 'ASC')
    ? state.toSorted((a, b) => a - b)
    : state.toSorted((a, b) => b - a)
}

const fillArray = (state, quantity) => {
  const arr = [];
  for (let i = 0; i < quantity; i++) {
    const random = Math.round(Math.random() * 1e3);
    arr.push(random);
  }
  return [...state, ...arr];
}

export default reducer
