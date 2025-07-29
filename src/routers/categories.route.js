import controller from '../controller/categories.controller.js'
import validate from '../middleware/validate.js'
import schema from '../validator/category.validate.js'
import {AuthGuard} from '../middleware/auth.js'
import { Router } from 'express'
import { RolesGuard } from '../middleware/roles.js'

const router = Router()

router
    .post('/',AuthGuard,RolesGuard('Admin'),validate(schema.create),controller.create)
    .get('/',AuthGuard,RolesGuard('Admin'), controller.getAll)
    .get('/:id',AuthGuard,controller.getByID)
    .patch('/:id',AuthGuard,validate(schema.update),controller.update)
    .delete('/:id',AuthGuard,RolesGuard('Admin'),controller.delete)

export default router