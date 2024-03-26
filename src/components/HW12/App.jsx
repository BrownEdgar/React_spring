import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./App.scss";

export default function App() {
  const [posts, setposts] = useState([
    {
      id: 1,
      poster: "./images/commerce.jpg",
      title: "What is Digital Customer Experience?",
      desc: "In this post, we take a look at digital customer exeperience and the role that DXPs play in building engaging digital customer experiences.",
      avatar: "./images/face_image_2.jpg",
      date: "Mar 16, 2022",
    },
    {
      id: 2,
      poster: "./images/gatsby_vs_next.jpg",
      title: "What is Digital Customer Experience?",
      desc: "In this post, we take a look at digital customer exeperience and the role that DXPs play in building engaging digital customer experiences.",
      avatar: "./images/tomas_shelbi.jfif",
      date: "Mar 16, 2022",
    },
    {
      id: 3,
      poster: "./images/CSS_Image.png",
      title: "What is Digital Customer Experience?",
      desc: "In this post, we take a look at digital customer exeperience and the role that DXPs play in building engaging digital customer experiences.",
      avatar: "./images/face_image_2.jpg",
      date: "Mar 16, 2022",
    },

    {
      id: 4,
      poster: "./images/HTML_Image.png",
      title: "What is Digital Customer Experience?",
      desc: "In this post, we take a look at digital customer exeperience and the role that DXPs play in building engaging digital customer experiences.",
      avatar: "./images/ryan-gosling.webp",
      date: "Mar 16, 2022",
    },
    {
      id: 5,
      poster: "./images/JS_Image.png",
      title: "What is Digital Customer Experience?",
      desc: "In this post, we take a look at digital customer exeperience and the role that DXPs play in building engaging digital customer experiences.",
      avatar: "./images/face_image_1.jpg",
      date: "Mar 16, 2022",
    },
    {
      id: 6,
      poster: "./images/React_Vs_Vue.png",
      title: "What is Digital Customer Experience?",
      desc: "In this post, we take a look at digital customer exeperience and the role that DXPs play in building engaging digital customer experiences.",
      avatar: "./images/ryan-gosling.webp",
      date: "Mar 16, 2022",
    },

    {
      id: 7,
      poster: "./images/Next_JS_Vs_React.jpg",
      title: "What is Digital Customer Experience?",
      desc: "In this post, we take a look at digital customer exeperience and the role that DXPs play in building engaging digital customer experiences.",
      avatar: "./images/face_image_2.jpg",
      date: "Mar 16, 2022",
    },
    {
      id: 8,
      poster: "./images/HTML_Image.png",
      title: "What is Digital Customer Experience?",
      desc: "In this post, we take a look at digital customer exeperience and the role that DXPs play in building engaging digital customer experiences.",
      avatar: "./images/ryan-gosling.webp",
      date: "Mar 16, 2022",
    },
    {
      id: 9,
      poster: "./images/JS_Image.png",
      title: "What is Digital Customer Experience?",
      desc: "In this post, we take a look at digital customer exeperience and the role that DXPs play in building engaging digital customer experiences.",
      avatar: "./images/face_image_1.jpg",
      date: "Mar 16, 2022",
    },
  ]);
  const [Page, setPage] = useState(1);
  const [perPage, setperPage] = useState(3);
  const [data, setdata] = useState([]);
  useEffect(() => {
    setdata(posts.slice(Page * perPage - perPage, perPage * Page));
  }, [Page, perPage]);

  const handlePageClick = (optionst) => {
    setPage(optionst.selected);
  };
  return (
    <div className="App">
      <h1 className="App__blog">Blog</h1>
      <div className="App__Posts">
        {data.map((elem) => {
          return (
            <div className="App__post" key={elem.id}>
              <img src={elem.poster} alt={elem.title} className="App__Poster" />
              <h3 className="App__title">{elem.title}</h3>
              <p className="App__text">{elem.desc}</p>
              <div className="App__miniInfo">
                <img src={elem.avatar} alt="avatar" className="App__avatar" />
                <p className="App__date">{elem.date}</p>
                <a href="" className="App__link">
                  read post
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={Math.ceil(posts.length / perPage)}
        previousLabel="Prev"
        renderOnZeroPageCount={null}
        className="App__pagination"
        activeClassName="App__active"
      />
    </div>
  );
}
