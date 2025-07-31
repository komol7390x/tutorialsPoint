import logger from "./Winston.js"

export const successRes = (res, resData, statusCode = 200) => {
    const stack=res.stack
    logger.info(`${resData}${statusCode}`)
    return res.status(statusCode).json({
        statusCode,
        message: 'success',
        data: resData
    })
}
