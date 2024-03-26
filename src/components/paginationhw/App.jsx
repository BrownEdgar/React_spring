import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./App.scss";

export default function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage] = useState(3);
  const [first] = useState([
    {
      id: 1,
      poster: "https://hygraph.com/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2F0vFmcDaCRqmFBeQXOigH&w=640&q=75",
      title: "What is Digital Customer Experience?",
      desc: "In this post, we take a look at digital customer exeperience and the role that DXPs play in building engaging digital customer experiences.",
      avatar: "https://media.graphassets.com/JrkGuQ4oQB6Ke5lqa72h",
      date: "Mar 16, 2022",
    },
    {
      id: 2,
      poster: "https://media.graphassets.com/s68KlRI6QXu1Rgt9BfNF",
      title: "What is Digital Customer Experience?",
      desc: "In this post, we take a look at digital customer exeperience and the role that DXPs play in building engaging digital customer experiences.",
      avatar: "https://media.graphassets.com/JrkGuQ4oQB6Ke5lqa72h",
      date: "Mar 16, 2022",
    },
    {
      id: 3,
      poster: "https://media.graphassets.com/GXCgTZPQNYMHS4NGSrHQ",
      title: "What is Digital Customer Experience?",
      desc: "In this post, we take a look at digital customer exeperience and the role that DXPs play in building engaging digital customer experiences.",
      avatar: "https://media.graphassets.com/JrkGuQ4oQB6Ke5lqa72h",
      date: "Mar 16, 2022",
    },
    {
      id: 4,
      poster: "https://media.graphassets.com/dIkmJCGTrWB2rbsYn12G",
      title: "What is Digital Customer Experience?",
      desc: "In this post, we take a look at digital customer exeperience and the role that DXPs play in building engaging digital customer experiences.",
      avatar: "https://media.graphassets.com/JrkGuQ4oQB6Ke5lqa72h",
      date: "Mar 16, 2022",
    },
    {
      id: 5,
      poster: "https://media.graphassets.com/USNeGEtwRMifbjgZoefx",
      title: "What is Digital Customer Experience?",
      desc: "In this post, we take a look at digital customer exeperience and the role that DXPs play in building engaging digital customer experiences.",
      avatar: "https://media.graphassets.com/JrkGuQ4oQB6Ke5lqa72h",
      date: "Mar 16, 2022",
    },
    {
      id: 6,
      poster: "https://media.graphassets.com/0iCIAUOpTYeDQzv3QDhK",
      title: "What is Digital Customer Experience?",
      desc: "In this post, we take a look at digital customer exeperience and the role that DXPs play in building engaging digital customer experiences.",
      avatar: "https://media.graphassets.com/JrkGuQ4oQB6Ke5lqa72h",
      date: "Mar 16, 2022",
    },
    {
      id: 7,
      poster: "https://media.graphassets.com/GXCgTZPQNYMHS4NGSrHQ",
      title: "What is Digital Customer Experience?",
      desc: "In this post, we take a look at digital customer exeperience and the role that DXPs play in building engaging digital customer experiences.",
      avatar: "https://media.graphassets.com/JrkGuQ4oQB6Ke5lqa72h",
      date: "Mar 16, 2022",
    },
    {
        id: 8,
        poster: "https://media.graphassets.com/dIkmJCGTrWB2rbsYn12G",
        title: "What is Digital Customer Experience?",
        desc: "In this post, we take a look at digital customer exeperience and the role that DXPs play in building engaging digital customer experiences.",
        avatar: "https://media.graphassets.com/JrkGuQ4oQB6Ke5lqa72h",
        date: "Mar 16, 2022",
      },
  ]);
  
  useEffect(() => {
      setData(first);
  }, []);

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  return (
    <div className="App">
      <div className="App__Quotes">
        {data.slice((page - 1) * perPage, page * perPage).map((elem) => (
          <div className="App__Quptes__content" key={elem.id}>
            <img src={elem.poster} alt="" />
            <h2>{elem.title}</h2>
            <p>{elem.desc}</p>
            <div className="App__Quotes__author">
                <img src={elem.avatar} alt="avatar" />
                <p>{elem.date}</p>
                <a href="#">Read Post</a>
            </div>
          </div>
        ))}
      </div>
      <ReactPaginate
        breakLabel={<i className="bi bi-three-dots"></i>}
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={Math.ceil(first.length / perPage)}
        previousLabel="Prev"
        renderOnZeroPageCount={null}
        className="App__navigation"
        activeClassName="active"
      />
    </div>
  );
}
