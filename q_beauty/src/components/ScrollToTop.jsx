// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return undefined;
    }

    const targetId = decodeURIComponent(hash.replace(/^#/, ""));

    const scrollToHashTarget = () => {
      const target = document.getElementById(targetId);
      if (!target) {
        return false;
      }

      target.scrollIntoView({ behavior: "auto", block: "start" });
      return true;
    };

    if (scrollToHashTarget()) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      scrollToHashTarget();
    }, 180);

    const rafId = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        scrollToHashTarget();
      });
    });

    return () => {
      window.clearTimeout(timeoutId);
      window.cancelAnimationFrame(rafId);
    };
  }, [pathname, hash]);

  return null;
}
