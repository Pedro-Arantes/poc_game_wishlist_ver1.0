import { NextFunction, Request,Response } from "express";
import { AllPartial } from "../protocols/All.js";

export  const hasToken = () => {
	return (req:Request, res:Response, next:NextFunction) => {
        const body : AllPartial= req.body
        const {authorization } = req.headers 
        const token = authorization?.replace('Bearer ', '');
        if (!token) return res.sendStatus(401);
		next();
	};
};