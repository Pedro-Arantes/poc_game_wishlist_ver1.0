import { Request,Response } from "express";
import { User } from "../protocols/User";
import { insertUser, selectUsers } from "../repository/usersRepository.js";
import { haveUser } from "../services/userService.js";

export async function getUsers(req:Request,res:Response){

    try {
        const result = await selectUsers()
        res.status(200).send(result)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }

}

export async function postUser(req:Request,res:Response){

    const user : User= req.body 
    try {
        const err = await haveUser(user)
        if (err) {
            throw { type: "user_already_inserted",
            message: `user ${user.email} already on database!`}
        }
        const result = await insertUser(user)
        res.status(201).send("User Created")
    } catch (error ) {
        if (error.type === "user_already_inserted") {
            res.sendStatus(409)
        }else{
            console.log(error)
            res.sendStatus(500)
        }
        
    }
}