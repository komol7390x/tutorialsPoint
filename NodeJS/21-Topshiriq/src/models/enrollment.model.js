import mongoose from 'mongoose';

const enrollmentSchema=new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'customer',
    required: true
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'course',
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
},{timestamps:true,versionKey:false})

export const Enrollment = mongoose.model('enrollment', enrollmentSchema);

