import express from 'express';

import categoriesRoute from './routes/categories.js'
import customersRoute from './routes/customers.js'
import coursesRoute from './routes/courses.js'
import entrollmentsRoute from './routes/enrollments.js'
import usersRoute from './routes/users.js'
import authRoute from './routes/auth.js'

import { connectDB } from './configs/database.js';

await connectDB()
const app = express();

app.use(express.json());
app.use('/api/categories', categoriesRoute);
app.use('/api/customers', customersRoute);
app.use('/api/courses', coursesRoute);
app.use('/api/enrollments', entrollmentsRoute);
app.use('/api/users', usersRoute);
app.use('/api/auth',authRoute)

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`${port} chi portni eshitishni boshladim...`);
});