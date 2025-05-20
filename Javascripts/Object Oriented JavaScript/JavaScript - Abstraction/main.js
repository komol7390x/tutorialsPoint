// Abstrakt sinf (funktsiya)
function BankAccount(balance) {
    this.balance = balance || 0;

    if (this.constructor === BankAccount) {
        console.log("BankAccount ning to‘g‘ridan-to‘g‘ri nusxasini yaratib bo‘lmaydi.");
    }
}

// Hisobdagi balansni ko‘rsatish metodi
BankAccount.prototype.getBalance = function () {
    return this.balance;
}

// Pul qo‘shish metodi
BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
}

// Pul yechish metodi (faqat farzand sinfda ishlatiladi)
BankAccount.prototype.withdraw = function (amount) {
    console.log(("withdraw metodi amalga oshirilishi kerak!"));
}

// Farzand sinf - Oddiy hisob
function SavingsAccount(balance) {
    BankAccount.call(this, balance);
}

// Prototip merosini olish
SavingsAccount.prototype = Object.create(BankAccount.prototype);

// withdraw metodini amalga oshirish
SavingsAccount.prototype.withdraw = function (amount) {
    if (amount > this.balance) {
        return "Hisobda yetarli mablag‘ yo‘q!";
    }
    this.balance -= amount;
    return amount + " pul yechildi.";
}

// Hisob yaratamiz
const myAccount = new SavingsAccount(1000);

console.log(myAccount.getBalance());  // 1000
console.log(myAccount.deposit(500));  // undefined (deposit faqat balansni oshiradi)
console.log(myAccount.getBalance());  // 1500
console.log(myAccount.withdraw(200)); // 200 pul yechildi.
console.log(myAccount.getBalance());  // 1300
  