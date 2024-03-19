import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Categories.scss";

export default function Categories({ data }) {
  return (
    <div className="Categories">
      <h1 className="Categories__title">Categories</h1>
      <div className="Categories__box">
        {data.map((elem) => {
          return (
            <div className="Categories__item" key={elem.id}>
              <div className="Categories__imageBox">
                <img
                  src={elem.image}
                  alt={elem.title}
                  className="Categories__img"
                />
              </div>
              <div className="Categories__textBox">
                <h2>{elem.title}</h2>
                <p>{elem.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

Categories.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
