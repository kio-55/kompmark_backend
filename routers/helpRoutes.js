import Router from "express";

import HelpController from "../controllers/helpController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const helpRouter = new Router();

helpRouter.get('/help', authMiddleware, HelpController.getAll);
helpRouter.post('/help', HelpController.post);
helpRouter.delete('/help/:id', authMiddleware, HelpController.delete);

export default helpRouter;