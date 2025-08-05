import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import './App.css';
import ContactForm from './components/ContactForm';

function HomePage() {
  const [loaded, setLoaded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home">
      <main className="App">
        {/* Fondatrice */}
        <section className={`founder ${loaded ? 'visible' : ''}`}>
          <h2>La Fondatrice</h2>
          <div
            className="founder-photo-container"
            onClick={() => setModalOpen(true)}
          >
            <img
              src="/founder3.jpg"
              alt="La fondatrice"
              className="founder-photo"
            />
          </div>
        </section>

        {/* Modale descrizione fondatrice */}
        {modalOpen && (
          <div className="modal-overlay" onClick={() => setModalOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img src="/founder3.jpg" alt="La fondatrice" className="modal-background" />
              <div className="modal-text">
                <h3>Chi sono</h3>
                <p>
                  Sono <strong>Elena Santucci</strong>, onicotecnica ed estetista dal 2013, Nail Educator dal 2020 con più di mille corsiste formate insieme alla NAE Academy.
                  Nonostante le mani siano la mia più grande passione, tutto ciò che riguarda la cura del piede è da sempre stato parte fondamentale della mia carriera.
                  Per questo motivo dopo anni di lavoro sul campo e mesi di ricerche nasce Q.Beauty, una linea dedicata alla pedicure professionale qualitativamente alta ed esteticamente d’impatto, per portare il trattamento Pedicure ad un altro livello.
                </p>
                <button onClick={() => setModalOpen(false)}>Chiudi</button>
              </div>
            </div>
          </div>
        )}

        {/* Prodotti */}
        <section className={`gallery ${loaded ? 'visible' : ''}`} id="prodotti">
          <h2>Prodotti</h2>
          <div className="products">
            <Link to="/prodotti/Spray">
              <img src="/spray1.jpg" alt="Spray Igienizzante" />
            </Link>
            <Link to="/prodotti/Olio">
              <img src="/burro_emoliente.jpg" alt="Burro Emolliente" />
            </Link>
            <Link to="/prodotti/Siero">
              <img src="/crema_piedi.jpg" alt="Crema Piedi" />
            </Link>
          </div>
        </section>

        {/* Set */}
        <section className="set-section">
          <h2>Set</h2>
          <p>Scopri il nostro set esclusivo per un trattamento completo Q•BEAUTY.</p>
          <Link to="/set">
            <img src="/beauty_set.png" alt="Set QBeauty" className="set-image" />
          </Link>
        </section>

        {/* Contatti Instagram */}
        <section className="contact">
          <h2>Contatti</h2>
          <p>Per collaborazioni, scrivici su Instagram</p>
          <a
            href="https://www.instagram.com/q.beauty_pedicurexperience/"
            target="_blank"
            rel="noopener noreferrer"
            className="insta-btn"
          >
            <FaInstagram style={{ marginRight: '8px' }} />
            Segui su Instagram
          </a>
        </section>

        {/* Form di contatto */}
        <section className={`contact-section ${loaded ? 'visible' : ''}`}>
          <div className="form-card">
            <ContactForm />
          </div>
        </section>

        {/* Footer (inserisci qui il tuo componente/footer futuro) */}
        {/* <footer className="footer">Contenuto del footer...</footer> */}
      </main>
    </div>
  );
}

export default HomePage;
