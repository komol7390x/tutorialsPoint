const { spawn } = require('child_process');

const pythonProcess = spawn('python', ['hello.py', 'Aziz']);

pythonProcess.stdout.on('data', (data) => {
    console.log(`Python chiqishi: ${ data }`);
});

pythonProcess.stderr.on('data', (data) => {
    console.error(`Xatolik: ${ data }`);
});

pythonProcess.on('close', (code) => {
    console.log(`Python tugadi.Chiqish kodi: ${ code }`);
});