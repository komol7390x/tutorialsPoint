import controller from '../controller/users.controller.js'
import { Router } from 'express'

const router=Router()

router
    .post('/create',controller.createUser)
    .post('/auth',controller.authUser)
    .get('/',controller.getAll)
    .get('/:id',controller.getByID)
    .patch('/:id',controller.update)
    .delete('/:id',controller.delete)

export default router