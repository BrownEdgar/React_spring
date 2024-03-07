import React from 'react'
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <h1>About ship</h1>
      <div className='content'>
       <img src="./public/Reactimages/photo.react.avif" alt="" />
        <div className='info'>
         <p>The first ships used oars or the wind (or both) to make them move.
            From about 4000 BC the Ancient Egyptians were making wooden sail boats. By 1200 BC the Phoenicians and Greeks had begun to make bigger sailing ships which were about 30 metres (100 feet) long and could carry 90–180 tonnes of cargo. The Romans made even bigger ships which could carry up to 1,000 people and 1,000 tonnes of cargo. The 8th century saw the rise of the Vikings, who were famous for their "longships" and which were mainly used for raiding other countries, but also for trading. The longships had flat bottoms so they could move in shallow (not deep) rivers.
          </p>
          <br />
          <p>
            Sailing ships were used for thousands of years, but they were very important from the Age of Discovery to the 19th century. The Chinese admiral Zheng He commanded a fleet of large 'treasure ships' on seven voyages all over Asia up to East-Africa in the early fifteenth century. The most successful and largest fleet in the 17th century was the Dutch fleet (see the Netherlands). For trade and transport the Dutch often used a particular kind of trading ship, called a flute (fluyt in Dutch). Transport of people and cargo on sailing ships became rare in the early 20th century.
          </p>
          <br />
          <ul>
            <li>Niña, Pinta, Santa Maria - Christopher Columbus' ships</li>
            <li>The Mayflower - The ship that carried the Pilgrims to Massachusetts</li>
            <li>Queen Anne's Revenge - The pirate Blackbeard's ship</li>
            <li>HMS Bounty - Captain Bligh's ship. Site of the most famous mutiny of all time</li>
          </ul>
          <button>
            <a href="https://simple.wikipedia.org/wiki/Ship">Read more</a>
          </button>
        </div>
      </div>
    </div>
  )
}
