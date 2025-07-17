const mongoose = require('mongoose');
const Joi = require('joi');

export const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    }
});


export function validateCategory(category) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(category, schema);
}


export const Category = mongoose.model('Category', categorySchema);
