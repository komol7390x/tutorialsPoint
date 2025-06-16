
const file = require('path');
const pathObj = file.parse(__filename)

// console.log(pathObj);
// console.log(__filename);
// --------------------------------------------
// OS
const os = require('os');
const freeMem = os.totalmem();
console.log('Xotirada bosh joy',Math.floor(freeMem/1024/1024),' mb');

const userInfo = os.userInfo();
console.log('Info',userInfo);


// --------------------------------------------
// console.log(module)
// const logger = require('./modul')
// logger.log('salom')
// console.log(logger);
