
// log specific events happening.
export const event = ({ action, params }) => {
    window.fbq('track', action, params)
}