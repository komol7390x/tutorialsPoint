import { getCustomer } from './db.js'

class Mylib {
  // Sonlarni test qilish - mutlaq qiymat
  absolute = function (number) {
    return (number >= 0) ? number : -number;
  }


  // Matnlarni test qilish
  salam = function (name) {
    return 'Assalomu alaykum, ' + name + '!';
  }


  // Qatorlarni test qilish
  getCurrencies = function () {
    return ['UZS', 'MYR', 'TRY'];
  }


  // Obyektlarni test qilish
  getProduct = function (productId) {
    return { id: productId, title: 'banana', price: 2 };
  }


  // Xatolarni test qilish
  registeruser = function (userName) {
    if (!userName) throw new Error('Username is required');
    return { id: 111, userName: userName }
  }


  // Mock funtksyalar
  applyDiscount = function (order) {    
    const customer = getCustomer(order.customerId);        
    if (customer.points > 100)
      order.totalPrice = order.price - (order.price * 0.1);
  }
}
const result=new Mylib()

export default result;