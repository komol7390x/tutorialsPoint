import express from 'express';

import categoriesRoute from '../13-Topshiriq/routes/categories.js'
import customersRoute from '../13-Topshiriq/routes/customers.js'
import coursesRoute from '../13-Topshiriq/routes/courses.js'
import entrollmentsRoute from '../13-Topshiriq/routes/enrollments.js'
import usersRoute from '../13-Topshiriq/routes/users.js'
import { connectDB } from '../13-Topshiriq/configs/database.js';

await connectDB()
const app = express();

app.use(express.json());
app.use('/api/categories', categoriesRoute);
app.use('/api/customers', customersRoute);
app.use('/api/courses', coursesRoute);
app.use('/api/enrollments', entrollmentsRoute);
app.use('/api/users', usersRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`${port} chi portni eshitishni boshladim...`);
});