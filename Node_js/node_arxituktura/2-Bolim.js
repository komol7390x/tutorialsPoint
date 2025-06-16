
const file = require('path');
const pathObj = file.parse(__filename)

// console.log(pathObj);
// console.log(__filename);
// --------------------------------------------
// OS
const os = require('os');
const freeMem = os.totalmem();
// console.log('Xotirada bosh joy',Math.floor(freeMem/1024/1024),' mb');

// const userInfo = os.userInfo();
// console.log('Info', userInfo);

// console.log(os.arch()); //nechi bitligini biladi
// console.log(os.platform()); //win32
// console.log(os.cpus()[0]);  //cpu yadrosini
// console.log(Math.floor(os.totalmem() / 1024 / 1024), ' mb'); //RAM Xotirasi jami;
// console.log(Math.floor(os.freemem() / 1024 / 1024),' mb'); // RAM da bosh joy
// console.log(Math.floor(os.uptime() / 60 / 60), 'soat'); //kompyuter ishga tushganidan beri qancha vaqt o‘tganini
// console.log(os.hostname()); //Comp nomi
console.log(os.networkInterfaces());  //Kompyuterning tarmoqqa ulanish manzillarini(IP va MAC) qaytaradi.

// --------------------------------------------
// console.log(module)
// const logger = require('./modul')
// logger.log('salom')
// console.log(logger);
