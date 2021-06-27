import Joi from 'joi';

export const userSchema = Joi.object({
    name: Joi.string().min(1).required(),
    email: Joi.string().min(1).required(),
    password: Joi.string().alphanum().required(),
});

export const userLoginSchema = Joi.object({
    email: Joi.string().min(1).required(),
    password: Joi.string().alphanum().required(),
});

export const ioSchema = Joi.object({
    value: Joi.number().integer().required(),
    description: Joi.string().required(),
    type: Joi.string().valid("entrance", "exit").required(),
    date: Joi.date().required(),
    userId: Joi.number().integer().required(),
});