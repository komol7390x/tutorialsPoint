import controller from '../controller/customers.controller.js'
import validate from '../middleware/validate.js'
import customerValidate from '../validator/customers.validate.js'
import {AuthGuard} from '../middleware/auth.js'
import { Router } from 'express'
import { RolesGuard } from '../middleware/roles.js'

const router = Router()

router
    .post('/',AuthGuard,RolesGuard('Admin'),validate(customerValidate.create),controller.create)
    .get('/',AuthGuard,RolesGuard('Admin'), controller.getAll)
    .get('/:id',AuthGuard,controller.getByID)
    .patch('/:id',AuthGuard,RolesGuard('Admin'),validate(customerValidate.update),controller.update)
    .delete('/:id',AuthGuard,RolesGuard('Admin'),controller.delete)

export default router