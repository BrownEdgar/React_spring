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

const addDeveloper = (state, value) => {
  state.developers = state.developers.toSpliced(0, 0, value);
  return state;
};

const shuffle = (state) => {
  for (let i = state.arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [state.arr[i], state.arr[j]] = [state.arr[j], state.arr[i]];
  }
  return state;
};

const filterArr = (state) => {
  state.arr = state.arr.filter((item) => item > 10);
  return state;
};

const addNumber = (state) => {
  state.arr = state.arr.toSpliced(
    -1,
    0,
    Math.ceil(Math.random() * (999 - 100) + 100)
  );
  return state;
};

const deleteNumber = (state, ind) => {
  state.arr = state.arr.toSpliced(ind, 1);
  return state;
};

const addAge = (state, num) => {
  state.user.age = num;

  return state;
};

const changeName = (state, newName) => {
  state.user.name = newName;
  return state;
};
