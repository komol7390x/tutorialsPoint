const fs = require("fs");
const path=require('node:path')

function copyFileWithProgress(orginal, copy, onProgress) {
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

module.exports = { copyFileWithProgress };

  
