import {config} from 'dotenv'
import {join} from 'path'
const pathEnv=join(process.cwd(),'../../../.env')

config({path:pathEnv});
export const configEnv={
    PORT:process.env.PORT,
    mongoURI:process.env.MONGODB_URI
}

