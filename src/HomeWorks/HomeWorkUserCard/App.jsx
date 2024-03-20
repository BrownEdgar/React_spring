import "./App.scss";

export default function App() {
  return (
    <div className="App">
      <div className="App__card">
        <img
          src="https://images.unsplash.com/photo-1707909820111-59a53de32e0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D"
          alt="Profile image"
        />
        <span>
          <i className="bi bi-headphones"></i>
          <strong>Focusing</strong>
        </span>
        <div className="App__info">
          <h2>Jane Smith</h2>
          <p>
            Full stack maker & UI/UX Designer,love hip hop music,Author of
            Building UI
          </p>
          <ul>
            <li>
              <i className="bi bi-people-fill"></i>MerakiTeam
            </li>
            <li>
              <i className="bi bi-geo-alt-fill"></i>California
            </li>
            <li>
              <i className="bi bi-envelope-fill"></i>smith@email.com
            </li>
          </ul>
        </div>
        <div className="App__contact">
          <ul>
            <li>
              <i className="bi bi-facebook"></i>
            </li>
            <li>
              <i className="bi bi-instagram"></i>
            </li>
            <li>
              <i className="bi bi-twitter"></i>
            </li>
            <li>
              <i className="bi bi-youtube"></i>
            </li>
            <li>
              <i className="bi bi-google"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
