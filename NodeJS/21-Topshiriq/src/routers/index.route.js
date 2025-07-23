import { Router } from 'express'
import 'express-async-errors';
import {winstonError} from '../middleware/error.js'

import categoriesRoute from './categories.route.js'
import customersRoute from './customers.route.js'
import coursesRoute from './courses.route.js'
import enrollmentsRoute from './enrollments.route.js'
import usersRoute from './users.route.js'
import { winstonError } from '../middleware/error.js';
 
const router = Router();

router.use('/categories', categoriesRoute);
router.use('/customers', customersRoute);
router.use('/courses', coursesRoute);
router.use('/enrollments', enrollmentsRoute);
router.use('/users', usersRoute);

router.use(winstonError)

export default router;

