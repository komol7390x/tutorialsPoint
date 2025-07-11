const url = 'http://192.168.7.1/logger'

function log(message) {
    // to-do : bu yerda messagani url ga http post qilin jonatish kodi bolish kerak
    console.log(message);
}

export {
    log, url
}