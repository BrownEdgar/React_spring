import React from "react";
import "./App.scss";
export default function App() {
  return (
    <div className="App">
      <div className="App__office App__office-one">
        <img src="./img/office_one.jpg" />
        <h2>Office Room</h2>
        <p>Programming </p>
      </div>

      <div className="App__office App__office-two">
        <img src="./img/office_two.jpg" />
        <h2>Office Room</h2>
        <p>Booking</p>
      </div>

      <div className="App__office App__office-tree">
        <img src="./img/office_tree.jpg" />
        <h2>Office Room</h2>
        <p>Shoping</p>
      </div>
    </div>
  );
}
