import React from "react";
import classNames from "classnames";
import "./Pagination.scss";

export default function Pagineton({ total, perPage, page, changePage }) {
  const list = [];
  for (let i = 1; i < Math.ceil(total / perPage); i++) {
    list.push(i);
  }
  return (
    <div className="Pagineton">
      <ul className="Pagineton__list">
        {list.map((item) => {
          return (
            <li
              className={classNames("Pagineton__item", { 'Pagineton__item-active': item === page })}
              key={item}
            >
              <a
                className="Pagineton__link"
                href="#"
                onClick={() => changePage(item)}
              >
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}