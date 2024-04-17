import React, { useState } from "react";

export default function useArray(arr) {
  const [array, setArray] = useState(arr);
  const push = (x) => {
    setArray([...array, x]);
  };
  const update = (x, y) => {
    setArray(array.toSpliced(x, 1, y));
  };
  const remove = (x) => {
    setArray(array.toSpliced(x, 1));
  };
  const filter = (x) => {
    setArray(array.filter((i) => i < x));
  };

  const clear = () => {
    setArray([]);
  };

  return { array, push, update, remove, filter, clear };
}
