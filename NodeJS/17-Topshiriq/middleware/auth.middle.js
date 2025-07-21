import { configFile } from '../configs/env.config.js'
import jwt from 'jsonwebtoken';

export const checkAuth = (req, res, next) => {
    try {
        const token = req.header('x-auth-token')
        if (!token) {
            return res.status(401).send('Token topilmadi kirishga ruxsat yo\'q')
        }
        const decode = jwt.verify(token, configFile.jwtPK)
        res.user = decode
        next()
    } catch (error) {
        return res.status(400).json({
            message: 'Error token',
            error: error.message
        })
    }
}