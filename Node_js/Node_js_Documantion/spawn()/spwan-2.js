const { spawn } = require('child_process');
const child = spawn('cmd.exe', ['/c', 'dir']);
child.stdout.on('data', (data) => {
    console.log(`Natija:\n${data}`);
});

child.stderr.on('data', (data) => {
    console.error(`Xatolik:\n${data}`);
});

child.on('close', (code) => {
    console.log(`Jarayon tugadi. Kod: ${code}`);
});
// ------------------------------------------------------
// example-2
const { spawn } = require('child_process');

const ping = spawn('ping', ['ok.ru']);

ping.stdout.on('data', (data) => {
    console.log(`Ping natijasi:\n${data}`);
});

ping.stderr.on('data', (data) => {
    console.error(`Xatolik:\n${data}`);
});

ping.on('close', (code) => {
    console.log(`Ping tugadi. Kod: ${code}`);
});
// ------------------------------------------------------
// example-3
const { spawn } = require('child_process');

const ps = spawn('powershell.exe', ['-Command', 'Get-LocalUser']);

ps.stdout.on('data', (data) => {
    console.log(`Foydalanuvchilar ro‘yxati:\n${data}`);
});

ps.stderr.on('data', (data) => {
    console.error(`Xatolik:\n${data}`);
});

ps.on('close', (code) => {
    console.log(`Powershell tugadi. Kod: ${code}`);
});
// ------------------------------------------------------
const { spawn } = require('child_process');

const calc = spawn('notepad.exe');

calc.on('close', (code) => {
    console.log(`Node ishga tushdi. Kod: ${code}`);
});
// ------------------------------------------------------
const { spawn } = require('child_process');
// const ls = spawn('ls', ['-lh', '/usr']); //Linux
// // const dir = spawn('cmd.exe', ['/c', 'dir', 'C:\\Komol']); //berilgan papka haqida malumot
// const dir = spawn('cmd.exe', ['/c', 'tasklist']);
const dir = spawn('cmd.exe', ['/c', 'findstr', 'ssh']);
dir.stdout.on('data', (data) => {
    console.log(`${data}`);
})


