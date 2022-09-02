import Router from "express";

import postController from "../controllers/postController.js";
import { postCreateValidation } from "../middleware/validations/postValidations.js";
import handleValidationErrors from "../middleware/validations/handleValidationErrors.js";
import authMiddleware from "../middleware/authMiddleware.js";

const postsRouter = new Router();

postsRouter.get("/posts", postController.getAll);
postsRouter.get("/posts/:id", postController.getOne);
postsRouter.get("/posts/last/:start", postController.getLast);
postsRouter.get("/posts-count", postController.getAllCount);

postsRouter.post(
  "/posts",
  authMiddleware,
  postCreateValidation,
  handleValidationErrors,
  postController.post
);

postsRouter.patch("/posts", authMiddleware, postController.put);

postsRouter.delete("/posts/:id", authMiddleware, postController.delete);

export default postsRouter;
