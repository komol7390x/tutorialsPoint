import Joi from "joi";

const regPhone = /^(\+998|998|8)?(9[0-9]{8})$/

class ValidateCustomer {
    create() {
        const schema = Joi.object({
            name:Joi.string().required().min(3),
            isVip:Joi.boolean(),
            phone:Joi.string().required().pattern(regPhone)
        });
        return schema;
    }

    update() {
        const schema = Joi.object({
            name:Joi.string().optional().min(3),
            isVip:Joi.boolean(),
            phone:Joi.string().optional().pattern(regPhone)
        });
        return schema
    }
}

export default new ValidateCustomer();