import React, { useState, useEffect } from "react";
import axios from "axios";
import { nanoid } from "nanoid";
import { Field, Form, Formik ,ErrorMessage} from "formik";
import {object, string} from "yup"
import "./App.scss";

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios("http://localhost:3000/posts").then((data) => {
      setPosts(data.data);
    });
  }, []);

  function handleSubmit(values) {

    const post = {
      id: nanoid(6),
      ...values
    };
    axios.post("http://localhost:3000/posts", post);
    setPosts((prevPosts) => {
      const newData = [...prevPosts, post];
      return newData;
    });
  }

  const initialValues = {
   title:"",
   body:""
  };
  const validationSchema = object({
    title: string().min(6).max(20).required(),
    body: string().min(10).max(50).required(),
  })

  return (
    
    <div className="App">
      <Formik
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        initialValues={initialValues}
      >
      <Form className="App__form" >
        <h2>Add Post</h2>
       
       <Field type="text" name="title" />
        <Field as="textarea" name="body" cols="30" rows="10"></Field>
       <div className="App__errorMasages">
       <ErrorMessage className="App__error" name="title" component="p"></ErrorMessage>
       <ErrorMessage className="App__error" name="body" component="p"></ErrorMessage> 
       </div>
        <input type="submit" value="Send" />
      </Form>
      </Formik>
      <div className="App__posts">
        {posts.map((elem, index) => {
          return (
            <div className="App__post" key={elem.id}>
              <h2>{elem.title}</h2>
              <p>{elem.body}</p>
              <span>{index}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
