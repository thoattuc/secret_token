import express from "express";
import adminController from "../controllers/admin.controller";
const adminRouter = express.Router();

adminRouter.get('/', adminController.adminPage);
export default adminRouter;