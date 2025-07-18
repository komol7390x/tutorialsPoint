import {config} from 'dotenv'
import {join} from 'path'
console.log(pathEnv);

const pathEnv=join(process.cwd(),'../../.env')

config({path:pathEnv});
const configEnv={
    PORT:process.env.PORT,
    mongoURI:process.env.MONGODB_URI
}
console.log(configEnv);

