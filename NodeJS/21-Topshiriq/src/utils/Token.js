import jwt from 'jsonwebtoken'
import {configFile} from '../config/env.config.js'
class Token{

    async AccessToken(payload) {
        return jwt.sign(payload, configFile.TOKEN.ACCESS_TOKEN_KEY, {
            expiresIn: configFile.TOKEN.ACCESS_TOKEN_TIME
        });
    }

    async writeToCookie(res, key, value, expireDay) {
        res.cookie(key, value, {
            httpOnly: true,
            secure: true,
            maxAge: Number(expireDay) * 24 * 60 * 60 * 1000
        });
    }

    async verifyToken(token, secretKey) {
        return jwt.verify(token, secretKey);
    }
}

export default new Token();