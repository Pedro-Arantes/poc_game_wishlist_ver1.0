import { Router } from "express";
import { delGame, getGames, getPlatformGames, postGames, putGame } from "../controllers/gamesController.js";
import { hasToken } from "../middlewares/authMiddleware.js";
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js";
import { gameSchema } from "../models/insertGameModel.js";

const gamesRouter : Router = Router();

gamesRouter.post("/games",validateSchema(gameSchema),postGames)
gamesRouter.get("/games",getGames)
gamesRouter.get("/games/:platform",getPlatformGames)
gamesRouter.put("/games",hasToken,putGame)
gamesRouter.delete("/games/:game_id",hasToken,delGame)

export default gamesRouter;