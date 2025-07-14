import { connect,model,Schema } from 'mongoose';
import { config } from 'dotenv'
import {join} from 'path'

const envPath=join(process.cwd(),'../../.env')
config({path:envPath})

const connectDB = async () => {
    try {
        await connect(process.env.MONGODB_URI)
        console.log('server is connect Database')
    } catch (error) {
        console.log('error is coonect server',error.message);
        process.exit(1)
    }
}
connectDB()
const bookSchema=new Schema({
    name:{type:String,required:true,minlength:3,maxlength:50,unique:true},
    author:{type:String},
    tags:[{type:String}],
    data:{type:Date,default:Date.now},
    isPublished:{type:Boolean}
})

const Book=model('books',bookSchema)

const createBook=async()=>{
const book=new Book({
    name:'Harry Potter',
    author:'J.R.Rowling',
    tags:['js','dasturlash'],
    isPublished:true
})
const saveBook=await book.save()
console.log(saveBook,'\nmalumot databasega yozildi');
}
const getAllUser=async()=>{
    const result=await Book.find()
    console.log(result);
}
getAllUser()
// createBook()
