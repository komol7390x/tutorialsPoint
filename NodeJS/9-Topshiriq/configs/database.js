import {join} from 'path'
import {config} from 'dotenv'
import mongoose from 'mongoose'

const pathEnv=join(process.cwd(),'../../.env')
config({path:pathEnv})
export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Server is connect to database');
    } catch (error) {
        console.log(`error to connect database`, error.message);
        process.exit(1)
    }
}