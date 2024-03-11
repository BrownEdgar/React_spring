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
  },[posts] )


function removeBtn(id){
const result = posts.filter(elem =>{
 return elem.id !== id
})
setPosts(result)
}

const delete40 = (id) =>{
    const del40 = posts.filter(elem =>{
        return elem.id > 50 || elem.id < 40
    })
    console.log(del40);
    setPosts(del40)
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
              <button onClick={removeBtn}>&#10006;</button>
            </div>
          );
        })}
      
      </div>
    </div>
  );
}

export default App;
