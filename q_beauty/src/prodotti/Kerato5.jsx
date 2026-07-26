import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { QB_SHOP_URLS } from "../shopLinks";

function Kerato5() {
  return (
    <main className="product-page">
      <h1 className="product-title">KERATO5</h1>

      <div className="product-card">
        <div className="product-image">
          <img
            src="https://cdn.qbeautyshop.it/kerato5/kerato5-1.jpg"
            alt="KERATO5 Q•BEAUTY"
          />
        </div>

        <div className="product-details">
          <p>
            <strong>KERATO5</strong> e il trattamento intensivo Q•BEAUTY pensato
            per le zone piu difficili del piede, ideale quando vuoi lavorare su
            callosita, ispessimenti e pelle secca con un supporto mirato sia in
            cabina sia a casa.
          </p>

          <ul>
            <li>Trattamento intensivo 5 azioni in 1.</li>
            <li>Aiuta a lavorare le aree ispessite e le callosita.</li>
            <li>Perfetto come supporto professionale e domiciliare.</li>
            <li>Si inserisce nel protocollo pedicure Q•BEAUTY.</li>
          </ul>

          <p>
            Pensato per completare il rituale professionale con una proposta
            premium, facilmente rivendibile anche alla cliente finale.
          </p>

          <div style={{ marginTop: "1.5rem" }}>
            <a href={QB_SHOP_URLS.kerato5} className="cta-button">
              Acquista sullo shop
            </a>
          </div>

          <Link
            to="/home"
            className="cta-button"
            style={{ marginTop: "1.5rem", display: "inline-block" }}
          >
            ← Torna ai Prodotti
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Kerato5;
