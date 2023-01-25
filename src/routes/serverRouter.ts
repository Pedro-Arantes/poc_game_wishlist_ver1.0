import { Router } from "express";
import gamesRouter from "./gamesRouter.js";
import sessionsRouter from "./sessionsRouter.js";
import usersRouter from "./usersRouter.js";

const serverRouter : Router = Router();

serverRouter.use(gamesRouter);
serverRouter.use(usersRouter);
serverRouter.use(sessionsRouter);

export default serverRouter;