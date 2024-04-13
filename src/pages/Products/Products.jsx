import React, { useState, useEffect } from "react";
import axios from "axios";
import trancate from "../../helper/trancate";
import { Link } from "react-router-dom";
import "./Products.scss";

export default function Products() {
  const [cards, setCards] = useState([]);
  console.log(cards);
  useEffect(() => {
    axios(import.meta.env.VITE_DB_URL).then((res) => setCards(res.data));
  }, []);

  return (
    <div className="Products">
      <div className="Products__poster"></div>
      <div className="Products__wraper">
        {cards.map((elem) => {
          return (
            <Link key={elem.id} to={`${elem.id}`}>
              <img src={elem.image} />
              <div className="Products__info">
                <h2>{elem.name}</h2>
                <span>{elem.price}</span>
                <p>{trancate(elem.info, 50)}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
