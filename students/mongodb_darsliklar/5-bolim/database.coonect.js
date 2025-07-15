import { connect, model, Schema } from 'mongoose';
import { config } from 'dotenv'
import { join } from 'path'
import { log } from 'console';

const envPath = join(process.cwd(), '../../.env')
config({ path: envPath })

const connectDB = async () => {
    try {
        await connect(process.env.MONGODB_URI)
        console.clear()
        console.log('server is connect Database')
    } catch (error) {
        console.log('error is coonect server', error.message);
        process.exit(1)
    }
}
await connectDB()
const bookSchema = new Schema({
    name: { type: String, required: true, minlength: 3, maxlength: 50, unique: true },
    author: { type: String },
    tags: [{ type: String }],
    data: { type: Date, default: Date.now },
    isPublished: { type: Boolean }
})

const Book = model('books', bookSchema)
const book = new Book({
    name: 'Harry Potter',
    author: 'J.R.Rowling',
    tags: ['js', 'dasturlash'],
    isPublished: true
})
const createBook = async () => {
    const check = await Book.findOne({ name: book.name })
    if (check) {
        console.log(`${book.name} already added`)
        return
    }
    const saveBook = await book.save()
    console.log(saveBook, '\nmalumot databasega yozildi');
}
const getAllUser = async () => {
    const result = await Book.find()
    console.log(result);
}

const getUserByName = async () => {
    const pageNumber = 1
    const pageSize = 10
    const user = await Book
        .find({ name: book.name, isPublished: true })
        .skip((pageNumber - 1) * pageSize)
        .limit(pageSize)
        .sort({ name: 1 })
        .countDocuments()
    // .select({ name: 1, author: 1 })
    console.log(user);

}
const updateUser = async (id) => {
    const update = await Book.findOne({ id: id })
    const newUpdate = update({ _id: id }, { $set: { name: "Lord of rings" } })
    book.save(newUpdate)
}
// getAllUser()
// createBook()
// getUserByName()