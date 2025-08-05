// src/Set.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Stili globali

function SetPage() {
  return (
    <div className="product-page">
      <h1 className="product-title">Set Q•BEAUTY</h1>

      <div className="product-card">
        <div className="product-image">
          <img src="/beauty_set.png" alt="Set completo" />
        </div>

        <div className="product-details">
          <p>
            Il nostro set esclusivo Q•BEAUTY include:
          </p>
          <ul>
            <li>Spray Igienizzante</li>
            <li>Burro Emolliente</li>
            <li>Crema Piedi Idratante</li>
          </ul>
          <p>
            Perfetto per un trattamento professionale completo a casa o in cabina.
          </p>

          <Link to="/home" className="cta-button" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
            ← Torna ai Prodotti
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SetPage;
