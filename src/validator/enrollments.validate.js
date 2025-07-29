import Joi from "joi";

class ValidateEnrollment {
  create(enrollment) {
    const schema = Joi.object({
      customerId: Joi.string().required(),
      courseId: Joi.string().required()
    });
    return schema.validate(enrollment);
  }

  update(enrollment){
    const schema = Joi.object({
      customerId: Joi.string().optional(),
      courseId: Joi.string().optional()
    });
    return schema.validate(enrollment);
  }
}

export default new ValidateEnrollment()