// src/App.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const lastImage = "/img/last.jpg";

function App() {
  return (
    <div className="home">
      <main className="App">
        <header className="hero" role="banner">
          <div className="hero-container">
            <img
              src={lastImage}
              alt="Q.BEAUTY"
              className="hero-img"
            />

            <div className="visually-hidden">
              <h1>Q.BEAUTY - Your Pedicure Experience</h1>
              <p>
                Linea professionale per pedicure pensata per trattamento,
                rituale e risultato.
              </p>
            </div>

            <div className="cta-overlay">
              <Link to="/home" className="cta-button">
                Scopri i nostri prodotti →
              </Link>
            </div>
          </div>
        </header>
      </main>

      {/* QUI PRIMA C'ERA IL POPUP BLACK FRIDAY
          <BlackFridayModal ... />
      */}
    </div>
  );
}

export default App;
