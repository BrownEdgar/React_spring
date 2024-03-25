import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./App.scss";

export default function App() {
  const [data, setData] = useState([
    {
      id: 1,
      poster:
        "https://d2ms8rpfqc4h24.cloudfront.net/React_Vs_Vue_3fa266b582.png",
      title: "Vue.js vs React - How to choose the Right framework",
      desc: "In this blog, we are going to compare two of most popular JavaScript frameworks: React and Vue. We will find out if Vue.js is better than ",
      avatar:
        "https://www.telegraph.co.uk/multimedia/archive/03249/archetypal-female-_3249633c.jpg",
      date: "Mar 16, 2022",
    },
    {
      id: 2,
      poster:
        "https://www.nice.com/-/media/niceincontact/page-content/blog/2021/05/the-digital-customer-experience-is-changing-is-your-brand-on-board.ashx?rev=df0aa3552c914b9d9c2e09defff8ebb7",
      title: "What is Digital Customer Experience?",
      desc: "In this post, we take a look at digital customer exeperience and the role that DXPs play in building engaging digital customer experiences.",
      avatar:
        "https://media.istockphoto.com/id/805012064/photo/portrait-of-mature-hispanic-man.jpg?s=612x612&w=0&k=20&c=AfNa1ay8LPzaO-NOJZspqULvYavyhXg4rnJ9U_tvJY4=",
      date: "Mar 17, 2022",
    },
    {
      id: 3,
      poster:
        "https://d2ms8rpfqc4h24.cloudfront.net/React_Vs_Vue_3fa266b582.png",
      title: "What is Digital Customer Experience?",
      desc: "In this blog, we are going to compare two of most popular JavaScript frameworks: React and Vue. We will find out if Vue.js is better than ",
      avatar:
        "https://www.telegraph.co.uk/multimedia/archive/03249/archetypal-female-_3249633c.jpg",
      date: "Mar 18, 2022",
    },
    {
      id: 4,
      poster:
        "https://d2ms8rpfqc4h24.cloudfront.net/React_Vs_Vue_3fa266b582.png",
      title: "Vue.js vs React - How to choose the Right framework",
      desc: "In this blog, we are going to compare two of most popular JavaScript frameworks: React and Vue. We will find out if Vue.js is better than ",
      avatar:
        "https://www.telegraph.co.uk/multimedia/archive/03249/archetypal-female-_3249633c.jpg",
      date: "Mar 19, 2022",
    },
    {
      id: 5,
      poster:
        "https://www.nice.com/-/media/niceincontact/page-content/blog/2021/05/the-digital-customer-experience-is-changing-is-your-brand-on-board.ashx?rev=df0aa3552c914b9d9c2e09defff8ebb7",
      title: "What is Digital Customer Experience?",
      desc: "In this blog, we are going to compare two of most popular JavaScript frameworks: React and Vue. We will find out if Vue.js is better than ",
      avatar:
        "https://media.istockphoto.com/id/805012064/photo/portrait-of-mature-hispanic-man.jpg?s=612x612&w=0&k=20&c=AfNa1ay8LPzaO-NOJZspqULvYavyhXg4rnJ9U_tvJY4=",
      date: "Mar 20, 2022",
    },
    {
      id: 6,
      poster:
        "https://d2ms8rpfqc4h24.cloudfront.net/React_Vs_Vue_3fa266b582.png",
      title: "What is Digital Customer Experience?",
      desc: "In this post, we take a look at digital customer exeperience and the role that DXPs play in building engaging digital customer experiences.",
      avatar:
        "https://www.telegraph.co.uk/multimedia/archive/03249/archetypal-female-_3249633c.jpg",
      date: "Mar 21, 2022",
    },
    {
      id: 7,
      poster:
        "https://d2ms8rpfqc4h24.cloudfront.net/React_Vs_Vue_3fa266b582.png",
      title: "Vue.js vs React - How to choose the Right framework",
      desc: "In this blog, we are going to compare two of most popular JavaScript frameworks: React and Vue. We will find out if Vue.js is better than ",
      avatar:
        "https://www.telegraph.co.uk/multimedia/archive/03249/archetypal-female-_3249633c.jpg",
      date: "Mar 22, 2022",
    },
    {
      id: 8,
      poster:
        "https://www.nice.com/-/media/niceincontact/page-content/blog/2021/05/the-digital-customer-experience-is-changing-is-your-brand-on-board.ashx?rev=df0aa3552c914b9d9c2e09defff8ebb7",
      title: "What is Digital Customer Experience?",
      desc: "In this post, we take a look at digital customer exeperience and the role that DXPs play in building engaging digital customer experiences.",
      avatar:
        "https://media.istockphoto.com/id/805012064/photo/portrait-of-mature-hispanic-man.jpg?s=612x612&w=0&k=20&c=AfNa1ay8LPzaO-NOJZspqULvYavyhXg4rnJ9U_tvJY4=",
      date: "Mar 23, 2022",
    },
  ]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(3);
  const currentSlice = data.slice(page * perPage - perPage, page * perPage);

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };
  return (
    <div className="App">
      <h1>Blog</h1>
      <div className="App__content">
        {currentSlice.map((item) => {
          return (
            <div key={item.id} className="App__item">
              <img className="App__poster" src={item.poster} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="App__postInfo">
                <div className="App__UserInfo">
                  <img className="App__avatar" src={item.avatar} />
                  <span>{item.date}</span>
                </div>
                <a href="#">Read Post</a>
              </div>
            </div>
          );
        })}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={Math.ceil(data.length / perPage)}
        previousLabel="Prev"
        renderOnZeroPageCount={null}
        className="App__paginate"
      />
    </div>
  );
}
