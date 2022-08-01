// log specific events happening.
export const event = ({ action, params }) => {
  window.dataLayer.push({ event: "new_subscriber", params: params });
};
