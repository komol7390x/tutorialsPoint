import Joi from "joi";

class ValidateCategory {
    create(category) {
        const schema = Joi.object({
            name: Joi.string().min(3).required()
        })
        return schema.validate(category);
    }

    update(category) {
        const schema = Joi.object({
            name: Joi.string().min(3).required()
        })
        return schema.validate(category);
    }
}

export default new ValidateCategory();