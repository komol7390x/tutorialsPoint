const prompt=require('prompt-sync')()
import { spawn, ChildProcess,fork  } from 'child_process';

const bmw: ChildProcess = spawn('node', ['BMW.js']);
const mers = fork('MERS.js'); 

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
