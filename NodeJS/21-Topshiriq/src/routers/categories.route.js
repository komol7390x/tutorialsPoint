import controller from '../controller/categories.controller.js'
import { Router } from 'express'

const router=Router()

router
    .post('/',controller.create)
    .get('/',controller.getAll)
    .get('/:id',controller.getByID)
    .patch('/:id',controller.update)
    .delete('/:id',controller.delete)

export default router