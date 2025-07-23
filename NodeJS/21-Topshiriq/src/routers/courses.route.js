import controller from '../controller/course.controller.js'
import validate from '../middleware/auth.js'
import schema from '../validator/course.validate.js'
import { Router } from 'express'

const router=Router()

router
    .post('/',validate(schema.create),controller.create)
    .get('/',controller.getAll)
    .get('/:id',controller.getByID)
    .patch('/:id',validate(schema.update),controller.update)
    .delete('/:id',controller.delete)

export default router