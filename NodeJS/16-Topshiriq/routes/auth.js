import { User } from '../models/user.js'
import { Router } from 'express';

import hashPassword from '../hash.js'
import Joi from 'joi';
import jwt from 'jsonwebtoken'

const router = Router();
import _ from 'lodash'

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error)
    return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).send('Email yoki parol noto\'gri');
  }
  const isValid =await hashPassword.decrypt(req.body.password, user.password)  
  
  if (!isValid) {
    res.send('Email yoki parol noto\'gri')
  }
  const token=jwt.sign({_id:user._id},'8uMeningMa4fiyT0kenim');
  res.header('x-auth-token',token).send(true)
});

function validate(users) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required()
  })
  return schema.validate(users)
}
export default router
