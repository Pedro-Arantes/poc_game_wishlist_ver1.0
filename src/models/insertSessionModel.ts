import joi from "joi";

export const  sessionSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
})