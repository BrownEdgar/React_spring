import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div>
        <h1>About Me</h1>
      </div>
      <div className="content">
        <img src="./images/photo.jpg" alt="" />
        <div className="info">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
            impedit incidunt maxime! Ab magni doloremque vero doloribus odio,
            quis officia laudantium illum ipsum provident perferendis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe rerum
            eius sint, quisquam aliquid porro quibusdam tempore doloribus ex
            velit pariatur qui. Fugiat amet vitae voluptate nulla ab consequatur
            rerum omnis sapiente, eveniet repellendus, explicabo laboriosam
            assumenda repudiandae praesentium architecto.
          </p>
          <ul>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
