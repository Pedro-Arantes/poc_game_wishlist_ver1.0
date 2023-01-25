import { Router } from "express";
import gamesRouter from "./gamesRouter";
import usersRouter from "./usersRouter";

const serverRouter : Router = Router();

serverRouter.use(gamesRouter);
serverRouter.use(usersRouter);

export default serverRouter;