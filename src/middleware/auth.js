import { configFile } from '../config/env.config.js'
import { AppError } from '../error/AppError.js';
import token from '../utils/Token.js'

export const AuthGuard = async (req, res, next) => {
    try {
        const auth = req.headers?.authorization;
        if (!auth) {
            throw new AppError('Authorizathion Error',400)
        }        
        const bearer = auth.split(' ')[0];
        const authToken = auth.split(' ')[1]
        if (bearer !== 'Bearer' || !authToken) {
            throw new AppError('Authorizathion Error',400)
        }
        const user = await token.verifyToken(authToken, configFile.TOKEN.ACCESS_TOKEN_KEY)
        req.user = user;
        next()
    } catch (error) {
        next(error)
    }
}