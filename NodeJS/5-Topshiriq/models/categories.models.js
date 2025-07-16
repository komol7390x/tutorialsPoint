import mongoose from 'mongoose';
import Joi from 'joi'

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  }
});

function validateCategory(category) {
  const schema = {
    name: Joi.string().min(3).required()
  };

  return Joi.validate(category, schema);
}

const Category = mongoose.model('Category', categorySchema);

export{
    Category,validateCategory
}