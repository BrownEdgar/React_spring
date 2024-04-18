import { useState, useEffect } from "react";
export default function useArray(initialArray) {
  const [arr, setArr] = useState(initialArray);

  const set = (newArr) => {
    setArr(newArr);
  };
  const push = (n) => {
    const newArr = [...arr];
    newArr.push(n);
    setArr(newArr);
  };
  const remove = (i) => {
    setArr(arr.toSpliced(i, 1));
  };
  const filter = (func) => {
    setArr(arr.filter(func));
  };
  const update = (i, n) => {
    setArr(arr.toSpliced(i, 1, n));
  };
  const clear = () => {
    setArr([]);
  };
  return [arr, set, push, remove, filter, update, clear];
}
