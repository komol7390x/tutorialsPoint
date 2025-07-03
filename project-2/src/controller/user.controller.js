import fs from 'fs'
import { askPrompt } from "../../../prompt/prompt.js";
import {showFolder,copyFileWithProgress,resolTFolder} from '../helper/user.helper.js'

import { fileURLToPath } from 'url';
import { dirname,join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copyFolder=join(__dirname,'../uploads/clone');
const orginalFolder=join(__dirname,'../uploads/orginal');
// -----------------------------------------------------------------
// mini func
const foldersFile=()=>{
  console.log('\nOrginal Folder\n');
  resolTFolder(orginalFolder)
  console.log('\n------------------------------------\n');
  console.log('Copy Folder\n');
  resolTFolder(copyFolder)
}
// -----------------------------------------------------------------
//COPY
export const copyFile =  ()=> {               
  console.clear();
  console.log("COPY File\n\n")
  const files = showFolder();
  const ask = Number(askPrompt("\n>>> "));
  console.clear()
  const selectedFile = files[ask - 1];
  if (!selectedFile) {
    console.error("❌ Tanlangan file topilmadi!");
    return;
  }

  const fromPath = join(orginalFolder, selectedFile);
  const toPath = join(copyFolder, selectedFile)

  try {
    copyFileWithProgress(fromPath, toPath, (percent) => {
      console.clear();
      console.log(`📦 Nusxalanmoqda: ${percent}%`);
      if(percent>=100){
        console.clear()
        console.log(`${selectedFile} faylni nusxalandi :)\n`)
        foldersFile()
        return
      }
    });
  } catch (err) {
    console.error("❌ Xatolik:", err.message);
  }
};
// ------------------------------------------------------------------
//MOVE
export const moveFile = () => {               //MOVE
  console.clear();
  console.log("MOVE File\n\n");
  const files = showFolder();
  const ask = Number(askPrompt("\n>>> "));

  const selectedFile = files[ask - 1];
  if (!selectedFile) {
    console.error("❌ Fayl topilmadi!");
    return;
  }

  const fromPath = join(orginalFolder, selectedFile);
  const toPath = join(copyFolder, selectedFile);

  try {
    copyFileWithProgress(fromPath, toPath, (percent) => {
      console.clear();
      console.log(`📦 Ko'chirilmoqda: ${percent}%`);
      if(percent>=100){
          console.clear();
          console.log(`${selectedFile} file ko'chirildi :)`);
          foldersFile()
            fs.unlink(fromPath,(err)=>{
              if(err){
                return
              }
            });
      }
    });
  } catch (err) {
    console.error("❌ Ko'chirishda xatolik:", err.message)
  }
};



