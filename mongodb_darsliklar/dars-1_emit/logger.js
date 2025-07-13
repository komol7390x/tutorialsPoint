export const url = 'http://192.168.7.1/logger'
import EventEmitter from 'events'
// --------------------------------------------------------------------------------------
// 13-dars
export const log = (message) => {
    // to-do : bu yerda messagani url ga http post qilin jonatish kodi bolish kerak
    console.log(message);
}

// --------------------------------------------------------------------------------------
// 14-dars
export class Logger extends EventEmitter {
    log1(message) {
        this.emit('emit1', message)
    }
    log2(message) {
        this.emit('emit2', message)
    }
}
// --------------------------------------------------------------------------------------
// 15-dars