import React, { useState } from 'react'
import "./Blog.scss"
import ReactPaginate from "react-paginate"

export default function Blog() {

  const [base] = useState([
    {
      id: 1,
      image:"https://thumb.mp-farm.com/98725414/preview.jpg",
      title:"Vue.js vs React - How to choose the Right framework",
      body: "In this post, we take a look at digital customer exeperie",
      ava:"https://cdn.openart.ai/stable_diffusion/18d45fc8e03d0f93cb1b170c810720b55d1822c7_2000x2000.webp",
      date: "Mar 16, 2022"
    },
    {
      id: 2,
      image:"https://thumb.mp-farm.com/98725414/preview.jpg",
      title:"What is Digital Customer Experience?",
      body: "In this blog, we are going to compare two of most popular JavaScript frameworks: React and Vue. We will find out if Vue.js is better than ",
      ava:"https://cdn.openart.ai/stable_diffusion/18d45fc8e03d0f93cb1b170c810720b55d1822c7_2000x2000.webp",
      date: "Mar 17, 2022"
    },
    {
      id: 3,
      image:"https://thumb.mp-farm.com/98725414/preview.jpg",
      title:"Vue.js vs React - How to choose the Right framework",
      body: "In this blog, we are going to compare two of most popular JavaScript frameworks: React and Vue. We will find out if Vue.js is better than ",
      ava:"https://cdn.openart.ai/stable_diffusion/18d45fc8e03d0f93cb1b170c810720b55d1822c7_2000x2000.webp",
      date: "Mar 18, 2022"
    },
    {
      id: 4,
      image:"https://thumb.mp-farm.com/98725414/preview.jpg",
      title:"Vue.js vs React - How to choose the Right framework",
      body: "In this blog, we are going to compare two of most popular JavaScript frameworks: React and Vue. We will find out if Vue.js is better than ",
      ava:"https://cdn.openart.ai/stable_diffusion/18d45fc8e03d0f93cb1b170c810720b55d1822c7_2000x2000.webp",
      date: "Mar 19, 2022"
    },
    {
      id: 5,
      image:"https://thumb.mp-farm.com/98725414/preview.jpg",
      title:"Vue.js vs React - How to choose the Right framework",
      body: "In this blog, we are going to compare two of most popular JavaScript frameworks: React and Vue. We will find out if Vue.js is better than ",
      ava:"https://cdn.openart.ai/stable_diffusion/18d45fc8e03d0f93cb1b170c810720b55d1822c7_2000x2000.webp",
      date: "Mar 20, 2022"
    },
    {
      id: 6,
      image:"https://thumb.mp-farm.com/98725414/preview.jpg",
      title:"Vue.js vs React - How to choose the Right framework",
      body: "In this blog, we are going to compare two of most popular JavaScript frameworks: React and Vue. We will find out if Vue.js is better than ",
      ava:"https://cdn.openart.ai/stable_diffusion/18d45fc8e03d0f93cb1b170c810720b55d1822c7_2000x2000.webp",
      date: "Mar 21, 2022"
    },
    {
      id: 7,
      image:"https://thumb.mp-farm.com/98725414/preview.jpg",
      title:"Vue.js vs React - How to choose the Right framework",
      body: "In this blog, we are going to compare two of most popular JavaScript frameworks: React and Vue. We will find out if Vue.js is better than ",
      ava:"https://cdn.openart.ai/stable_diffusion/18d45fc8e03d0f93cb1b170c810720b55d1822c7_2000x2000.webp",
      date: "Mar 22, 2022"
    },
    {
      id: 8,
      image:"https://thumb.mp-farm.com/98725414/preview.jpg",
      title:"Vue.js vs React - How to choose the Right framework",
      body: "In this blog, we are going to compare two of most popular JavaScript frameworks: React and Vue. We will find out if Vue.js is better than ",
      ava:"https://cdn.openart.ai/stable_diffusion/18d45fc8e03d0f93cb1b170c810720b55d1822c7_2000x2000.webp",
      date: "Mar 23, 2022"
    },
    {
      id: 9,
      image:"https://thumb.mp-farm.com/98725414/preview.jpg",
      title:"Vue.js vs React - How to choose the Right framework",
      body: "In this blog, we are going to compare two of most popular JavaScript frameworks: React and Vue. We will find out if Vue.js is better than ",
      ava:"https://cdn.openart.ai/stable_diffusion/18d45fc8e03d0f93cb1b170c810720b55d1822c7_2000x2000.webp",
      date: "Mar 24, 2022"
    },
  ])
  const [page, setPage] = useState(1)
  const [perPage] = useState(3)
  const current_slice = base.slice(page * perPage - perPage, page * perPage)

  const handleClick = ({selected}) => {
    setPage(selected + 1)
  }

  return (
    <div className="Blog">
      <h1>Blog</h1>
      <div className="Blog__content">
        {current_slice.map((item) => {
          return (
            <div className="Blog__item" key={item.id}>
              <img src={item.image} alt="indian" className='Blog__image'/>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
              <div className="Blog__bio">
                <div className="Blog__user">
                  <img src={item.ava} alt="indian" className='Blog__ava'/>
                  <span>{item.date}</span>
                </div>
                <a href="#">Read Post</a>
              </div>
            </div>
          )
        })}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<i className="bi bi-arrow-right-short"></i>}
        onPageChange={handleClick}
        pageRangeDisplayed={5}
        pageCount={Math.ceil(base.length / perPage)}
        previousLabel={<i className="bi bi-arrow-left-short"></i>}
        className="Blog__paginate"
      />
    </div>
  )
}
