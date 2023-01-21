export const userSchema = {
    body: {
      type: "object",
      required: ["name", "lastname","email","password"],
      properties: {
        name: {
          type: "string",
          minLength: 1,
        },
        lastname: {
          type: "string",
          minLength: 1,
        },
        email: {
          type:"string",
          format:"email"
        },
        password:{
            type:"string"
        }
      },
    },
  };