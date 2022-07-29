// log specific events happening.
export const event = ({ action, params }) => {
  window.ttq.track(action, params);
};
