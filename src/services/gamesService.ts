import { Game} from "../protocols/Game.js";
import {   selectVeryGames} from "../repository/gamesRepository.js";

export async function haveGame(game:Game){

    try {
        const result = await selectVeryGames(game.name)
        if (result.length > 0 ) {
            throw "game_already_inserted"
             return true
        }else{
            return false 
        }      
    } catch (error) {
        console.log(error)
        return true
    }
}