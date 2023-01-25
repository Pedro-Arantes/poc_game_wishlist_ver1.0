import { Request,Response } from "express";
import { GameInsert, GamePut } from "../protocols/Game.js";
import { deleteGame, insertGames, selectFilterGames, selectGames, updateGame } from "../repository/gamesRepository.js";
import { haveGame } from "../services/gamesService.js";

export async function getGames(req:Request,res:Response){


    try {

        const result = await selectGames()
        res.status(200).send(result.rows)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

export async function getPlatformGames(req:Request,res:Response){
    const {platform } = req.params

    try {

        const result = await selectFilterGames(platform)
        res.status(200).send(result.rows)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

export async function postGames(req:Request,res:Response){

    const game : GameInsert = req.body 
    try {
        const err = await haveGame(game)
        if (err) {
            throw { type: "game_already_inserted",
            message: `game ${game.name} already on database!`}
        }
        const result = await insertGames(game)
        res.status(201).send("Game Inserted")
    } catch (error ) {
        if (error.type === "game_already_inserted") {
            res.sendStatus(409)
        }else{
            console.log(error)
            res.sendStatus(500)
        }
        
    }
}

export async function putGame(req:Request,res:Response){

    const game : GamePut = req.body
    const {game_id }  = req.headers
    const id : number = Number(game_id)
    try {

        const result = await updateGame(game,id)
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

export async function delGame(req:Request,res:Response){

    const {game_id }  = req.params 
    const id : number = Number(game_id)
    try {

        const result = await deleteGame(id)
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}