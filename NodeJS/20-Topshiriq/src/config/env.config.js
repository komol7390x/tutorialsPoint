import { config } from "dotenv";
config()

export const configFile = {
    PORT: process.env.PORT,
    mongo_url: process.env.MONGODB_URI,
    jwtPK: process.env.jwtPrivetKey,

    TOKEN: {
        ACCESS_TOKEN_KEY: String(process.env.ACCESS_TOKEN_KEY),
        ACCESS_TOKEN_TIME: String(process.env.ACCESS_TOKEN_TIME)
    }
}
