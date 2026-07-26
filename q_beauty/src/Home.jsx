import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import "./App.css";
import ContactForm from "./components/ContactForm";
import SiteNav from "./components/SiteNav";
import { QB_SHOP_URLS } from "./shopLinks";

const heroPoster = "/img/last.jpg";
const heroVideo = "/video/hero-qbeauty.mp4";
const founderImage = "/img/founder3.jpg";
const sprayImage = "/img/spray1.jpg";
const burroImage = "/img/burro_emoliente.jpg";
const cremaImage = "/img/crema_piedi.jpg";
const setImage = "/img/beauty_set.png";
const qbeautyBg = "/img/qbeauty.jpg";

const brandSignals = [
  {
    title: "Nata in cabina",
    text: "Ogni formula risponde a esigenze reali di trattamento, non a una logica puramente estetica.",
  },
  {
    title: "Retail ready",
    text: "Ogni prodotto lavora bene in cabina ma ha anche una forte capacità di rivendita a fine seduta.",
  },
  {
    title: "Identità forte",
    text: "Packaging, rituale e percezione sono pensati per far salire il valore del servizio.",
  },
];

const ritualSteps = [
  {
    step: "01",
    title: "Igienizza e prepara",
    text: "Lo spray apre il trattamento con una sensazione immediata di sicurezza, freschezza e pelle levigata.",
  },
  {
    step: "02",
    title: "Tratta e ammorbidisci",
    text: "Il burro e Kerato5 trasformano le zone critiche in un momento tecnico ad alto impatto visivo.",
  },
  {
    step: "03",
    title: "Chiudi e fidelizza",
    text: "La crema completa il rituale e lascia alla cliente un prodotto da continuare a casa con continuità.",
  },
];

