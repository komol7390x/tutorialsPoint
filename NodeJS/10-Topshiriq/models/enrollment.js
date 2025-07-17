import Joi from 'joi';
import mongoose from 'mongoose';

export const Enrollment = mongoose.model('Enrollment', new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
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

