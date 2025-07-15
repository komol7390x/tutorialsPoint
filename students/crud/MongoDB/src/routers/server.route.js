import {Router} from 'express';
import {createUser,getAllUsers,getUserbyId,updateUser,deleteUser} from '../controller/server17.controller.js'
const routers=Router();
// await getAllUsers()
routers
    .get('/',getAllUsers)
    .post('/',createUser)
    .get('/:id',getUserbyId)
    .put('/:id',updateUser)
    .delete('/:id',deleteUser)


export default routers