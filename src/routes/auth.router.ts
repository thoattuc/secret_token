import express from "express";
import homeController from "../controllers/home.controller";
const authRouter = express.Router();

authRouter.get('/login', homeController.loginPage);
authRouter.get('/register', homeController.registerPage);
export default authRouter;