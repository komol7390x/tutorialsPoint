import controller from '../controller/users.controller.js'
import { Router } from 'express'
import { AuthGuard } from '../middleware/auth.js'
import userValidate from '../validator/user.validate.js'
import { RolesGuard } from '../middleware/roles.js'
import validate from '../middleware/validate.js'
import { Role } from '../const/Role.js'
const router = Router()

router
    .post('/create', AuthGuard, RolesGuard(Role.SUPERADMIN), validate(userValidate.create), controller.createUser)
    .post('/signin', validate(userValidate.signIn), controller.signin)
    .get('/', AuthGuard, RolesGuard(Role.SUPERADMIN), controller.getAll)
    .get('/:id', AuthGuard, RolesGuard(Role.SUPERADMIN, Role.ADMIN), controller.getByID)
    .patch('/:id', AuthGuard, olesGuard(Role.SUPERADMIN, Role.ADMIN), validate(userValidate.update), controller.update)
    .delete('/:id', AuthGuard, olesGuard(Role.SUPERADMIN), controller.delete)

export default router