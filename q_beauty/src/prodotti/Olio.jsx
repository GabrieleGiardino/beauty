import React from "react";
import "../App.css"; 
import burroImage from "../../public/burro_emoliente.jpg"; 

function ProdottoOlio() {
  return (
    <main className="product-page">
      <h1 className="product-title">BURRO EMOLLIENTE LEVIGANTE</h1>

      <div className="product-card">
        <div className="product-image">
          <img src={burroImage} alt="Burro Emolliente" />
          <img src="/IMG_5514.JPG" alt="Burro Emolliente Q.BEAUTY" style={{ marginTop: '1rem', borderRadius: '10px', maxWidth: '100%' }} />
        </div>

        <div className="product-details">
          <p>
            Il secondo prodotto della linea <strong>Q.BEAUTY</strong> è il
            burro emolliente levigante. Un prodotto amatissimo per le sue
            proprietà emollienti, idratanti e leviganti.
          </p>

          <ul>
            <li><strong>BURRO DI KARITÈ e CACAO:</strong> Emollienti e nutrienti che proteggono e idratano</li>
            <li><strong>CERA CARNAUBA:</strong> Ammorbidisce la pelle secca e ruvida</li>
            <li><strong>OLIO DI CAMELINA:</strong> Antiossidante, ricco di Vitamina E</li>
            <li><strong>OLIO DI MANDORLE DOLCI e RICINO:</strong> Idratanti e protettivi</li>
            <li><strong>OLIO DI VASELINA:</strong> Lubrificante e protettivo</li>
            <li><strong>VITAMINA E:</strong> Potente antiossidante</li>
            <li><strong>PROFUMO:</strong> Dolce, floreale, avvolgente</li>
          </ul>

          <p>
            <strong>Modalità d’uso:</strong> Applicare dopo la levigatura degli ispessimenti.
            Usare una piccola quantità su zone secche, anche con strumenti professionali.
          </p>

          <ul>
            <li> Made in Italy 🇮🇹</li>
            <li> Cruelty Free 🐰 </li>
            <li>  Vegan 🌿 </li>
            <li> 76% ingredienti di origine naturale 🌱</li>
          </ul>
        </div>
      </div>

      <a href="/Home" className="cta-button" style={{ display: "inline-block", marginTop: "2rem" }}>
        ← Torna alla Home
      </a>
    </main>
  );
}

export default ProdottoOlio;
