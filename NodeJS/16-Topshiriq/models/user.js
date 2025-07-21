import mongoose from 'mongoose';
import Joi from 'joi';
import jwt from 'jsonwebtoken'
import {configFile} from '../configs/env.config.js';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024
  }
});

userSchema.statics.getUserToken=function(id){
  const token=jwt.sign({_id:id},configFile.jwtPK);  
  return token
}

export const User = mongoose.model('User3', userSchema);

export function validateUser(user) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required()
  });

  return schema.validate(user);
}
