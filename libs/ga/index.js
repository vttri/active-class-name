// log specific events happening.
export const event = ({ action, params={} }) => {
  window.dataLayer.push({ event: "trigger-google", params });
  // gtag('event', 'trigger-google');
};
