import React from "react";
import "./About.css";
export default function About() {
  return (
    <div className="box">
      <h1>About Me</h1>
      <div className="left">
        <img src="./public/img/aal.jpg" alt="" />
        <div className="text">
          <p>
            One million Earths could fit inside the Sun – and the Sun is
            considered an average-size star. For years it was believed that
            Earth was the only planet in our solar system with liquid water.
            More recently, NASA revealed its strongest evidence yet that there
            is intermittent running water on Mars, too!
          </p>
          <br />
          <p>
            Comets are leftovers from the creation of our solar system about 4.5
            billion years ago – they consist of sand, ice and carbon dioxide.
            You wouldn’t be able to walk on Jupiter, Saturn, Uranus or Neptune
            because they have no solid surface!
          </p>
          <ul>
            <li>
              If you could fly a plane to Pluto, the trip would take more than
              800 years!
            </li>
            <li>
              Space junk is any human-made object orbiting Earth that no longer
            </li>
            <li>
              An asteroid about the size of a car enters Earth’s atmosphere
              roughly
            </li>
            <li>
              The highest mountain known to man is on an asteroid called Vesta.{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
