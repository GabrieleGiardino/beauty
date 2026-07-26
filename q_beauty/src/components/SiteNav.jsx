import React from "react";
import { Link } from "react-router-dom";

function SiteNav({ productMode = false }) {
  const brandHref = productMode ? "/#prodotti" : "/";

  return (
    <header className="site-nav-shell">
      <nav className="site-nav" aria-label="Navigazione principale">
        <a href={brandHref} className="site-nav-brand">
          Q.BEAUTY
        </a>

        <div className="site-nav-links">
          {productMode ? (
            <>
              <a href="/#prodotti" className="site-nav-link">
                Prodotti
              </a>
              <Link to="/set" className="site-nav-link">
                Protocollo
              </Link>
              <a href="/#contatti" className="site-nav-link">
                Contatti
              </a>
              <a href="/#faq" className="site-nav-link">
                FAQ
              </a>
              <a href="/" className="site-nav-link">
                Home
              </a>
            </>
          ) : (
            <>
              <a href="/#brand" className="site-nav-link">
                Brand
              </a>
              <a href="/#prodotti" className="site-nav-link">
                Prodotti
              </a>
              <Link to="/set" className="site-nav-link">
                Protocollo
              </Link>
              <a href="/#faq" className="site-nav-link">
                FAQ
              </a>
              <a href="/#contatti" className="site-nav-link">
                Contatti
              </a>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default SiteNav;
