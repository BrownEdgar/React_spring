import React, { useEffect, useState } from 'react'
import './ToDo.scss'

export default function ToDo() {
  const [posts, setPosts] = useState([])

  useEffect(() =>{
    function getData(){
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=20')
        .then(res => res.json())
        .then(data => setPosts(data))
    }
    getData()
  }, [])



  const allGreen = () => {
    const result = posts.map((elem) => {
      elem.completed = true;
      return elem;
    });
    setPosts(result);
  };


  const allRed = () => {
    const result = posts.map((elem) => {
      elem.completed = false;
      return elem;
    });
    setPosts(result);
  };


  const allSort = () => {
    const result = posts.toSorted((a, b) => {
      return a.title > b.title ? 1 : a.title < b.title ? -1 : 0;
    });
    setPosts(result);
  };


  return(
    <div className='ToDo'>
        <h1>ToDo List</h1>
        <div className="ToDo__Panel_Buttons">
            <div className="ToDo_Buttons">
                <button className='ToDo_check ToDo__check-green' onClick={allGreen}>All Green</button>
                <button className='ToDo_check ToDo__check-red' onClick={allRed}>All Red</button>
                <button className='ToDo_check ToDo__check-sorted' onClick={allSort}>Sort By Name</button>
            </div>
        </div>

        <div className="ToDo_Items">
            {
                posts.map((elem) => {
                    return elem.completed ? (
                        <div className="ToDo__item ToDo__item-green" key={elem.id}>
                          <h2 className="ToDo__title">{elem.title}</h2>
                        </div>
                      ) : (
                        <div className="ToDo__item ToDo__item-red" key={elem.id}>
                          <h2 className="ToDo__title">{elem.title}</h2>
                        </div>
                      );
                    })
            }
        </div>
    </div>
  )
}
