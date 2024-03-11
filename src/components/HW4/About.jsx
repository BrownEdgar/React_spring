import React, { useState } from "react";
import "./About.css";
export default function About() {
  const [ulText, setUlINfo] = useState([
    "Voluptate fugiat sit nisi exercitation ",
    " minim esse ex ad deserunt officia ",
    "Nulla reprehenderit pariatur ",
    " commodo velit cupidatat minim.",
  ]);

  return (
    <>
      <div className="About">
        <h1>About Me</h1>
        <div className="container">
          <div className="left">
            <img src="/public/images/aboutPhoto.jpg" />
          </div>
          <div className="right">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
              excepturi, libero quasi cumque est itaque, ratione nesciunt
              possimus reiciendis ea exercitationem autem laboriosam quos
              voluptatem, harum veniam molestiae quae eos.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              error quasi sint soluta quibusdam praesentium provident molestias
              iusto corrupti ut reprehenderit deleniti temporibus, atque
              possimus facilis labore minus qui voluptates?
            </p>
            <ul>
              {ulText.map((elem) => {
                return <li key={elem}>{elem}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
