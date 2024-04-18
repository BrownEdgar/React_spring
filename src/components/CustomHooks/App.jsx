import useArray from "./useArray";
import "./App.scss";
export default function ArrayComponent() {
  const { array, push, update, clear } = useArray([1, 2, 3, 4, 5, 6]);

  return (
    <div className="array">
      <div className="array__arr">{array.join(", ")}</div>
      <div className="array__buttons">
        <button onClick={() => push(7)}>Add 7</button>
        <button onClick={() => update(1, 9)}>Change Second Element To 9</button>

        <button onClick={clear}>Clear</button>
      </div>
    </div>
  );
}
