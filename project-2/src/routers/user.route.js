import {copyFile,moveFile} from '../controller/user.controller.js';
import {showFolder} from '../helper/user.helper.js'

export const chooseRequire=(item)=>{
    console.clear()
    if(item==1){
        console.log('Copy File\n');
        copyFile()
    }else if(item==2){
        console.log('MoveFile\n');
        moveFile()
    }else if(item==3){
        console.log('Show File\n');
        showFolder()
    }else{
        console.log(`Sorry, you entered an invalid request ${item}`);
        return
    }
}