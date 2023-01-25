import { NextFunction, Request,Response } from "express";
import Joi, { ValidationResult } from "joi";
import { AllPartial } from "../protocols/All.js";

export  const validateSchema = (schema : Joi.ObjectSchema) => {
	return (req:Request, res:Response, next:NextFunction) => {
        const body : AllPartial= req.body
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

