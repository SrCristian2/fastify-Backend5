import categoryCtrl from "../controllers/Category.controller.js";
import { verifyToken } from "../middlewares/auth.js";
import { upload } from "../middlewares/imgUpload.js";
import { categorySchema } from "../Schemas/category.Schema.js";

const middleware = (req, reply, done) => {
  verifyToken(req, reply, done);
};

export const categoryRoutes = (fastify, opts, done) => {
  fastify.get("/", categoryCtrl.listAll);
  fastify.get("/:id", categoryCtrl.listById);
  fastify.post(
    "/",
    { schema: categorySchema, preValidation: [middleware, upload.single("img")] },
    categoryCtrl.create
  );
  fastify.delete("/:id", { preHandler: [middleware] }, categoryCtrl.delete);
  fastify.put(
    "/:id",
    { preHandler: [middleware, upload.single("img")] },
    categoryCtrl.update
  );
  done();
};
