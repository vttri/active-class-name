// log specific events happening.
export const event = ({ action, params={} }) => {
  window.dataLayer.push({ event: "submit_lead_triggers", params });
};
