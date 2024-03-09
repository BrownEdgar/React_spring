import React from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>Hello world</h2>
      <button onClick={handleClick}>plus</button>
    </div>
  );
}
