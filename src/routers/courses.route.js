import controller from '../controller/course.controller.js'
import validate from '../middleware/validate.js'
import schema from '../validator/course.validate.js'
import {AuthGuard} from '../middleware/auth.js'
import { Router } from 'express'
import { RolesGuard } from '../middleware/roles.js'

const router = Router()

router
    .post('/',AuthGuard,RolesGuard('Admin','Customer'),validate(schema.create),controller.create)
    .get('/',AuthGuard,RolesGuard('Admin','Customer'), controller.getAll)
    .get('/:id',AuthGuard,controller.getByID)
    .patch('/:id',AuthGuard,RolesGuard('Admin','Customer'),validate(schema.update),controller.update)
    .delete('/:id',AuthGuard,RolesGuard('Admin','Customer'),controller.delete)

export default router