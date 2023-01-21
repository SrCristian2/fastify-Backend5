export const facturaSchema = {
  body: {
    type: "object",
    required: ["product", "quantity"],
    properties: {
      product: {
        type:"string"
      },
      quantity: {
        type: "number",
        minimum: 1,
      },
    },
  },
};
