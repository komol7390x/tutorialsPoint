import {spawnFunc,forkFunck} from '../controller/cars.controller.js'

export const chooseRequire=(item)=>{
    if(item==1){
        spawnFunc()
    }else if(item==2){
        forkFunck()
    }else{
        console.log(`Sorry, you entered an invalid request ${item}`);
        return
    }   
}