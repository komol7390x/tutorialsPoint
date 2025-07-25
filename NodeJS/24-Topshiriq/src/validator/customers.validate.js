import Joi from "joi";

const regPhone = /^(\+998|998|8)?(9[0-9]{8})$/

class ValidateCustomer {
    create(customers) {
        const schema = Joi.object({
            name:Joi.string().required().min(3),
            isVip:Joi.boolean(),
            phoone:Joi.string().required().pattern(regPhone)
        });
        return schema.validate(customers);
    }

    update(customers) {
        const schema = Joi.object({
            name:Joi.string().optional().min(3),
            isVip:Joi.boolean(),
            phoone:Joi.string().optional().pattern(regPhone)
        });
        return schema.validate(customers);
    }
}

export default new ValidateCustomer();