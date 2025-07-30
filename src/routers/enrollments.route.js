import controller from '../controller/enrollments.controller.js'
import validate from '../middleware/validate.js'
import schema from '../validator/enrollments.validate.js'
import { AuthGuard } from '../middleware/auth.js'
import { Router } from 'express'
import { RolesGuard } from '../middleware/roles.js'
import { Role } from '../const/Role.js'
const router = Router()

router
    .post('/', AuthGuard, RolesGuard(Role.ADMIN, Role.SUPERADMIN), validate(schema.create), controller.create)
    .get('/', AuthGuard, RolesGuard(Role.ADMIN, Role.SUPERADMIN), controller.getAll)
    .get('/:id', AuthGuard, controller.getByID)
    .patch('/:id', AuthGuard, RolesGuard(Role.ADMIN, Role.SUPERADMIN), validate(schema.update), controller.update)
    .delete('/:id', AuthGuard, RolesGuard(Role.ADMIN, Role.SUPERADMIN), controller.delete)

export default router