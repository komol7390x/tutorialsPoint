import logger from '../utils/Winston.js'

export const globalErrorHandle = (err, _req, res, _next) => {    
    console.log('Error global file: ', err.message);
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';
    const stack = err.stack || 'not file found :(';
    
    logger.error(`StatusCode:  ${statusCode} , Messsage: ${message}`)

    return res.status(statusCode).json({
        statusCode,
        message
    })
}