/**
 * Google Analytics bootstrap and helpers.
 * GA Measurement ID is loaded from APP_CONFIG.
 * This value is public by design.
 */

(function initAnalytics() {
  if (!window.APP_CONFIG || !window.APP_CONFIG.GA_MEASUREMENT_ID) {
    console.warn("Analytics disabled: GA_MEASUREMENT_ID missing");
    return;
  }

  // Inject GA script dynamically
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${window.APP_CONFIG.GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialize GA
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", window.APP_CONFIG.GA_MEASUREMENT_ID);
})();


/**
 * Track Yes button interactions
 */
function trackYesClick(isMobile, attempts) {
  if (!window.gtag) return;
  
  gtag("event", "yes_clicked", {
    event_category: "valentine",
    event_label: "Yes Button",
    device_type: isMobile ? "mobile" : "desktop",
    value: attempts
  });
}

/**
 * Track No button interactions
 */
function trackNoAttempt(isMobile, attempts) {
  if (!window.gtag) return;
  
  gtag("event", "no_attempt", {
    event_category: "valentine",
    event_label: "No Button Hover",
    device_type: isMobile ? "mobile" : "desktop",
    value: attempts
  });
}

/**
 * Track page state changes
 */
function trackPageState(title) {
  document.title = title;

  if (!window.gtag) return;

  gtag("event", "page_view", {
    page_title: title,
    page_location: window.location.href
  });
}


