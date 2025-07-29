import controller from '../controller/users.controller.js'
import { Router } from 'express'
import { AuthGuard } from '../middleware/auth.js'
import userValidate from '../validator/user.validate.js'
import {RolesGuard} from '../middleware/roles.js'
import validate from '../middleware/validate.js'
const router = Router()

router
    .post('/create',AuthGuard,RolesGuard('Admin') ,validate(userValidate.create), controller.createUser)
    .post('/signin',validate(userValidate.signIn), controller.signin)
    .get('/',AuthGuard,RolesGuard('Admin'),controller.getAll)
    .get('/:id', AuthGuard,controller.getByID)
    .patch('/:id', AuthGuard,RolesGuard('Admin'),validate(userValidate.update), controller.update)
    .delete('/:id', RolesGuard('Admin'),controller.delete)

export default router