import React, { useEffect, useState } from "react";
import "./SingleCards.scss";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function SingleCards() {
  const { id } = useParams();
  const [cards, setCards] = useState({});
  const [otherCards, setOtherCards] = useState([]);

  useEffect(() => {
    axios(import.meta.env.VITE_DB_URL + `/${id}`).then((res) =>
      setCards(res.data)
    );
  }, [id]);
  useEffect(() => {
    axios(import.meta.env.VITE_DB_URL + "?_sort=claps", {
      params: {
        _limit: 3,
      },
    }).then((res) => setOtherCards(res.data.slice(-6)));
  }, []);

  const handleClaps = () => {
    const data = {
      claps: (cards.claps || 0) + 1,
    };
    axios
      .patch(import.meta.env.VITE_DB_URL + `/${id}`, data)
      .then((res) => setCards(res.data));
  };
  return (
    <div className="SingleCards">
      <div className="SingleCards__Element">
        <img src={cards?.image} />
        <div className="SingleCards__Element__Info">
          <h1>{cards?.name}</h1>
          <span>{cards?.price}</span>
          <p>{cards?.info}</p>
          <div>
            <div className="SingleCards__Element__Claps">
              <button onClick={handleClaps}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  aria-label="clap"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.37.83L12 3.28l.63-2.45h-1.26zM15.42 1.84l-1.18-.39-.34 2.5 1.52-2.1zM9.76 1.45l-1.19.4 1.53 2.1-.34-2.5zM20.25 11.84l-2.5-4.4a1.42 1.42 0 0 0-.93-.64.96.96 0 0 0-.75.18c-.25.19-.4.42-.45.7l.05.05 2.35 4.13c1.62 2.95 1.1 5.78-1.52 8.4l-.46.41c1-.13 1.93-.6 2.78-1.45 2.7-2.7 2.51-5.59 1.43-7.38zM12.07 9.01c-.13-.69.08-1.3.57-1.77l-2.06-2.07a1.12 1.12 0 0 0-1.56 0c-.15.15-.22.34-.27.53L12.07 9z"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.74 8.3a1.13 1.13 0 0 0-.73-.5.67.67 0 0 0-.53.13c-.15.12-.59.46-.2 1.3l1.18 2.5a.45.45 0 0 1-.23.76.44.44 0 0 1-.48-.25L7.6 6.11a.82.82 0 1 0-1.15 1.15l3.64 3.64a.45.45 0 1 1-.63.63L5.83 7.9 4.8 6.86a.82.82 0 0 0-1.33.9c.04.1.1.18.18.26l1.02 1.03 3.65 3.64a.44.44 0 0 1-.15.73.44.44 0 0 1-.48-.1L4.05 9.68a.82.82 0 0 0-1.4.57.81.81 0 0 0 .24.58l1.53 1.54 2.3 2.28a.45.45 0 0 1-.64.63L3.8 13a.81.81 0 0 0-1.39.57c0 .22.09.43.24.58l4.4 4.4c2.8 2.8 5.5 4.12 8.68.94 2.27-2.28 2.71-4.6 1.34-7.1l-2.32-4.08z"
                  ></path>
                </svg>
              </button>
              <p>{cards?.claps}</p>
            </div>
            <div className="SingleCards__Element__Buy">
              <button>Buy</button>
            </div>
          </div>
        </div>
      </div>
      <div className="SingleCards__options">
        {otherCards?.map((elem) => {
          return (
            <div key={elem.id}>
              <Link to={`/products/${elem.id}`}>
                <img src={elem?.image} />
              </Link>
              <h2>{elem?.name}</h2>
              <span>{elem?.price}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
