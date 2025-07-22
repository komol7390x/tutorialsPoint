import { Router } from 'express'
import 'express-async-errors';

import categoriesRoute from './categories.route.js'
import customersRoute from './customers.route.js'
import coursesRoute from './courses.route.js'
import enrollmentsRoute from './enrollments.route.js'
import usersRoute from './users.route.js'

const router = Router();

router.use('/categories', categoriesRoute);
router.use('/customers', customersRoute);
router.use('/courses', coursesRoute);
router.use('/enrollments', enrollmentsRoute);
router.use('/users', usersRoute);

router.use((err, _, res, _) => {
  console.error(err.stack);
  return res.status(500).json({
     message: err.message || "Server error" 
    });
})

export default router;
