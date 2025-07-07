import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/test')
    .then(res => console.log('Mongo db ishlavoti'))
    .catch(error => console.error('Mongo db hatolik'))

const bookSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    data: { type: Date, default: Date.now },
    isPublished: Boolean
})