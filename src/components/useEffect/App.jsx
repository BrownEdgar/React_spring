import React, { useState, useEffect } from "react";
import "./App.scss";

function App() {
  const [posts, setPosts] = useState([]);
    useEffect(() => {
    function getData() {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
     
    }
    getData()
  },[] )


function removeBtn(id){
const result = posts.filter(elem =>{
 return elem.id !== id
})
setPosts(result)
}

const delete40 = () => {
  const filteredPosts = posts.filter(elem => {
      return elem.id >= 40 && elem.id <= 60;
  });
  console.log(filteredPosts);
  setPosts(filteredPosts);
}

  return (
    <div>
      <h1>Our Posts</h1>
      <button onClick={delete40}>Delete 40</button>
      <div className="Posts">
        {posts.map((elem) => {
          return (
            <div key={elem.id} className="Posts__item">
              <h2>{elem.title}</h2>
              <p>{elem.body}</p>
              <span>{elem.id}</span>
              <button onClick={()=>{removeBtn(elem.id)}}>&#10006;</button>
            </div>
          );
        })}
      
      </div>
    </div>
  );
}

export default App;
