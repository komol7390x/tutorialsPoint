import controller from '../controller/enrollments.controller.js'
import { Router } from 'express'
import validate from '../middleware/auth.js'
import schema from '../validator/enrollments.validate.js'
const router=Router()

router
    .post('/',validate(schema.create),controller.create)
    .get('/',controller.getAll)
    .get('/:id',controller.getByID)
    .patch('/:id',validate(schema.update),controller.update)
    .delete('/:id',controller.delete)

export default router