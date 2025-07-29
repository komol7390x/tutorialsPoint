import Joi from "joi";

const regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const regPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

class Validate {
// -----------------------------------------------------
// CREATE
  create() {
    return Joi.object({
      name: Joi.string().min(3).max(50).required(),
      email: Joi.string().required().pattern(regEmail),
      password: Joi.string().required().pattern(regPass),
      isAdmin:Joi.boolean().required(),
      role:Joi.string().valid('Admin')
    });
  }
// -----------------------------------------------------
// UPDATE
  update(){
     return Joi.object({
      name: Joi.string().min(3).max(50).optional(),
      email: Joi.string().optional().pattern(regEmail),
      password: Joi.string().optional().pattern(regPass),
      isAdmin:Joi.boolean().optional()
    });
  }
// -----------------------------------------------------
// SIGN_IN
  signIn(){
    return Joi.object({
      email: Joi.string().required(),
      password: Joi.string().required()
    });
  }

}

export default new Validate()