const faqItems = [
  {
    question: "Cos'e Q.BEAUTY e a chi si rivolge?",
    answer:
      "Q.BEAUTY e una linea professionale per pedicure pensata per estetiste, onicotecniche e centri che vogliono alzare la percezione del trattamento in cabina e nella rivendita finale.",
  },
  {
    question: "Quali prodotti compongono il protocollo base Q.BEAUTY?",
    answer:
      "Il protocollo base ruota intorno a Spray Igienizzante, Burro Emolliente e Crema Cheratolitica, con KERATO5 come supporto intensivo per le zone piu difficili del piede.",
  },
  {
    question: "I prodotti Q.BEAUTY sono adatti solo al trattamento in cabina?",
    answer:
      "No. La linea nasce per lavorare bene in cabina ma include anche una forte componente domiciliare e retail, cosi la cliente puo continuare il rituale anche a casa.",
  },
  {
    question: "Dove posso acquistare i prodotti Q.BEAUTY?",
    answer:
      "Ogni presentazione prodotto sul sito rimanda direttamente allo shop ufficiale Q.BEAUTY, dove puoi vedere dettagli, disponibilita e acquisto del singolo articolo o del set completo.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const featuredProducts = [
  {
    id: "01",
    name: "KERATO5",
    subtitle: "Cheratolitico forte 5 azioni in 1",
    href: "/prodotti/Kerato5",
    image: "https://cdn.qbeautyshop.it/kerato5/kerato5-1.jpg",
    alt: "KERATO5",
    description:
      "Gel cheratolitico forte pensato per salone e trattamento domiciliare. Lavora su cuticola, tessuto cheratinizzato, onicofosi, onicolisi e ragadi.",
    accent: "50 ml · Made in Italy · Formula con ingredienti di origine vegetale",
  },
  {
    id: "02",
    name: "Spray Igienizzante",
    subtitle: "Igienizza, deodora, leviga",
    href: "/prodotti/Spray",
    image: sprayImage,
    alt: "Spray Igienizzante",
    description:
      "Prodotto multiuso per piedi e mani: disinfetta, elimina gli odori all’istante, leviga e rinfresca. Perfetto all’apertura del trattamento e prima delle foto finali.",
    accent: "100 ml · Multiuso · 76% ingredienti di origine naturale",
  },
  {
    id: "03",
    name: "Burro Emolliente",
    subtitle: "Idrata, nutre, protegge",
    href: "/prodotti/Olio",
    image: burroImage,
    alt: "Burro Emolliente",
    description:
      "Burro ad alta emollienza che crea una barriera protettiva sull’epidermide, favorendo idratazione, elasticità e lucidatura del tessuto dopo la levigatura.",
    accent: "100 ml · Mani e piedi · Vegan e cruelty free",
  },
  {
    id: "04",
    name: "Crema Cheratolitica",
    subtitle: "Idrata, esfolia, lenisce",
    href: "/prodotti/Siero",
    image: cremaImage,
    alt: "Crema Idratante Cheratolitica",
    description:
      "Crema con 10% di urea per idratazione profonda ed esfoliazione quotidiana. Aiuta a prevenire ispessimenti, secchezza e cattivi odori con una texture premium.",
    accent: "100 ml · +90% ingredienti di origine naturale · Uso domiciliare ideale",
  },
];

function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <SiteNav />

      <section className="landing-hero" aria-label="Q.BEAUTY hero">
        <div className="hero-container">
          <video
            className="hero-media hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={heroPoster}
            aria-hidden="true"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="hero-shade" aria-hidden="true" />
        </div>

        <div className="landing-hero-grid">
          <div
            className="landing-hero-panel reveal-card"
            data-reveal
            style={{ "--reveal-delay": "40ms" }}
          >
            <div className="hero-banner-layout">
              <div className="hero-banner-main">
                <p className="hero-kicker">Q.BEAUTY PROFESSIONAL PEDICURE</p>
                <h1 className="hero-title">
                  La pedicure si trasforma in progetto.
                </h1>
              </div>

              <div className="hero-banner-side">
                <p className="hero-description">
                  Formule professionali, immaginario premium e un rituale studiato
                  per far percepire piu valore in cabina, prima ancora del risultato finale.
                </p>

                <div className="hero-actions">
                  <a href="#prodotti" className="cta-button">
                    Esplora la collezione
                  </a>
                  <Link to="/set" className="hero-secondary-button">
                    Scopri il protocollo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="App app-content">
        <section className="section-shell brand-story" id="brand">
          <div className="section-heading reveal-card" data-reveal>
            <p className="section-eyebrow">IL BRAND</p>
            <h2>Una linea nata sul campo, costruita per distinguersi.</h2>
            <p className="section-lead">
              Q.BEAUTY non e una semplice linea piedi: e un linguaggio visivo,
              un protocollo di lavoro e una proposta retail completa.
            </p>
          </div>

          <div className="brand-story-grid">
            <button
              type="button"
              className="founder-stage-card reveal-card"
              onClick={() => setModalOpen(true)}
              data-reveal
              style={{ "--reveal-delay": "80ms" }}
            >
              <img src={founderImage} alt="Elena Santucci, fondatrice Q.BEAUTY" className="founder-photo" />
              <span className="founder-stage-label">Scopri la fondatrice</span>
            </button>

            <div className="brand-copy-card reveal-card" data-reveal style={{ "--reveal-delay": "180ms" }}>
              <p className="brand-copy">
                Sono{" "}
                <a
                  href="https://www.instagram.com/queenhelene_nails/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-gold-link"
                >
                  Elena Santucci
                </a>
                , onicotecnica ed estetista dal 2013, Nail Educator dal 2020.
                Dopo anni di lavoro in cabina e ricerca sul trattamento professionale
                nasce Q.BEAUTY: una linea ad alto impatto tecnico ed estetico,
                pensata per portare la pedicure a un livello piu alto.
              </p>

              <div className="signal-grid">
                {brandSignals.map((signal, index) => (
                  <article
                    key={signal.title}
                    className="signal-card reveal-card"
                    data-reveal
                    style={{ "--reveal-delay": `${220 + index * 90}ms` }}
                  >
                    <h3>{signal.title}</h3>
                    <p>{signal.text}</p>
                  </article>
                ))}
              </div>

              <button
                type="button"
                className="hero-secondary-button brand-open-btn"
                onClick={() => setModalOpen(true)}
              >
                Leggi la storia completa
              </button>
            </div>
          </div>
        </section>

        {modalOpen && (
          <div className="modal-overlay" onClick={() => setModalOpen(false)}>
            <div className="modal-content" onClick={(event) => event.stopPropagation()}>
              <img src={qbeautyBg} alt="QBeauty sfondo" className="modal-background" />
              <div className="modal-text">
                <h3>Chi sono</h3>
                <p>
                  Sono{" "}
                  <a
                    href="https://www.instagram.com/queenhelene_nails/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-gold-link"
                  >
                    Elena Santucci
                  </a>
                  , onicotecnica ed estetista dal 2013, Nail Educator dal 2020 con
                  piu di mille corsiste formate insieme alla NAE Academy. Nonostante
                  le mani siano la mia piu grande passione, tutto cio che riguarda la
                  cura del piede e sempre stato parte fondamentale della mia carriera.
                  Dopo anni di lavoro sul campo e mesi di ricerca e sviluppo nasce
                  Q.BEAUTY: una linea dedicata alla pedicure professionale,
                  qualitativamente alta ed esteticamente d’impatto.
                </p>
                <button onClick={() => setModalOpen(false)}>Chiudi</button>
              </div>
            </div>
          </div>
        )}

        <section className="section-shell ritual-band">
          <div className="section-heading reveal-card" data-reveal>
            <p className="section-eyebrow">IL RITUALE</p>
            <h2>Tre step, una percezione diversa del trattamento.</h2>
            <p className="section-lead">
              Lo shop parla chiaro: ogni prodotto ha una funzione forte, ma il valore vero
              nasce quando li fai vivere come un protocollo riconoscibile.
            </p>
          </div>

          <div className="ritual-grid">
            {ritualSteps.map((item, index) => (
              <article
                key={item.step}
                className="ritual-card reveal-card"
                data-reveal
                style={{ "--reveal-delay": `${80 + index * 120}ms` }}
              >
                <span className="ritual-index">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell gallery" id="prodotti">
          <div className="section-heading reveal-card" data-reveal>
            <p className="section-eyebrow">COLLEZIONE</p>
            <h2>Descrizioni ufficiali, presentazione premium.</h2>
            <p className="section-lead">
              Ogni card riporta l’anima del prodotto come viene raccontata nello shop
              ufficiale, ma in una veste piu editoriale e tridimensionale.
            </p>
          </div>

          <div className="product-showcase">
            {featuredProducts.map((product, index) => (
              <Link
                key={product.name}
                to={product.href}
                className="product-showcase-card reveal-card"
                data-reveal
                style={{ "--reveal-delay": `${60 + index * 90}ms` }}
                aria-label={`Apri la presentazione di ${product.name}`}
                title={`Apri la presentazione di ${product.name}`}
              >
                <div className="product-showcase-media">
                  <img src={product.image} alt={product.alt} />
                  <span className="product-index-chip">{product.id}</span>
                </div>
                <div className="product-showcase-body">
                  <p className="product-overline">{product.subtitle}</p>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <span className="product-accent">{product.accent}</span>
                  <span className="product-link">Apri presentazione</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="section-shell set-stage">
          <div className="set-stage-grid">
            <div className="set-visual reveal-card" data-reveal style={{ "--reveal-delay": "60ms" }}>
              <Link to="/set" aria-label="Apri la presentazione del Set Experience Q.BEAUTY">
                <img src={setImage} alt="Set Experience Q.BEAUTY" className="set-image" />
              </Link>
            </div>

            <div className="set-copy reveal-card" data-reveal style={{ "--reveal-delay": "170ms" }}>
              <p className="section-eyebrow">SET EXPERIENCE</p>
              <h2>Il protocollo completo in un’unica proposta.</h2>
              <p className="section-lead">
                Nello shop viene descritto in modo semplice: Spray igienizzante,
                Burro emolliente, Crema idratante cheratolitica. Nel sito lo trasformiamo
                in un vero sistema di trattamento.
              </p>

              <div className="set-step-row">
                <span>STEP 1</span>
                <p>Spray Igienizzante per preparare, deodorare e levigare il tessuto.</p>
              </div>
              <div className="set-step-row">
                <span>STEP 2</span>
                <p>Burro Emolliente per nutrire, proteggere e valorizzare il momento wow.</p>
              </div>
              <div className="set-step-row">
                <span>STEP 3</span>
                <p>Crema Cheratolitica per chiudere il rituale e continuare a casa.</p>
              </div>

              <div className="hero-actions">
                <Link to="/set" className="cta-button">
                  Apri il set
                </Link>
                <a href={QB_SHOP_URLS.set} className="hero-secondary-button">
                  Vai allo shop
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell contact-social-shell">
          <article
            id="faq"
            className="social-proof-card seo-faq-card reveal-card"
            data-reveal
            style={{ "--reveal-delay": "60ms" }}
          >
            <p className="section-eyebrow">FAQ SEO</p>
            <h2>Domande frequenti sulla linea Q.BEAUTY.</h2>
            <p className="section-lead">
              Una sezione utile per spiegare meglio il brand alle clienti e, allo stesso
              tempo, dare a Google contenuti piu chiari sul protocollo e sui prodotti.
            </p>

            <div className="faq-list">
              {faqItems.map((item) => (
                <details key={item.question} className="faq-item">
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>

            <a
              href="https://www.instagram.com/q.beauty_pedicurexperience/"
              target="_blank"
              rel="noopener noreferrer"
              className="insta-btn"
            >
              <FaInstagram style={{ marginRight: "8px" }} />
              Segui anche Instagram
            </a>
          </article>

          <section
            id="contatti"
            className="contact-card reveal-card"
            data-reveal
            style={{ "--reveal-delay": "180ms" }}
          >
            <p className="section-eyebrow">CONTATTI</p>
            <h2>Richiedi informazioni o listino.</h2>
            <p className="section-lead">
              Se vuoi entrare nel mondo Q.BEAUTY come cliente, rivenditore o professionista,
              qui ti lasciamo un contatto diretto, chiaro e premium anche nella forma.
            </p>
            <div className="form-card contact-form-shell">
              <ContactForm />
            </div>
          </section>
        </section>

        <footer className="site-footer">
          <p>
            © {new Date().getFullYear()} Tutti i diritti riservati – Realizzato da{" "}
            <a href="https://sortedbros.com" target="_blank" rel="noopener noreferrer">
              Sorted Bros
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}

export default HomePage;
