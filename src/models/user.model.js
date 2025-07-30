import mongoose from 'mongoose';
import { Role } from '../const/Role.js'
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024
  },
  isAdmin: { type: Boolean, default: false },
  role: {
    type: String, enum: [Role.ADMIN, Role.SUPERADMIN], default: Role.ADMIN
  }
}, { timestamps: true, versionKey: false });

export const User = mongoose.model('user', userSchema);
