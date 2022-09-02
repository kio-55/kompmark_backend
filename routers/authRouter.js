import Router from "express";
import authController from "../controllers/authController.js";
import { check } from "express-validator";
import roleMeddleware from "../middleware/roleMeddleware.js";
import authMiddleware from "../middleware/authMiddleware.js";

const authRouter = new Router();

authRouter.post('/register', [
    check('username', "Invalid input").notEmpty(),
    check('password', "Invalid password length").isLength({min: 4, max: 16}),
], authController.registration);
authRouter.post('/login', authController.login);
authRouter.get('/me', authMiddleware, authController.whoami);

export default authRouter;