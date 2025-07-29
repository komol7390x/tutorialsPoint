import hashPassword from '../utils/hash.js'
import token from '../utils/Token.js'
import { User } from '../models/index.model.js'
import { BaseController } from './base.controller.js'


class UserController extends BaseController {

  constructor() { super(User) }
  // --------------------------------------------------------------------------------------------
  // USER create
  createUser = async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({
          statusCode: 400,
          message: `Already added this user: ${user}`
        });
      }      
      const hashPass = await hashPassword.encrypt(req.body.password)
      req.body.password = hashPass
      const result = await User.create(req.body)
      return res.status(201).json({
        statusCode: 201,
        message: 'success',
        data: result
      })
    } catch (error) {
      return res.status(500).json({
        statusCode: 500,
        message: error.message || 'Invalid server error'
      })
    }

  }
  // --------------------------------------------------------------------------------------------
  // authorization get Token
  signin = async (req, res) => {
    try {
      
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(404).json({
          statusCode: 400,
          message: `Email or password incorrect`
        });
      }      
      const pass = await hashPassword.decrypt(req.body.password,user.password)      
      if (!pass) {
        return res.status(404).json({
          statusCode: 400,
          message: `Email or password incorrect`
        });
      }
      const payload = {
        id: user.id,
        name: user.name,
        isAdmin: user.isAdmin
      }
      const result = await token.AccessToken(payload);
      return res.status(200).json({
        statusCode: 200,
        message: 'success',
        data: {
          data:payload,
          token:result
        }
      })
    } catch (error) {
      return res.status(500).json({
        statusCode: 500,
        message: error.message || 'Invalid server error'
      })
    }

  }

}

export default new UserController()
