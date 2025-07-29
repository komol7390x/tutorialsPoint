import mongoose from 'mongoose';

const enrollmentSchema=new mongoose.Schema({
  customerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'customers',
    required: true
  },
  courseID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'courses',
    required: true
  },
  dateStart: {
    type: Date,
    default: Date.now
  },
  courseFee: {
    type: Number,
    min: 0
  }
},{timestamps:true,versionKey:false})

export const Enrollment = mongoose.model('enrollment', enrollmentSchema);

