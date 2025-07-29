import mongoose from 'mongoose';

export const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
        unique:true
    }
},{timestamps:true,versionKey:false});

export const Category = mongoose.model('category', categorySchema);
