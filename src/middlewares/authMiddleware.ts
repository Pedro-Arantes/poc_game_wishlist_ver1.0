import { NextFunction, Request,Response } from "express";
import { AllPartial } from "../protocols/All.js";
import { haveToken } from "../services/authService.js";

export async  function hasToken  (req:Request, res:Response, next:NextFunction)  {
	
        const body : AllPartial= req.body
        const {authorization } = req.headers 
        const token = authorization?.replace('Bearer ', '');
       try {
        if (!token) return res.sendStatus(401);
        const result = await haveToken(token)
       } catch (error) {
        //console.log(error)
        if (error  === "Token_Not_Valid") {
            return res.sendStatus(401)
        }else{
            res.sendStatus(500)
        }
       } 
		next();
	
};