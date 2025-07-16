import mongoose from "mongoose";

export const Journal = mongoose.model('Journal', new mongoose.Schema({
    accountNumber: String, operation: String, amount: Number
}));

