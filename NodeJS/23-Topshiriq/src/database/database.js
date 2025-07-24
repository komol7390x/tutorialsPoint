import {join} from 'path'
import {configFile} from '../config/env.config.js'
import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        // console.clear()
        await mongoose.connect(configFile.mongo_url)
        console.log('Server is connect to database :)');
    } catch (error) {
        console.log(`error to connect database`, error.message);
        process.exit(1)
    }
}