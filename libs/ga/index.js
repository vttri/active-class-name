// log specific events happening.
export const event = ({ action, params }) => {
  window.dataLayer.push({ event: "Lead", params: params });
};
