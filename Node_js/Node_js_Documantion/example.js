const { spawn } = require('child_process');
// const ls = spawn('ls', ['-lh', '/usr']); //Linux
// // const dir = spawn('cmd.exe', ['/c', 'dir', 'C:\\Komol']); //berilgan papka haqida malumot
// const dir = spawn('cmd.exe', ['/c', 'tasklist']);
const dir = spawn('cmd.exe', ['/c', 'findstr', 'ssh']);
dir.stdout.on('data', (data) => {
    console.log(`${data}`);  
})

