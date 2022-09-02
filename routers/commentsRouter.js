import Router from "express";

import commentsController from "../controllers/commentsController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const commentsRouter = new Router();

commentsRouter.get('/comments', commentsController.getAll);
commentsRouter.get('/comments/:id', commentsController.getOne);
commentsRouter.post('/comments', authMiddleware, commentsController.post);
commentsRouter.delete('/comments/:id', authMiddleware, commentsController.delete);

export default commentsRouter;