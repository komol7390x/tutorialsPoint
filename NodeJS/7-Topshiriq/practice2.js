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
    type: [AuthorSchema],
    ref: 'Author',
    required:true
  }
})

const Author = mongoose.model('Author', AuthorSchema);
const Book = mongoose.model('Book', BookSchema);

async function createBook(title, authors) {
  const book = new Book({
    title,
    authors: authors
  });

  const result = await book.save();
  console.log(result);
}

createBook('NodeJS - To\'liq qo\'llanma', [
  new Author({
    firstName: 'Sardor',
    lastName: 'Kenjayev',
    email: 'dsardor@gmail.com'
  }),
  new Author({
    firstName: 'Ibrohim',
    lastName: 'Dadajanov',
    email: 'abc@gmail.com'
  })
]
);

// async function updateAuthor(bookId) {
//   await Book.updateOne({ _id: bookId }, {
//     $unset: {
//       'author': ''
//     }
//   });
// }

//updateAuthor('5e516acf217e2e166053a552');
