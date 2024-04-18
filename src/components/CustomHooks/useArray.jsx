import { useState } from "react";

export default function useArray(initialArray) {
  const [array, setArray] = useState(initialArray);

  const push = (element) => {
    setArray((prevArray) => [...prevArray, element]);
  };

  const update = (index, el) => {
    setArray((prevArray) =>
      prevArray.map((item, i) => (i === index ? el : item))
    );
  };

  const clear = () => {
    setArray([]);
  };

  return { array, push, update, clear };
}
