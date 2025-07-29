const checkValidate =(schema) => {
    return async(req, res, next) => {
        try {
            const schemaValid=schema();
            const {error}=schemaValid.validate(req.body);            
            if (error) {
                return res.status(422).json({
                    statusCode: 422,
                    message: error?.details[0]?.message ?? 'Error input validation'
                });
            }            
            next()
        } catch (error) {
            return res.status(500).json({
                statusCode: 500,
                message: error.message || 'Invalid server error'
            })
        }
    }

}

export default checkValidate