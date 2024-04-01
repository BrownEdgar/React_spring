import React, { useState, useEffect } from "react";
import axios from "axios";
import { nanoid } from "nanoid";
import "./App.scss";

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios("http://localhost:3000/posts").then((data) => {
        setPosts(data.data);
    });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const { title, body } = e.target;
    console.log(title,body);
    const post = {
      id: nanoid(6),
      title: title.value,
      body: body.value,
    };
    axios.post("http://localhost:3000/posts", post);
    setPosts((prevPosts) => {
      const newData = [...prevPosts, post];
      return newData;
    });
    console.log(posts);

    e.target.reset();
  }

  return (
    <div className="App">
      <form className="App__form" onSubmit={handleSubmit}>
        <h2>Add Post</h2>
        <input type="text" name="title" />
        <textarea name="body" cols="30" rows="10"></textarea>
        <input type="submit" value="Send"/>
      </form>
      <div className="App__posts">
        {posts.map((elem,index) =>{
        return (
        <div className='App__post' key={elem.id}>
            <h2>{elem.title}</h2>
            <p>{elem.body}</p>
            <span>{index}</span>
        </div>
        )})}
      </div>
    </div>
  );
}
