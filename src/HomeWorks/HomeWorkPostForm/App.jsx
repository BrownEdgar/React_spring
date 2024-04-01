import { useEffect, useState } from "react";
import axios from "axios";
import { nanoid } from "nanoid";
import "./App.scss";

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios("http://localhost:3000/posts").then((res) => setPosts(res.data));
  }, []);

  const addPost = (e) => {
    e.preventDefault();
    const post = {
      id: nanoid(8),
      title: e.target.postTitle.value,
      desc: e.target.postBody.value,
    };
    axios.post("http://localhost:3000/posts", post);
    setPosts([...posts, post]);
    e.target.reset();
  };

  const deletePost = (id, ind) => {
    setPosts(posts.filter((item) => item.id !== id));
    axios.delete(`http://localhost:3000/posts/${id}`);
  };

  return (
    <div className="App">
      <form onSubmit={addPost} className="App__form">
        <label htmlFor="postTitle">
          <h4>Post title</h4>
          <input type="text" name="postTitle" required />
        </label>
        <label htmlFor="postBody">
          <h4>Post</h4>
          <textarea className="App__textarea" name="postBody" required />
        </label>
        <input className="App__submitBtn" type="submit" value="Add Post" />
      </form>
      <div className="App__posts">
        <h2>Posts</h2>
        <div>
          {posts.map((item, ind) => {
            return (
              <div key={item.id} className="App__post">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <button
                  className="App__deleteBtn"
                  onClick={() => deletePost(item.id, ind)}
                >
                  Delete Post
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
