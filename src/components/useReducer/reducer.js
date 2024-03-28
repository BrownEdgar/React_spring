import ACTIONS from './actionsTypes';

export const initialState = {
  developers: [],
  user: {
    id: 1,
    name: "Armen",
    age: null,
  },
  arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9],
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DEVELOPER:
      return {
        ...state,
        developers: [...state.developers, payload.name],
      };
    case ACTIONS.SHUFFLE_ARRAY:
      return {
        ...state,
        arr: state.arr.toSorted(() => Math.random() - 0.5),
      };
    case ACTIONS.ADD_RANDOM_NUMBER:
      return {
        ...state,
        arr: [...state.arr, Math.floor(Math.random() * 900) + 100],
      };
    case ACTIONS.DELETE_LESS_THAN_TEN:
      return {
        ...state,
        arr: state.arr.filter(num => num >= 10),
      };
    case ACTIONS.CHANGE_USER_NAME:
      return {
        ...state,
        user: {
          ...state.user,
          name: payload.name,
        },
      };
    case ACTIONS.ADD_USER_AGE:
      return {
        ...state,
        user: {
          ...state.user,
          age: payload.age,
        },
      };
    case ACTIONS.DELETE_ARRAY_ELEMENT:
      return {
        ...state,
        arr: state.arr.filter((_, index) => index !== payload.index),
      };
    default:
      return state;
  }
}

export default reducer;
