import {User, validateUser} from '../models/user.js'
import { Router } from 'express';
const router=Router();
import _ from 'lodash'

router.post('/', async (req, res) => {
  const { error } = validateUser(req.body);
  if (error)
    return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user)
    return res.status(400).send('Mavjud bo\'lgan foydalanuvchi');

  user = new User(_.pick(req.body, ['name', 'email', 'password']));
  await user.save();

  res.send(_.pick(user, ['_id', 'name', 'email']));
});

export default router
