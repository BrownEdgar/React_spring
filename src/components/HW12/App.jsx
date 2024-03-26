import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./App.scss";

export default function App() {
  const [post, setPost] = useState([
    {
      id: 1,
      poster: "./images/poster1.jpg",
      title: "What is Digital Customer Experience?",
      desc: "In this post, we take a look at digital customer exeperience and the role that DXPs play in building engaging digital customer experiences.",
      avatar: "./images/girl1.jpg",
      date: "Mar 16, 2022",
    },
    {
      id: 2,
      poster: "./images/poster2.jpg",
      title: "What is Digital Customer Experience?",
      desc: "In this post, we take a look at digital customer exeperience and the role that DXPs play in building engaging digital customer experiences.",
      avatar: "./images/girl2.jpg",
      date: "Mar 16, 2022",
    },
    {
      id: 3,
      poster: "./images/poster3.jpg",
      title: "What is Digital Customer Experience?",
      desc: "In this post, we take a look at digital customer exeperience and the role that DXPs play in building engaging digital customer experiences.",
      avatar: "./images/girl3.jpg",
      date: "Mar 16, 2022",
    },
    {
      id: 4,
      poster: "./images/poster4.jpg",
      title: "What is Digital Customer Experience?",
      desc: "In this post, we take a look at digital customer exeperience and the role that DXPs play in building engaging digital customer experiences.",
      avatar: "./images/girl4.jpg",
      date: "Mar 16, 2022",
    },
    {
      id: 5,
      poster: "./images/poster5.jpg",
      title: "What is Digital Customer Experience?",
      desc: "In this post, we take a look at digital customer exeperience and the role that DXPs play in building engaging digital customer experiences.",
      avatar: "./images/girl5.jpg",
      date: "Mar 16, 2022",
    },
    {
      id: 6,
      poster: "./images/poster6.png",
      title: "What is Digital Customer Experience?",
      desc: "In this post, we take a look at digital customer exeperience and the role that DXPs play in building engaging digital customer experiences.",
      avatar: "./images/girl6.jpg",
      date: "Mar 16, 2022",
    },
  ]);

  const [page, setPage] = useState(1);

  const [perPage, setPerPage] = useState(3);
  const [info, setInfo] = useState([]);

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };
  useEffect(() => {
    setInfo(post.slice(page * perPage - perPage, perPage * page));
  }, [page, perPage]);

  return (
    <div className="App">
      <h1>Blog</h1>
      <div className="App__Posts">
        {info.map((elem) => {
          return (
            <div className="App__Post" key={elem.id}>
              <img src={elem.poster} className="App__image" />
              <h3>{elem.title}</h3>
              <p>{elem.desc}</p>
              <img className="App__Avatar" src={elem.avatar} />
              <p className="App__data">{elem.date}</p>
              <a href="">read post</a>
            </div>
          );
        })}
      </div>

      <ReactPaginate
        breakLabel="..."
        nextLabel="next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={Math.ceil(6 / perPage)}
        previousLabel="previous"
        renderOnZeroPageCount={null}
        className="pagination"
        previousClassName="prev"
      />
    </div>
  );
}
