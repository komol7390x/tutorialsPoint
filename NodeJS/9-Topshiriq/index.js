import express from 'express';

import categoriesRoute from './routes/categories.js'
import customersRoute from './routes/customers.js'
import coursesRoute from './routes/courses.js'
import { connectDB } from './configs/database.js'

const app = express();
await connectDB()

app.use(express.json());
app.use('/api/categories', categoriesRoute);
app.use('/api/customers', customersRoute);
app.use('/api/courses', coursesRoute);

const port = +process.env.PORT || 5000;

app.listen(port, () => {
  console.log(port,`chi portni eshitishni boshladim...`);
});