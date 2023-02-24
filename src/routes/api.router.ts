import express from "express";
import userController from "../controllers/user.controller";
const apiRouter = express.Router();

apiRouter.post('/register', userController.register);
apiRouter.post ('/login', userController.login);
export default apiRouter;