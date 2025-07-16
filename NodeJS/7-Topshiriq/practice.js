import mongoose from "mongoose";
import {connectDB} from './configs/database.js'
await connectDB()

const AuthorSchema=new mongoose.Schema({
  firstName: {type:String,minlength:3,maxlength:50},
  lastName: {type:String,minlength:3,maxlength:50},
  email: {type:String,minlength:3,maxlength:50,unique:true,required:true}
})

const BookSchema= new mongoose.Schema({
  title: {type:String,minlength:3,maxlength:50},
  authorID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'author',
    required:true
  }
})

const Author = mongoose.model('author',AuthorSchema );
const Book = mongoose.model('book',BookSchema);

async function createAuthor(firstName, lastName, email) {
  const author = new Author({
    firstName,
    lastName,
    email
  });

  const result = await author.save();
  console.log(result);
}

async function createBook(title, authorId) {
  const book = new Book({
    title: title,
    author: authorId
  });

  const result = await book.save();
  console.log(result);
}

async function listBooks() {
  const book = await Book
    .find()
    .populate('authorID')
    .select('title author');
  console.log(book);
}

// createAuthor('Komol', 'Parpixodjayev', 'komol7390@gmail.com');

// createBook('NodeJS - To\'liq qo\'llanma', 'id')

listBooks();