import Router from "express";

import CertificatesController from "../controllers/certificateController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const certificatesRouter = new Router();

certificatesRouter.get('/certificates', CertificatesController.getAll);
certificatesRouter.post('/certificates', authMiddleware, CertificatesController.post);
certificatesRouter.delete('/certificates/:id', authMiddleware, CertificatesController.delete);

export default certificatesRouter;