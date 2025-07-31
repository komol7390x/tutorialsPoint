import { AppError } from "../error/AppError.js"

export const RolesGuard = (...roles) => {
    return async (req, res, next) => {
        try {
            const role = await req.user?.role                        
            if (roles.includes(role)&& role) {
                return next()
            }
            throw new AppError('Forbidden user',403)
        } catch (error) {
            next(error)
        }
    }
}