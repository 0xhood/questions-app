import { Router } from "express";
import homeControllers from "./home.controller";


const homeRouter = Router();

homeRouter
	.route("/")
	.get(
		homeControllers.homeController
	);

export default homeRouter;
