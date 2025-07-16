import express from 'express'
import mongoose from 'mongoose';
import {join} from 'path'
import {config} from 'dotenv'

import categoriesRoute from './routes/categories.js'
import customersRoute from './routes/customers.js'
const app = express();

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

app.use(express.json());
app.use('/api/categories', categoriesRoute);
app.use('/api/customers', customersRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`${port}chi portni eshitishni boshladim...`);
});