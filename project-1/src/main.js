"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require('prompt-sync')();
var child_process_1 = require("child_process");
var bmw = (0, child_process_1.spawn)('node', ['BMW.js']);
var mers = (0, child_process_1.fork)('MERS.js');
// mers.on('message', (data:text) => {
//   console.log('Kelgan ma`lumot:', data.text);
// });
// mers.send('getData');
// bmw.stdout.on('data', (data: string) => {
//     console.log(`Child process chiqishi: ${data}`)
// });
// child.stderr.setEncoding('utf-8');
// bmw.on('close', (code: number) => {
//     console.log(`Child process tugadi. Chiqqan kodi: ${code}`);
// });
