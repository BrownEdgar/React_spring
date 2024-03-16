import { useState } from "react";
import "./App.scss";

export default function App() {
  const [list] = useState([
    {
      id: 1,
      title: "HTML",
      desc: "HTML5 (Hypertext Markup Language 5) is a markup language used for structuring and presenting hypertext documents on the World Wide Web. It was the fifth and final major HTML version that is now a retired World Wide Web Consortium (W3C) recommendation. The current specification is known as the HTML Living Standard.",
      image: "./HTML1.svg",
    },
    {
      id: 2,
      title: "CSS",
      desc: "Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
      image: "./CSS.svg",
    },
    {
      id: 3,
      title: "JavaScript",
      desc: "JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.",
      image: "./JavaScript.png",
    },
  ]);
  return (
    <div className="App">
      <h2 className="App__title">Categories</h2>
      {list.map((item) => {
        return (
          <div key={item.id} className="App__item">
            <img className="App__image" src={item.image} alt={item.title} />
            <div className="App__info">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
