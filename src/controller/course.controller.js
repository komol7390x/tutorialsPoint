import {  Course} from '../models/index.model.js'
import {BaseController} from './base.controller.js'
// --------------------------------------------------------------------------------
class CourseController extends BaseController{
  constructor(){
    super(Course)
  }
}

export default new CourseController();