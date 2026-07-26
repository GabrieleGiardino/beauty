import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import App from "./App";              // Hero iniziale con bottone "Scopri i nostri prodotti"
import HomePage from "./Home";        // Pagina con Fondatrice, Prodotti, Set, Contatti, ecc
import Landing from "./Landing";      // Landing rivenditori (DIVENTA RIVENDITORE Q•BEAUTY)

import Articolo1 from "./articoli/Articolo1";
import Kerato5 from "./prodotti/Kerato5";
import Siero from "./prodotti/Siero";
import Olio from "./prodotti/Olio";
import Spray from "./prodotti/Spray";
import SetPage from "./Set";
import ScrollToTop from "./components/ScrollToTop";
import CookieBanner from "./components/CookieBanner";
import PrivacyPolicy from "./PrivacyPolicy";

import "./index.css";
import "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Scroll automatico in alto al cambio pagina */}
      <ScrollToTop />
      {/* Banner cookie globale */}
      <CookieBanner />

      <Routes>
        {/* Homepage principale (hero con CTA "Scopri i nostri prodotti") */}
        <Route path="/" element={<App />} />

        {/* Pagina interna con fondatrice, prodotti, set, instagram, form, ecc. */}
        <Route path="/home" element={<HomePage />} />

        {/* Redirect da /Home (maiuscolo) a /home (minuscolo) */}
        <Route path="/Home" element={<Navigate to="/home" replace />} />

        {/* Landing rivenditori: qbeauty.it/rivenditori */}
        <Route path="/rivenditori" element={<Landing />} />

        {/* Schede prodotto singolo */}
        <Route path="/prodotti/Kerato5" element={<Kerato5 />} />
        <Route path="/prodotti/Siero" element={<Siero />} />
        <Route path="/prodotti/Olio" element={<Olio />} />
        <Route path="/prodotti/Spray" element={<Spray />} />

        {/* Articolo, set, privacy */}
        <Route path="/articoli" element={<Articolo1 />} />
        <Route path="/set" element={<SetPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        {/* Catch-all: qualsiasi percorso non riconosciuto → torna alla home principale */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
