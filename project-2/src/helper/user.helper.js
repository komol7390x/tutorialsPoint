import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname,join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// ------------------------------------------------------------------------------
//copyFile
export function copyFileWithProgress(orginal, copy, onProgress) {
    const readStream = fs.createReadStream(orginal);
    const writeStream = fs.createWriteStream(copy);

    const totalSize = fs.statSync(orginal).size;
    let copiedSize = 0;

    readStream.on("data", (chunk) => {
        copiedSize += chunk.length;

        const percent = ((copiedSize / totalSize) * 100).toFixed(2);
        onProgress(percent);
    });

    readStream.pipe(writeStream);

    writeStream.on("finish", () => {
        onProgress(100);
    });

    readStream.on("error", (err) => {
        console.error("❌ O'qishda xatolik:", err.message);
    });

    writeStream.on("error", (err) => {
        console.error("❌ Yozishda xatolik:", err.message);
    });
}
// ----------------------------------------------------------------------------
// ResoltFolder
export const resolTFolder=(item)=>{
    const files = fs.readdirSync(item);
    files.forEach((file, index) => {
        const fileSize=join(item,file)
        const stats = fs.statSync(fileSize);
        const sizeMB = (stats.size / 1024 / 1024).toFixed(2);
        console.log(`${index + 1}. ${file} ------------- ${sizeMB} MB`);
    });
    return files;
}
// ----------------------------------------------------------------------------
//Show Folder
export const showFolder = () => {                       
    const fullPath = join(__dirname,'../uploads/orginal');
    const files=resolTFolder(fullPath);
    return files
};
