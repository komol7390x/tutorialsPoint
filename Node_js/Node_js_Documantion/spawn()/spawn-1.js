// console.log(111);
const { spawn } = require('child_process');
const ls = spawn('cmd.exe', ['/c', 'dir']);

ls.stdout.on('data', (data) => {
    console.log(`Natija ${data}`);
})
ls.stderr.on('data', (data) => {
    console.log(`Xato ${data}`);
})
ls.on('close', (code) => {
    console.log(`Jarayon tugadi, kod: ${code}`);
});