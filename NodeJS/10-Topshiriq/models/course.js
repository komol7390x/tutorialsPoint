import Joi from 'joi'
import mongoose from 'mongoose';
import {categorySchema} from './category.js'

export const Course = mongoose.model('Courses', new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true, 
    minlength: 5,
    maxlength: 255
  },
  category: { 
    type: categorySchema,  
    required: true
  },
  trainer: {
    type: String,
    required: true
  },
  tags: {
    type: [String]
  },
  status: { 
    type: String, 
    enum: ['Active', 'Inactive'],
    required: true
  }
}));

export function validateCourse(course) {
  const schema = Joi.object({
    title: Joi.string().min(3).max(50).required(),
    categoryId: Joi.string().required(),
    trainer: Joi.string().required(),
    status: Joi.string().required(),
    tags: Joi.array().items(Joi.string())
  });
  return schema.validate(course);
}