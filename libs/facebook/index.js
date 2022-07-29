// log specific events happening.
export const event = ({ action, params = {} }) => {
  fbq("track", "AddToCart", {
    content_name: "Really Fast Running Shoes",
    content_category: "Apparel & Accessories > Shoes",
    content_ids: ["1234"],
    content_type: "product",
    value: 4.99,
    currency: "USD",
  });
};
