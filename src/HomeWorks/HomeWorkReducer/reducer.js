import ACTIONS from "./actionTypes";

export const initialState = {
  developers: ["fff", "ggg", "gggs"],
  user: {
    id: 1,
    name: "Armen",
  },
  arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.ADD_DEVELOPER:
      return addDeveloper(state, action.payload);
    case ACTIONS.SHUFFLE:
      return shuffle(state);
    case ACTIONS.FILTER:
      return filterArr(state);
    case ACTIONS.ADD_NUMBER:
      return addNumber(state);
    case ACTIONS.DELETE_NUMBER:
      return deleteNumber(state, action.payload);
    case ACTIONS.ADD_AGE:
      return addAge(state, action.payload);
    case ACTIONS.CHANGE_NAME:
      return changeName(state, action.payload);
    default:
      return state;
  }
}

export default reducer;

const addDeveloper = (state, e) => {
  return {
    ...state,
    developers: [...state.developers, e.target.username.value],
  };
};

const shuffle = (state) => {
  for (let i = state.arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [state.arr[i], state.arr[j]] = [state.arr[j], state.arr[i]];
  }
  return { ...state, arr: [...state.arr] };
};

const filterArr = (state) => {
  state.arr = state.arr.filter((item) => item > 10);
  return { ...state, arr: [...state.arr] };
};

const addNumber = (state) => {
  return {
    ...state,
    arr: [...state.arr, Math.ceil(Math.random() * (999 - 100) + 100)],
  };
};

const deleteNumber = (state, ind) => {
  state.arr = state.arr.toSpliced(ind, 1);
  return { ...state, arr: [...state.arr] };
};

const addAge = (state, num) => {
  return { ...state, user: { ...state.user, age: num } };
};

const changeName = (state, newName) => {
  return { ...state, user: { ...state.user, name: newName } };
};
