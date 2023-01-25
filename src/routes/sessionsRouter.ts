import { Router } from "express";
import { getSessions, postSession } from "../controllers/sessionsController.js";
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js";
import { sessionSchema } from "../models/insertSessionModel.js";


const sessionsRouter : Router = Router();

sessionsRouter.post("/login",validateSchema(sessionSchema),postSession)
sessionsRouter.get("/session",getSessions)

export default sessionsRouter;