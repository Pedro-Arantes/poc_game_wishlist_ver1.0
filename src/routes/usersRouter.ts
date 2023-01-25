import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchemaMiddleware";
import { userSchema } from "../models/insertUserModel";


const usersRouter : Router = Router();

usersRouter.post("/games",validateSchema(userSchema),/*postUser*/)
usersRouter.get("/games",/*getUsers*/)

export default usersRouter;