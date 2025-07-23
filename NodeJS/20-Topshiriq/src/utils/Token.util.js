import jwt from 'jsonwebtoken'
import {configFile} from '../config/env.config.js'
class Token{
    generateAccessToken(payload) {
        return jwt.sign(payload, configFile.TOKEN.ACCESS_TOKEN_KEY, {
            expiresIn: configFile.TOKEN.ACCESS_TOKEN_TIME
        });
    }
    writeToCookie(res, key, value, expireDay) {
        res.cookie(key, value, {
            httpOnly: true,
            secure: true,
            maxAge: Number(expireDay) * 24 * 60 * 60 * 1000
        });
    }

    verifyToken(token, secretKey) {
        return jwt.verify(token, secretKey);
    }
}