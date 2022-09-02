import Router from "express";

import JobsController from "../controllers/jobController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const jobsRouter = new Router();

jobsRouter.get('/jobs', JobsController.getAll);
jobsRouter.post('/jobs', authMiddleware, JobsController.post);
jobsRouter.delete('/jobs/:id', authMiddleware, JobsController.delete);

export default jobsRouter;