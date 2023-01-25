import { GameInsert } from "../protocols/Game.js";
import {   selectVeryGames} from "../repository/gamesRepository.js";

export async function haveGame(game:GameInsert){

    try {
        const result = await selectVeryGames(game.name)
        if (result.rowCount > 0 ) {
             return true
        }else{
            return false 
        }      
    } catch (error) {
        console.log(error)
        return true
    }
}