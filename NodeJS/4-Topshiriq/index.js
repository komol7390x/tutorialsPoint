import express from 'express'
import mongoose from 'mongoose';
import {config} from 'dotenv'
import {join} from 'path'

const pathEnv=join(process.cwd(),'../../.env')
config({path:pathEnv})
console.log(pathEnv);


import categoriesRoute from './routes/categories.js'

const server = express();
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Server is connect to database');

    } catch (error) {
        console.log(`error to connect database`, error.message);
        process.exit(1)
    }
}
await connectDB()

server.use(express.json());
server.use('/api/categories', categoriesRoute);

const port = +process.env.PORT || 5000;

server.listen(port, () => {
  console.log(port,`chi portni eshitishni boshladim...`);
});