import React from "react";
import "./Pagination.scss";

export default function Pagination({ perPage, changePage }) {
  const list = [];
  for (let i = 1; i <= 100 / perPage; i++) {
    list.push(i);
  }
  return (
    <div className="Pagination">
      <ul className="Pagination__list">
        {list.map((item) => {
          return (
            <li
              className="Pagination__item"
              onClick={() => changePage(item)}
              key={item}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
