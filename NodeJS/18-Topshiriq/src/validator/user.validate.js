import Joi from "joi";

const regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const regPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

class ValidateUser {
// -----------------------------------------------------
// CREATE
  create(user) {
    const schema = Joi.object({
      name: Joi.string().min(3).max(50).required(),
      email: Joi.string().required().pattern(regEmail),
      password: Joi.string().required().pattern(regPass)
    });

    return schema.validate(user);
  }
// -----------------------------------------------------
// UPDATE
  update(user){
     const schema = Joi.object({
      name: Joi.string().min(3).max(50).optional(),
      email: Joi.string().optional().pattern(regEmail),
      password: Joi.string().optional().pattern(regPass)
    });

    return schema.validate(user);
  }
// -----------------------------------------------------
// SIGN_IN
  signIn(user){
    const schema = Joi.object({
      email: Joi.string().required(),
      password: Joi.string().required()
    });
    return schema.validate(user);
  }

}



export default new ValidateUser()