import { NextFunction, Request,Response } from "express";
import Joi, { ValidationResult } from "joi";
import {  GameInsert} from "../protocols/Game.js";

export  const validateSchema = (schema : Joi.ObjectSchema) => {
	return (req:Request, res:Response, next:NextFunction) => {
        const body : GameInsert = req.body
		const val: ValidationResult = schema.validate(body , { abortEarly: false });
        const {error} = val
		if (error) {
			res.status(422).send(error.details.map((detail) => detail.message));
			console.log(error);
			return;
		}
		next();
	};
};

