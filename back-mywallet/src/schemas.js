import Joi from 'joi';

export const userSchema = Joi.object({
    name: Joi.string().min(1).required(),
    email: Joi.string().min(1).required(),
    balance: Joi.number().integer().required(),
    balanceStatus: Joi.string().valid("pos", "neg").required(),
    password: Joi.string().alphanum().required(),
});

export const IoSchema = Joi.object({
    value: Joi.number().integer().required(),
    description: Joi.string().required(),
    type: Joi.string().valid("entrance", "exit").required(),
    date: Joi.date().required(),
});