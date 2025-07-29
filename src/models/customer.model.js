import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    isVip: {
        type: Boolean,
        default: false
    },
    phone: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50,
        unique:true
    },
    role:{type:String,enum:['Customer'],default:'Customer'}
},{timestamps:true,versionKey:false});


export const Customer = mongoose.model('customers', customerSchema);