import userCtrl from "../controllers/user.controller.js";
import { userSchema } from "../Schemas/userSchema.js";

export const userRoutes = (fastify, opts, done) => {
  fastify.post("/register", { schema: userSchema }, userCtrl.register);
  fastify.post("/login", userCtrl.login);
  done();
};
