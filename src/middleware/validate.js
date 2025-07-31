import { AppError } from "../error/AppError.js";

const checkValidate =(schema) => {
    return async(req, _res, next) => {
        try {                        
            const schemaValid=schema();            
            const {error}=schemaValid.validate(req.body,{ abortEarly: false });                        
            if (error) {
                throw new AppError(`${ error?.details[0]?.message ?? 'Error input validation'}`)
            }                         
            next()
        } catch (error) {
            next(error)
        }
    }

}

export default checkValidate