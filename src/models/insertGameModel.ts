import joi from "joi";

export const gameSchema = joi.object({
    name: joi.string().required(),
    platform: joi.string().required(),
    genre: joi.string().required(),
});