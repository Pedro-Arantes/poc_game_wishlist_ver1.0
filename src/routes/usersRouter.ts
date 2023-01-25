import { Router } from "express";
import { getUsers, postUser } from "../controllers/usersController.js";
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js";
import { userSchema } from "../models/insertUserModel.js";


const usersRouter : Router = Router();

usersRouter.post("/registration",validateSchema(userSchema),postUser)
usersRouter.get("/user",getUsers)

export default usersRouter;