import { useState, useEffect } from "react";
export default function useArray(initialArray) {
  const [arr, setArr] = useState([]);
    useEffect(() => {
      setArr(initialArray)
    }, [])
   
  const set = (newArr) => {
    setArr(newArr);
  };
  const push = (num) => {
    setArr([...arr, num]);
  };
  const remove = (index) => {
    const newArr = [...arr];
    newArr.splice(index, 1);
    setArr(newArr);
  };
  const filter = (func) => {
    setArr(arr.filter(func));
  };
  const update = (index, num) => {
    const newArr = [...arr];
    newArr[index] = num;
    setArr(newArr);
  };
  const clear = () => {
    setArr([]);
  };
  return [arr, set, push, remove, filter, update, clear];
}