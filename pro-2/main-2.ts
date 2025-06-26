import * as fs from "fs";
import { join } from "path";
import { askPrompt } from "../prompt/prompt";
import { copyFileWithProgress } from './progress.js'

// const orginalFolder = join(__dirname, "orginal");
const orginalFolder=join(__dirname,'../../orginal')
const cloneFolder = join(__dirname, "clone");
if(!fs.existsSync(cloneFolder)){
  fs.mkdirSync(cloneFolder,{recursive:true})
}
console.log("\tMenu\n\n1. Copy File\n2. Move File\n3. Show Folder")

const showFolder = (): string[] => {                       //Show Folder
  const files = fs.readdirSync(orginalFolder);
  files.forEach((file, index) => {
    const fullPath = join(orginalFolder, file);
    const stats = fs.statSync(fullPath);
    const sizeMB = (stats.size / 1024 / 1024).toFixed(2);
    console.log(`${index + 1}. ${file} ------------- ${sizeMB} MB`);
  });
  return files;
};
// ---------------------------------------------------------------------------
const copyFile = async (): Promise<void> => {               //COPY
  console.clear();
  console.log("COPY File\n\n")
  const files = showFolder();
  const ask = Number(await askPrompt("\n>>> "));
  console.clear()
  const selectedFile = files[ask - 1];
  if (!selectedFile) {
    console.error("❌ Tanlangan file topilmadi!");
    return;
  }

  const fromPath = join(orginalFolder, selectedFile);
  const toPath = join(cloneFolder, selectedFile)

  try {
    copyFileWithProgress(fromPath, toPath, (percent) => {
      console.clear();
      console.log(`📦 Nusxalanmoqda: ${percent}%`);
      if(percent>=100){
        console.clear()
        console.log(`${selectedFile} faylni nusxalandi :)`)
        return
      }
    });
  } catch (err: any) {
    console.error("❌ Xatolik:", err.message);
  }
};
// ---------------------------------------------------------------------------
const moveFile = async (): Promise<void> => {               //MOVE
  console.clear();
  console.log("MOVE File\n\n");
  const files = showFolder();
  const ask = Number(await askPrompt("\n>>> "));

  const selectedFile = files[ask - 1];
  if (!selectedFile) {
    console.error("❌ Fayl topilmadi!");
    return;
  }

  const fromPath = join(orginalFolder, selectedFile);
  const toPath = join(cloneFolder, selectedFile);

  try {
    copyFileWithProgress(fromPath, toPath, (percent) => {
      console.clear();
      console.log(`📦 Ko'chirilmoqda: ${percent}%`);
      if(percent>=100){
          console.clear();
          console.log(`${selectedFile} file ko'chirildi :)`);
            fs.unlink(fromPath,(err)=>{
              if(err){
                return
              }
            });
      }
    });
  } catch (err: any) {
    console.error("❌ Ko'chirishda xatolik:", err.message)
  }
};
// ---------------------------------------------------------------------------
const showMenu = async (): Promise<void> => {               //MENU
  const choose = Number(await askPrompt("\n>>> Tanlovingiz: "));

  switch (choose) {
    case 1:
      await copyFile();
      break;
    case 2:
      await moveFile();
      break;
    case 3:
      console.clear();
      console.log(`${orginalFolder} - Folder\n`);
      showFolder();
      break;
    default:
      console.log("❌ Noto'g'ri tanlov!");
      break;
  }
};
// ---------------------------------------------------------------------------
showMenu();


