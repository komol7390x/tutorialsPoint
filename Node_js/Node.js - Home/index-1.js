const { spawn } = require('child_process');

const ls = spawn('ls', ['-l']); // katalogdagi fayllarni ro'yxatlaydi

ls.stdout.on('data', (data) => {
    console.log(`Natija:\n${data}`);
});

ls.stderr.on('data', (data) => {
    console.error(`Xatolik:\n${data}`);
});

ls.on('close', (code) => {
    console.log(`Process tugadi. Chiqish kodi: ${code}`);
});
