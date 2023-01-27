import joi from 'joi';

export const signUpSchema = joi.object({
    name: joi.string().min(3).required(),
    email: joi.string().email().min(13).required(),
    password: joi.string().min(4).required()
  });