import { Router } from 'express'

import controller from '../controller/customers.controller.js'
import validate from '../middleware/validate.js'
import customerValidate from '../validator/customers.validate.js'
import { AuthGuard } from '../middleware/auth.js'
import { RolesGuard } from '../middleware/roles.js'
import { Role } from '../const/Role.js'

const router = Router()

router
    .post('/', AuthGuard, RolesGuard(Role.SUPERADMIN, Role.ADMIN), validate(customerValidate.create), controller.create)
    .get('/', AuthGuard, RolesGuard(Role.SUPERADMIN, Role.ADMIN), controller.getAll)
    .get('/:id', AuthGuard, controller.getByID)
    .patch('/:id', AuthGuard, RolesGuard(Role.SUPERADMIN, Role.ADMIN), validate(customerValidate.update), controller.update)
    .delete('/:id', AuthGuard, RolesGuard(Role.SUPERADMIN, Role.ADMIN), controller.delete)

export default router