import { ACTIONS } from "./actionTypes";

export const initialState = {
  developers: [],
  user: {
    id: 1,
    name: "Armen",
  },
  arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD__DEVELOPER:
      return AddDev(state, payload);
    case ACTIONS.SHUFFLE:
      return shuffleArray(state);
    case ACTIONS.ADD_NUMBER:
      return addNum(state);
    case ACTIONS.DEL_NUMBERS:
      return delnumbers(state);
    case ACTIONS.RENAME:
      return rename(state);
    case ACTIONS.ADD_AGE:
      return addAge(state);
    case ACTIONS.DEL_BY_INDEX:
      return delByIndex(state, payload);
    default:
      return state;
  }
};

function AddDev(state, payload) {
  state.developers = [...state.developers, payload.input];
  return state;
}

function shuffleArray(state) {
  const arr = state.arr;
  arr.sort(() => Math.random() - 0.5);
  state.arr = arr;
  return state;
}

function addNum(state) {
  const random = Math.round(Math.random() * (999 - 100) + 100);
  state.arr = [...state.arr, random];
  return state;
}

function delnumbers(state) {
  state.arr = state.arr.filter((num) => num > 10);
  return state;
}
function rename(state) {
  state.user.name = "bgdo";
  return state;
}

function addAge(state) {
  state.user.age = 18;
  return state;
}
function delByIndex(state, payload) {
  state.arr = state.arr.toSpliced(payload, 1);
  return state;
}
