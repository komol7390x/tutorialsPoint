import express from 'express'
import {config} from 'dotenv'
import {join} from 'path'
const pathEnv1=join(process.cwd(),'.env')
config({path:pathEnv1})

import categoriesRoute from './routes/categories.js'
import customersRoute from './routes/customers.js'
import {connectDB} from './configs/database.js'

await connectDB()

const server = express();
server.use(express.json());

server.use('/api/categories', categoriesRoute);
server.use('/api/customers', customersRoute);

const port = +process.env.PORT || 5000;

server.listen(port, () => {
  console.log(port,`chi portni eshitishni boshladim...`);
});
