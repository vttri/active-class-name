// log specific events happening.
export const event = ({ action, params = {} }) => {
    window.fbq('init','389979976455254')
  window.fbq('track', "SubmitApplication");
};
