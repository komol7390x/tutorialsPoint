import controller from '../controller/users.controller.js'
import { Router } from 'express'
import validate from '../middleware/auth.js'
import userValidate from '../validator/user.validate.js'
const router=Router()

router
    .post('/create',validate(userValidate.create),controller.createUser)
    .post('/signin',validate(userValidate.signIn),controller.authUser)
    .get('/',controller.getAll)
    .get('/:id',controller.getByID)
    .patch('/:id',validate(userValidate.update),controller.update)
    .delete('/:id',controller.delete)

export default router