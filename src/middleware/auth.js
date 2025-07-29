import { configFile } from '../config/env.config.js'
import token from '../utils/Token.js'

export const AuthGuard = async (req, res, next) => {
    try {
        const auth = req.headers?.authorization;
        if (!auth) {
            return res.status(400).json({
                statusCode:400,
                message:'Authorizathion Error'
            })
        }        
        const bearer = auth.split(' ')[0];
        const authToken = auth.split(' ')[1]
        if (bearer !== 'Bearer' || !authToken) {
            return res.status(400).json({
                statusCode:400,
                message:'Authorizathion Error'
            })
        }
        const user = await token.verifyToken(authToken, configFile.TOKEN.ACCESS_TOKEN_KEY)
        req.user = user;
        next()
    } catch (error) {
        next(error)
    }
}