import {  Category} from '../models/index.model.js'
import {BaseController} from './base.controller.js'
// --------------------------------------------------------------------------------


class CategoryController extends BaseController{
  constructor(){
    super(Category)
  }
}

export default new CategoryController();