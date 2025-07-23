import mongoose from 'mongoose';
import {categorySchema} from './category.model.js'

const courseSchema=new mongoose.Schema({
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
})


export const Course = mongoose.model('courses', courseSchema);