import {  Enrollment} from '../models/index.model.js'
import {BaseController} from './base.controller.js'
// --------------------------------------------------------------------------------
class EnrollmentController extends BaseController{
  constructor(){
    super(Enrollment)
  }
}
export default new EnrollmentController();