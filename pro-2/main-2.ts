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

// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------

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


