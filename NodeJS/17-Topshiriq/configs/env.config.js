import { config } from "dotenv";
import { join } from "path";
const envPath=join(process.cwd(),'../../.env')
config({path:envPath})

export const configFile={
    PORT:process.env.PORT,
    mongo_url:process.env.MONGODB_URI,
    jwtPK:process.env.jwtPrivetKey
}
