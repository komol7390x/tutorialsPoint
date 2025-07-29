import Joi from "joi";

class ValidateEnrollment {
  create() {
    const schema = Joi.object({
      customerID: Joi.string().required(),
      courseID: Joi.string().required()
    });
    return schema
  }

  update(){
    const schema = Joi.object({
      customerID: Joi.string().optional(),
      courseID: Joi.string().optional()
    });
    return schema;
  }
}

export default new ValidateEnrollment()