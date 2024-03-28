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
  return { ...state };
}

function shuffleArray(state) {
  state.arr = state.arr.toSorted(() => Math.random() - 0.5);
  return { ...state };
}

function addNum(state) {
  const random = Math.round(Math.random() * (999 - 100) + 100);
  state.arr = [...state.arr, random];
  return { ...state };
}

function delnumbers(state) {
  return { ...state ,arr:state.arr.filter((num) => num > 10)};
}
function rename(state) {
  return { ...state ,user: {...user,name: "bgdo"}};
}

function addAge(state) {
  return { ...state ,user: {...user,age: 18}};
}
function delByIndex(state, payload) {
  return { ...state , arr:state.arr.toSpliced(payload, 1)};
}
