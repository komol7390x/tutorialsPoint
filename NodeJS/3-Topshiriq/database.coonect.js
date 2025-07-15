import { connect, model, Schema } from 'mongoose';
import { config } from 'dotenv'
import { join } from 'path'


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
    tags: [{
        isAsync: true,
        type: String, validator: {
            validator: (val, callback) => {
                setTimeout(() => {
                    const result = val.lenght > 0 && val
                    callback(result)
                }, 5000)
            },
            message: 'Kitob kamida bitta tegi bo\'lish kerak'
        }
    }],
    data: { type: Date, default: Date.now },
    isPublished: { type: Boolean, default: false },
    price: {
        type: Number,
        required: () => {
            return this.isPublished
        },
        min: 10,
        max: 10000000
    },
    category: {
        type: String,
        required: true,
        enum: ['classic', 'biography', 'fantastic']
    }
})

const Book = model('books1', bookSchema)
const book = new Book({
    name: 'Harry Potter',
    author: 'J.R.Rowling',
    tags: ['js', 'dasturlash'],
    isPublished: true,
    price: 10000,
    category: 'classic'
})
const createBook = async () => {
    try {
        const check = await Book.findOne({ name: book.name })
        if (check) {
            console.log(`${book.name} already added`)
            return
        }
        const saveBook = await book.save()
        console.log(saveBook, '\nma\'lumot databasega yozildi');
    } catch (error) {
        console.log(error.message);
        return
    }
}
const getAllUser = async () => {
    const result = await Book.find()
    console.log(result);
}

const getUserByName = async (newName) => {
    const pageNumber = 1
    const pageSize = 10
    const user = await Book
        .find({ name: newName, isPublished: true })
        .skip((pageNumber - 1) * pageSize)
        .limit(pageSize)
        .sort({ name: 1 })
    // .countDocuments()
    // .select({ name: 1, author: 1 })
    console.log(user);

}
const updateUser = async (id, newName) => {
    const existing = await Book.findOne({ name: newName });
    if (!existing) {
        const result = await Book.updateOne({ name: newName })
        if (result.modifiedCount) {
            console.log('Kitob qoshildi');
        }
    } else {
        console.log("Bu nomdagi kitob allaqachon mavjud");
    }
}
const run = async () => {
    // getAllUser()
    // createBook()
    // getUserByName('Harry Potter')
    // updateUser('68765a34c8e0e237a6707392', "Lord2 of rings")
}
run()