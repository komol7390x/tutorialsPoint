import validate from '../validator/user.validate.js'
import hashPassword from '../utils/hash.js'

import { User } from '../models/index.model.js'
import { BaseController } from './base.controller.js'


class UserController extends BaseController {
  constructor() {
    super(User)
  }

  createUser = async (req, res) => {
    const { error } = validate.create(req.body);
    if (error)
      return res.status(400).json({
        statusCode: 400,
        message: error.details[0].message
      });

    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({
        statusCode: 400,
        message: `Already added this user: ${user}`
      });
    }
    const hashPass = await hashPassword.encrypt(user.password)
    user.password = hashPass

    const result = await User.create(user)
    // const token=
    return res.status(201).json({
      statusCode: 201,
      message: 'success',
      data: result
    })

  }

  authUser = async (req, res) => {
    const { error } = validate.signIn(req.body);
    if (error)
      return res.status(400).json({
        statusCode: 400,
        message: error.details[0].message
      });

    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({
        statusCode: 400,
        message: `Email or password incorrect`
      });
    }
    const pass = await hashPassword.decrypt(user.password)
    if (!pass) {
      return res.status(404).json({
        statusCode: 400,
        message: `Email or password incorrect`
      });
    }
    return res.status(200).json({
      statusCode: 200,
      message: 'success',
      data: user
    })

  }

}

export default new UserController()
