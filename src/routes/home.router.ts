import express from "express";
import homeController from "../controllers/home.controller";
const homeRouter = express.Router();

homeRouter.get('/', homeController.homePage);
export default homeRouter;