import Joi from "joi";

class ValidateCategory {
    create() {        
        const schema = Joi.object({
            name: Joi.string().min(3).required()
        })
        return schema
    }

    update() {
        const schema = Joi.object({
            name: Joi.string().min(3).required()
        })
        return schema
    }
}

export default new ValidateCategory();