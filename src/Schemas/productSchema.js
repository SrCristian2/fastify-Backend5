export const productSchema = {
  body: {
    type: "object",
    required: ["name", "description", "rate", "price", "category"],
    properties: {
      name: {
        type: "string",
        minLength: 1,
      },
      description: {
        type: "string",
        minLength: 1,
      },
      rate: {
        type: "number",
        minimum: 1,
        maximum: 5,
      },
      price: {
        type: "number",
        minimum: 1,
      },
      stock: {
        type: "number",
        default: 0,
      },
      category: {
        type: "string",
      },
    },
  },
};
