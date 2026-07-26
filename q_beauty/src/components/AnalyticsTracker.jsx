import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  CONSENT_EVENT,
  hasAnalyticsConsent,
  trackPageView,
} from "../lib/analytics";

export default function AnalyticsTracker() {
  const location = useLocation();
  const [hasConsent, setHasConsent] = useState(() => hasAnalyticsConsent());

  useEffect(() => {
    const syncConsent = (event) => {
      if (event?.detail === "accepted") {
        setHasConsent(true);
        return;
      }

      setHasConsent(hasAnalyticsConsent());
    };

    window.addEventListener(CONSENT_EVENT, syncConsent);
    return () => window.removeEventListener(CONSENT_EVENT, syncConsent);
  }, []);

  useEffect(() => {
    if (!hasConsent) return;

    const path = `${location.pathname}${location.search}${location.hash}`;
    trackPageView(path);
  }, [hasConsent, location.hash, location.pathname, location.search]);

  return null;
}
