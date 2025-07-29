import Joi from "joi";

class ValidateCourse {
  create() {
    return Joi.object({
      title: Joi.string().min(3).max(50).required(),
      categoryID: Joi.string().required(),
      trainer: Joi.string().required(),
      status: Joi.string().required(),
      tags: Joi.array().items(Joi.string())
    });
  }

  update() {
    return Joi.object({
      title: Joi.string().min(3).max(50).optional(),
      categoryId: Joi.string().optional(),
      trainer: Joi.string().optional(),
      status: Joi.string().optional(),
      tags: Joi.array().items(Joi.string())
    });
  }
}

export default new ValidateCourse();