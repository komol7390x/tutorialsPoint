const db = require('./db');

// Sonlarni test qilish - mutlaq qiymat
export const absolute = function (number) {
  return (number >= 0) ? number : -number;
}


// Matnlarni test qilish
export const salam = function (name) {
  return 'Assalomu alaykum, ' + name + '!';
}


// Qatorlarni test qilish
export const getCurrencies = function () {
  return ['UZS', 'MYR', 'TRY'];
}


// Obyektlarni test qilish
export const getProduct = function (productId) {
  return { id: productId, title: 'banana', price: 2 };
}


// Xatolarni test qilish
export const registeruser = function (userName) {
  if (!userName) throw new Error('Username is required');

  return { id: 111, userName: userName }
}


// Mock funtksyalar
export const applyDiscount = function (order) {
  const customer = db.getCustomer(order.customerId);
  if (customer.points > 100)
    order.totalPrice = order.price - (order.price * 0.1);
}