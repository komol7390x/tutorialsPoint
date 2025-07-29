import {  Customer} from '../models/index.model.js'
import {BaseController} from './base.controller.js'
// --------------------------------------------------------------------------------
class CustomerController extends BaseController{
  constructor(){
    super(Customer)
  }
}
export default new CustomerController();