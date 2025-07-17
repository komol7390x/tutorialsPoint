import Joi from 'joi';
import mongoose from 'mongoose';

export const Enrollment = mongoose.model('Enrollment', new mongoose.Schema({
  customer: {
    type: new mongoose.Schema({
      name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
      }
    }),
    required: true
  },
  course: {
    type: new mongoose.Schema({
      title: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 255
      }
    }),
    required: true
  },
  dateStart: {
    type: Date,
    required: true,
    default: Date.now
  },
  courseFee: {
    type: Number,
    min: 0
  }
}));

export function validateEnrollment(enrollment) {
  const schema = {
    customerId: Joi.string().required(),
    courseId: Joi.string().required()
  };

  return Joi.validate(enrollment, schema);
}

