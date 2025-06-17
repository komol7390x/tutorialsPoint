const { spawn } = require('child_process');

const calc = spawn('notepad.exe');

calc.on('close', (code) => {
    console.log(`Node ishga tushdi. Kod: ${code}`);
});

