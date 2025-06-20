// 1. fs.mkdirSync() – Papka yaratish
const fs = require('fs');

// "data" nomli papka yaratadi
fs.mkdirSync('data', { recursive: true });
// ---------------------------------------------
// 2. fs.writeFileSync() – Fayl yaratish yoki yozish
// "data/info.txt" fayliga yozadi
fs.writeFileSync('data/info.txt', 'Salom, bu test fayl!', 'utf8');
// ------------------------------------------------
// 3. fs.readFileSync() – Faylni o‘qish
const content = fs.readFileSync('data/info.txt', 'utf8');
console.log(content); // Natija: Salom, bu test fayl!
// ------------------------------------------------
// 4. fs.appendFileSync() – Fayl oxiriga yozish
fs.appendFileSync('data/info.txt', '\nYana bir qatordan yozildi.');
// ------------------------------------------------
// 5. fs.unlinkSync() – Faylni o‘chirish
fs.unlinkSync('data/info.txt'); // info.txt o‘chadi
// ------------------------------------------------
// 6. fs.rmSync() – Papkani yoki faylni o‘chirish
// "data" papkasini ichidagi hamma narsasi bilan o‘chirish
fs.rmSync('data', { recursive: true, force: true });
// ------------------------------------------------
// 7. fs.readdirSync() – Papka ichidagi fayllar ro‘yxatini olish
const files = fs.readdirSync('treasure_hunt');
console.log(files); // ['map.txt', 'west', 'east', ...]
// ------------------------------------------------
// 8. fs.existsSync() – Fayl yoki papkaning mavjudligini tekshirish

if (fs.existsSync('data')) {
    console.log('data papkasi mavjud!');
} else {
    console.log('Yo‘q, hali yaratilmadi.');
}
// ------------------------------------------------
// Bonus: path bilan birga ishlatish
const path = require('path');
const fullPath = path.join(__dirname, 'data', 'file.txt');
console.log(fullPath); // To‘liq yo‘lni beradi
// ------------------------------------------------
const path = require('path');

const fullPath2 = '/home/user/projects/app.js';

const fileName = path.basename(fullPath2);
console.log(fileName); // Natija: app.js
// ------------------------------------------------------------------------------------------------------------------------
// PATH
const path = require('path');
const fs = require('fs');

console.log('=== path.join() ===');
const joinedPath = path.join('folder', 'subfolder', 'file.txt');
console.log('Joined Path:', joinedPath); // folder/subfolder/file.txt yoki folder\subfolder\file.txt

console.log('\n=== path.resolve() ===');
const resolvedPath = path.resolve('folder', 'file.txt');
console.log('Resolved Path:', resolvedPath); // Absolyut yo‘l

console.log('\n=== path.basename() ===');
const filePath = '/home/user/app.js';
console.log('Basename:', path.basename(filePath));        // app.js
console.log('Basename without .js:', path.basename(filePath, '.js')); // app

console.log('\n=== path.dirname() ===');
console.log('Dirname:', path.dirname(filePath)); // /home/user

console.log('\n=== path.extname() ===');
console.log('Extname:', path.extname('readme.txt'));     // .txt
console.log('Extname (archive):', path.extname('archive.tar.gz')); // .gz

console.log('\n=== path.parse() ===');
const parsed = path.parse('/home/user/docs/file.txt');
console.log(parsed);
/*
{
  root: '/',
  dir: '/home/user/docs',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
}
*/

console.log('\n=== path.format() ===');
const formatted = path.format({
    dir: '/home/user/docs',
    name: 'file',
    ext: '.txt'
});
console.log('Formatted path:', formatted); // /home/user/docs/file.txt

console.log('\n=== path.isAbsolute() ===');
console.log('Is absolute (/home):', path.isAbsolute('/home/user'));   // true
console.log('Is absolute (relative):', path.isAbsolute('docs/file')); // false

// BONUS: Fayl yaratish va o‘qish (fs bilan)
console.log('\n=== BONUS: fs.writeFileSync & readFileSync ===');
const examplePath = path.join(__dirname, 'example.txt');
fs.writeFileSync(examplePath, 'Bu path modulining amaliy namunasidir.', 'utf8');

const content = fs.readFileSync(examplePath, 'utf8');
console.log('File Content:', content);

