import { config } from "dotenv";
import {join} from 'path'
const path=join(process.cwd(),'../../.env')
config({path})

export const configFile = {
    PORT: process.env.PORT,
    mongo_url: process.env.MONGODB_URI,
    TOKEN: {
        ACCESS_TOKEN_KEY: String(process.env.ACCESS_TOKEN_KEY),
        ACCESS_TOKEN_TIME: String(process.env.ACCESS_TOKEN_TIME)
    }
}

console.log(configFile);
