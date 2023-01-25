import { Router } from "express";
import { delGame, getGames, getPlatformGames, postGames, putGame } from "../controllers/gamesController.js";
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js";
import { gameSchema } from "../models/insertGameModel.js";

const gamesRouter : Router = Router();

gamesRouter.post("/games",validateSchema(gameSchema),postGames)
gamesRouter.get("/games",getGames)
gamesRouter.get("/games/:platform",getPlatformGames)
gamesRouter.put("/games",putGame)
gamesRouter.delete("/games/:game_id",delGame)

export default gamesRouter;