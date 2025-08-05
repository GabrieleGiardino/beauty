// src/App.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import './Set';

function App() {
  return (
    <div className="home">
      <main className="App">
        <header className="hero" role="banner">
          <div className="hero-container">
            <img
              src="/last.jpg"
              alt="Q.BEAUTY"
              className="hero-img"
            />
            <div className="cta-overlay">
              <Link to="./Home" className="cta-button">
                Scopri i nostri prodotti →
              </Link>
            </div>
            
            </div>
        </header>
      </main>
    </div>
  );
}

export default App;
