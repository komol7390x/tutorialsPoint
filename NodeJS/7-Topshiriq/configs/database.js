import {join} from 'path'
import {config} from 'dotenv'
import mongoose from 'mongoose'

const pathEnv2=join(process.cwd(),'../../.env')
config({path:pathEnv2})
export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Server is connect to database');
    } catch (error) {
        console.log(`error to connect database`, error.message);
        process.exit(1)
    }
}