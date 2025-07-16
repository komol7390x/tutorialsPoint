import mongoose from 'mongoose'

export const User = mongoose.model('User', new mongoose.Schema({
    accountNumber: String, name: String, balance: Number
}));