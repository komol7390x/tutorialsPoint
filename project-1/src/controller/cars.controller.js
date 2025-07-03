import {fork,spawn} from 'child_process'
import { fileURLToPath } from 'url';
import { dirname,join } from 'path';

import {print} from '../helper/cars.helper.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// -----------------------------------------------------
// FORK
export const forkFunck=()=>{
    console.clear()
    console.log('Mercedes-benz\n');
    try {
        const forkPath=join(__dirname,'../uploads/MERS.js');
        const mers = fork(forkPath);
        mers.send({ message: 'mers' });
        mers.on('message', (data) => {
            if (Array.isArray(data)) {
        data.forEach(element => print(element));}
        });
        mers.on('error', (err) => console.log(err));
    } catch (error) {
        console.log(`Not found ${error.message}`)
    }
}
// -----------------------------------------------------
// SPAWN
export const spawnFunc=()=>{
       try {
        console.clear();
        console.log('BMW\n');
        const spawnPath=join(__dirname,'../uploads/BMW.js')
        const bmw = spawn('node', [spawnPath]);
        let result = '';
        bmw.stdout.on('data', (data) => {
            result += data.toString()
        });
        bmw.stderr.on('data', (data) => {
            console.error('Xatolik:', data.toString());
        });
        bmw.on('close', () => {
            try {
                const parsed = JSON.parse(result);
                parsed.forEach(item => print(item))
            } catch (err) {
                console.error('JSON parse error:', err);
            }
        });
    } catch (error) {
        console.log(`Error not found ${error.message}`);

    }
}
