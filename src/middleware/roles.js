export const RolesGuard = (...roles) => {
    return async (req, res, next) => {
        try {
            const role = await req.user?.role
            console.log(role);
            
            if (roles.includes(role)&& role) {
                return next()
            }
            return res.status(403).json({
                statusCodde:403,
                message:'Forbidden user'
            })
        } catch (error) {
            next(error)
        }
    }
}