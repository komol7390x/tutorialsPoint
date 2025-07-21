import { User } from '../models/user.js'
import { Router } from 'express';
import hashPassword from '../hash.js'
import Joi from 'joi';

const router = Router();
import _ from 'lodash'

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error)
    return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user)
    return res.status(400).send('Email yoki parol noto\'gri');
  const isValid = hashPassword.decrypt(req.body.password,user.password)
  if(!isValid){
    res.send(true)
  }

});

function validate(users) {
  const schema = {
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required()
  };
  return schema.validate(users)
}

export default router
