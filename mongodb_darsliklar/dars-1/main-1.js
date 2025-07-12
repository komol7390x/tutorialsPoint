// import { log, url } from './logger.js'
// --------------------------------------------------------------------------------------
// 13 - dars

import EventEmitter from 'events'
const emitter = new EventEmitter()

emitter.on('salom', (name) => {
    console.log('salom', name);
})
// emitter.emit('salom', 'Komol')
// --------------------------------------------------------------------------------------
// 14 - dars
import { Logger } from './logger.js'
const logger = new Logger();

logger.on('emit1', (message) => {
    console.log('1.Emit ishga tushdi\nXabar: ', message);
})

logger.on('emit2', (message) => {
    console.log('2.Emit ishga tushdi\nXabar: ', message);
})

// logger.log1('Salom qalesan\n')
// logger.log2('Hello world')
// --------------------------------------------------------------------------------------
// 15 - dars
import http from 'http';
const server = http.createServer((req, res) => {
    res.write('Asosiy sahifa');
    res.end()
});

server.on('connection', (socket) => {
    console.log('Serverga foydalanuchi ulandi');
    console.log(socket.remoteAddress, socket.remotePort);
})


const PORT = 4004
server.listen(PORT, () => console.log('Server is runing', PORT))