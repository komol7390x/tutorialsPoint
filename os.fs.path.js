// PATH

import path from 'path'

// path.basename
console.log('basename:', path.basename('/user/komol/test.txt')); // test.txt

// path.dirname
console.log('dirname:', path.dirname('/user/komol/test.txt')); // /user/komol

// path.extname
console.log('extname:', path.extname('/user/komol/test.txt')); // .txt

// path.join
console.log('join:', path.join('/user', 'komol', 'docs', 'file.doc')); // /user/komol/docs/file.doc

// path.resolve
console.log('resolve:', path.resolve('src', 'index.js')); // /current/dir/src/index.js

// path.normalize
console.log('normalize:', path.normalize('/user/komol/../test')); // /user/test

// path.isAbsolute
console.log('isAbsolute:', path.isAbsolute('/user/test')); // true

// path.relative
console.log('relative:', path.relative('/user/komol', '/user/komol/docs/file.txt')); // docs/file.txt

// path.parse
console.log('parse:', path.parse('/user/komol/test.txt'));

// path.format
const parsed = path.parse('/user/komol/test.txt');
console.log('format:', path.format(parsed));

// path.sep
console.log('sep:', path.sep);

// path.delimiter
console.log('delimiter:', path.delimiter);

// -------------------------------------------------------------------------------------------------------------

// FS

import fs from 'fs'

const filePath = path.join(__dirname, 'sample.txt');

// fs.writeFileSync
fs.writeFileSync(filePath, 'Hello, Node.js FS Module!');

// fs.readFileSync
const data = fs.readFileSync(filePath, 'utf8');
console.log('readFileSync:', data);

// fs.appendFileSync
fs.appendFileSync(filePath, '\nAppended line.');
console.log('Appended new line.');

// fs.readFile (async)
fs.readFile(filePath, 'utf8', (err, content) => {
    if (err) throw err;
    console.log('readFile (async):', content);
});

// fs.statSync
const stats = fs.statSync(filePath);
console.log('statSync:', stats);

// fs.renameSync
const newFilePath = path.join(__dirname, 'sample-renamed.txt');
fs.renameSync(filePath, newFilePath);
console.log('File renamed.');

// fs.existsSync
if (fs.existsSync(newFilePath)) {
    console.log('File exists:', newFilePath);
}

// fs.copyFileSync
const copyPath = path.join(__dirname, 'sample-copy.txt');
fs.copyFileSync(newFilePath, copyPath);
console.log('File copied.');

// fs.unlinkSync
fs.unlinkSync(copyPath);
console.log('Copy deleted.');

// fs.mkdirSync
const dirPath = path.join(__dirname, 'test-dir');
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
    console.log('Directory created.');
}

// fs.readdirSync
const files = fs.readdirSync(__dirname);
console.log('Directory files:', files);

// fs.rmdirSync
if (fs.existsSync(dirPath)) {
    fs.rmdirSync(dirPath);
    console.log('Directory removed.');
}


// -------------------------------------------------------------------------------------------------------------

// OS

import os from 'os'

// Kompyuterning arxitekturasi (masalan, x64 yoki arm)
console.log('arch:', os.arch());

// Operatsion tizim platformasi (linux, win32, darwin va hokazo)
console.log('platform:', os.platform());

// Operatsion tizim turi (Windows_NT, Linux, Darwin)
console.log('type:', os.type());

// Operatsion tizimning versiyasi
console.log('release:', os.release());

// Kompyuterning tarmoqdagi nomi
console.log('hostname:', os.hostname());

// Joriy foydalanuvchining uy katalogi
console.log('homedir:', os.homedir());

// Vaqtinchalik fayllar katalogi (tmp)
console.log('tmpdir:', os.tmpdir());

// Protsessorning endianness tartibi (LE yoki BE)
// LE = Little Endian, BE = Big Endian
console.log('endianness:', os.endianness());

// Tizim qancha vaqt ishlagan (sekundlarda)
console.log('uptime (seconds):', os.uptime());

// Bo‘sh xotira hajmi (baytlarda)
console.log('freemem (bytes):', os.freemem());

// Umumiy xotira hajmi (baytlarda)
console.log('totalmem (bytes):', os.totalmem());

// CPU (protsessor) yadrolari va ularning ma’lumotlari
console.log('cpus:', os.cpus());

// Tarmoqli interfeyslar (IP-manzillar, MAC va boshqalar)
console.log('networkInterfaces:', os.networkInterfaces());

// Foydalanuvchi haqida ma’lumot (username, uid, shell)
console.log('userInfo:', os.userInfo());
