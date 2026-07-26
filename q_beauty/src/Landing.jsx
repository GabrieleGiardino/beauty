import React, { useState } from "react";
import "./Landing.css";
import BlackFridayBanner from "./BlackFridayBanner"; // il file è in src
import { QB_SHOP_URLS } from "./shopLinks";

function Landing() {
  // Linea prodotti per dare credibilità visiva
  const products = [
    {
      name: "Spray Igienizzante",
      desc:
        "Step 1 · Preparazione professionale. Spray igienizzante rapido: percezione immediata di sicurezza e cura. La cliente capisce che non è la 'solita pedicure'.",
      heroImg: "/img/spray1.jpg",
      thumbImg: "/img/spray1.jpg",
    },
    {
      name: "Burro Emolliente",
      desc:
        "Step 2 · Ammorbidisci e mostra il risultato. Ammorbidisce le zone secche e rende visibile il prima/dopo. È il momento wow della seduta.",
      heroImg: "/img/burro_emoliente.jpg",
      thumbImg: "/img/burro_emoliente.jpg",
    },
    {
      name: "Crema Idratante Cheratolitica",
      desc:
        "Step 3 · Mantenimento a casa. Tiene la pelle morbida tra una seduta e l’altra e fidelizza la cliente alla tua cabina.",
      heroImg: "/img/crema_piedi.jpg",
      thumbImg: "/img/crema_piedi.jpg",
    },
    {
      name: "KERATO5",
      desc:
        "Trattamento intensivo 5 azioni in 1. Ideale per callosita, ispessimenti e zone difficili, da usare sia in cabina sia come supporto domiciliare.",
      heroImg: "https://cdn.qbeautyshop.it/kerato5/kerato5-1.jpg",
      thumbImg: "https://cdn.qbeautyshop.it/kerato5/kerato5-1.jpg",
    },
    {
      name: "Set Experience",
      desc:
        "Il kit completo nero/oro. Tutti e 3 i prodotti in un'unica proposta premium, presentabile alla cliente come 'protocollo ufficiale Q•BEAUTY'. Aumenta il ticket medio e ti fa percepire come centro strutturato.",
      heroImg: "/img/beauty_set.png",
      thumbImg: "/img/beauty_set.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const active = products[activeIndex];

  return (
    <>
      {/* LANDING B2B CON LA CARD TELEFONO */}
      <div className="lp-wrapper">
        <div className="lp-phone-frame" id="top">
          {/* BLOCCO HERO COMPATTO (2 colonne) */}
          <section className="lp-hero">
            {/* Riga top: headline + CTA */}
            <div className="lp-top-row">
              <div className="lp-top-left">
                <div className="lp-eyebrow-big">DIVENTA RIVENDITORE Q•BEAUTY</div>
                <div className="lp-headline-sub">
                  Porta il rituale pedicure professionale nel tuo centro
                  e vendi i prodotti ufficiali ai tuoi clienti.
                </div>
              </div>

              {/* CTA: ora porta al form della home */}
              <a className="lp-buy-btn" href="/home#contatti">
                Richiedi listino rivenditori
              </a>
            </div>

            {/* Corpo due colonne come nel layout che ti piaceva */}
            <div className="lp-columns">
              {/* Colonna sinistra: testo + thumbs */}
              <div className="lp-left-col">
                <div className="lp-product-title">{active.name}</div>

                <div className="lp-product-desc">{active.desc}</div>

                <a
                  className="lp-buy-btn"
                  href={
                    active.name === "Spray Igienizzante"
                      ? QB_SHOP_URLS.spray
                      : active.name === "Burro Emolliente"
                        ? QB_SHOP_URLS.burro
                        : active.name === "Crema Idratante Cheratolitica"
                          ? QB_SHOP_URLS.crema
                          : active.name === "KERATO5"
                            ? QB_SHOP_URLS.kerato5
                            : QB_SHOP_URLS.set
                  }
                >
                  Vedi il prodotto nello shop
                </a>

                <div className="lp-thumb-grid">
                  {products.map((p, i) => (
                    <button
                      key={i}
                      className={`lp-thumb ${i === activeIndex ? "active" : ""}`}
                      onClick={() => setActiveIndex(i)}
                    >
                      <img src={p.thumbImg} alt={p.name} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Colonna destra: immagine inclinata */}
              <div className="lp-right-col">
                <img
                  key={active.heroImg}
                  src={active.heroImg}
                  alt={active.name}
                  className="main-product-angled"
                />
              </div>
            </div>
          </section>

          {/* BOX INFO BREVE (vantaggi per il centro) */}
          <section className="lp-info-card">
            <div className="lp-info-header">
              <div className="lp-info-dot" />
              <div>Perché Q•BEAUTY funziona nei centri</div>
            </div>

            <ul className="lp-info-list">
              <li className="lp-info-item">
                <div className="lp-info-title">Margine rivenditore</div>
                <div className="lp-info-text">
                  Ricevi condizioni dedicate ai professionisti. Rivendi i prodotti
                  ufficiali Q•BEAUTY direttamente alla cliente e tieni il margine
                  nel tuo centro.
                </div>
              </li>

              <li className="lp-info-item">
                <div className="lp-info-title">Servizio premium (prezzo più alto)</div>
                <div className="lp-info-text">
                  La pedicure diventa un rituale in 3 step con linea coordinata
                  nero/oro. Puoi alzare il prezzo senza sembrare cara:
                  sembri professionale.
                </div>
              </li>

              <li className="lp-info-item">
                <div className="lp-info-title">Differenza visibile subito</div>
                <div className="lp-info-text">
                  Igienizzazione, ammorbidimento, chiusura nutriente.
                  Foto prima/dopo perfette per le storie. La cliente ti percepisce
                  come “quella che fa il pedicure serio”.
                </div>
              </li>

              <li className="lp-info-item">
                <div className="lp-info-title">Esclusività di zona</div>
                <div className="lp-info-text">
                  Non mettiamo la linea ovunque. Puoi chiedere disponibilità
                  nella tua area e protezione della zona.
                </div>
              </li>
            </ul>

            <div className="lp-final-cta-box">
              Vuoi inserire Q•BEAUTY nel tuo listino e avere i prodotti ufficiali da rivendere?
              Premi “Richiedi listino rivenditori”, scrivici e ti mandiamo prezzi e condizioni.
            </div>
          </section>
        </div>
      </div>

      {/* QUI SOTTO IL BANNER BLACK FRIDAY RIUTILIZZABILE */}
      <BlackFridayBanner />
    </>
  );
}

export default Landing;
