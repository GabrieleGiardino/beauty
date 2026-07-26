const MEASUREMENT_ID = "G-SY0106HLCD";
const CONSENT_KEY = "q_consent";
export const CONSENT_EVENT = "q-consent-changed";

let loadPromise = null;

function hasWindow() {
  return typeof window !== "undefined";
}

export function hasAnalyticsConsent() {
  if (!hasWindow()) return false;

  try {
    return window.sessionStorage.getItem(CONSENT_KEY) === "accepted";
  } catch {
    return false;
  }
}

function updateConsent(status) {
  if (!hasWindow() || !window.gtag) return;

  const granted = status === "accepted";
  window.gtag("consent", "update", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: granted ? "granted" : "denied",
  });
}

export function applyAnalyticsConsent(status) {
  updateConsent(status);
}

function ensureGtagStub() {
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      window.dataLayer.push(arguments);
    };
}

function loadAnalyticsScript() {
  if (loadPromise) return loadPromise;

  loadPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector(
      `script[data-ga-measurement-id="${MEASUREMENT_ID}"]`,
    );

    if (existing) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    script.dataset.gaMeasurementId = MEASUREMENT_ID;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Google Analytics"));
    document.head.appendChild(script);
  });

  return loadPromise;
}

export async function ensureAnalytics() {
  if (!hasWindow() || !hasAnalyticsConsent()) {
    updateConsent("rejected");
    return false;
  }

  ensureGtagStub();
  await loadAnalyticsScript();
  updateConsent("accepted");

  if (!window.__qBeautyAnalyticsConfigured) {
    window.gtag("js", new Date());
    window.gtag("config", MEASUREMENT_ID, {
      anonymize_ip: true,
      send_page_view: false,
    });
    window.__qBeautyAnalyticsConfigured = true;
  }

  return true;
}

export async function trackPageView(path) {
  const ready = await ensureAnalytics();
  if (!ready || !window.gtag) return;

  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}
