import Joi from "joi";

class ValidateCourse {
  create(course) {
    const schema = Joi.object({
      title: Joi.string().min(3).max(50).required(),
      categoryId: Joi.string().required(),
      trainer: Joi.string().required(),
      status: Joi.string().required(),
      tags: Joi.array().items(Joi.string())
    });
    return schema.validate(course);
  }

  update(course) {
    const schema = Joi.object({
      title: Joi.string().min(3).max(50).optional(),
      categoryId: Joi.string().optional(),
      trainer: Joi.string().optional(),
      status: Joi.string().optional(),
      tags: Joi.array().items(Joi.string())
    });
    return schema.validate(course);
  }
}

export default new ValidateCourse();