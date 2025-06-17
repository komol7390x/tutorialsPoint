const { fork } = require('child_process');
const child = fork('child.js');
child.on('message', (msg) => {
    console.log(`Bola xabar: ${msg}`);
})
child.send('Salom bolajon');